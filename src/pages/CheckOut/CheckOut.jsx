import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { nanoid } from "nanoid";
import {
  Wrapper,
  Container,
  OrderSummaryContainer,
  Input,
  ErrorMessage,
  OrderSummaryHeader,
  ProductContainer,
  CouponContainer,
  CouponForm,
  CouponButton,
  PricesWrapper,
  PricesContainer,
  PriceHeader,
  PriceText,
  TotalPricesContainer,
  TotalPricesText,
  SuccessMessage,
  CartErrorMessageContainer,
  Icon,
  Title,
} from "./CheckOut.styles";
import ShoppingCartItem from "../../components/ShoppingCart/ShoppingCartItem/ShoppingCartItem";
import CheckOutForm from "../../components/CheckOutPage/CheckOutForm";
import AuthContext from "../../context/AuthProvider";
import { deleteAllProducts } from "../../store/ShoppingCartItems/actions";
import { setNotification } from "../../store/Notification/actions";

const CheckOut = () => {
  const initialFormData = {
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    shipping: "fedex",
    products: [],
    activatedCoupon: null,
    payment: {
      paymentMethod: "cash",
      details: null,
    },
    coupon: "",
  };
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState("fedex");
  const [totalCost, setTotalCost] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [paymentDropDown, setPaymentDropDown] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({});
  const [couponMessage, setCouponMessage] = useState(null);
  const [coupon, setCoupon] = useState(null);
  const products = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    calculatePrices();
  }, [formData.activatedCoupon]);

  const validateFormData = () => {
    const formErrors = {};

    if (
      (formData.payment.paymentMethod === "card" &&
        (!formData.payment.details ||
          JSON.stringify(formData.payment.details) ===
            JSON.stringify({
              cardNumber: "",
              expiryDate: "",
              cvc: "",
            }))) ||
      (formData.coupon &&
        formData.activatedCoupon &&
        typeof formData.activatedCoupon !== "object")
    ) {
      formErrors.payment = "Card details are required for card payment.";
    }

    if (!products || products.length === 0) {
      formErrors.products = "Please add at least one item to your order.";
    }

    Object.keys(formData).forEach((key) => {
      if (
        formData[key] === "" &&
        key !== "payment" &&
        key !== "coupon" &&
        key !== "products"
      ) {
        formErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }
    });

    console.log(errors);
    const phoneNumberRegex = /^\d{10,12}$/;
    if (!phoneNumberRegex.test(formData.phone)) {
      formErrors.phoneFormat = true;
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateFormData();
    if (!isValid) {
      return;
    }
    try {
      const { data } = await axios.post(
        `https://super-shop-backend-five.vercel.app/api/user/order`,
        formData,
        {
          headers: {
            "x-auth-token": `${auth?.accessToken}`,
          },
        }
      );
      const { orderId } = data;
      if (orderId) {
        setTimeout(() => {
          navigate(`/user/orders/${orderId}`);
          dispatch(deleteAllProducts());
        }, 1000);
      }
      dispatch(setNotification(true, `Order Placed Successfully`, "success"));
    } catch (err) {
      console.log(err);
      dispatch(setNotification(true, `There was an error`, "failure"));
    }
  };

  const handleShippingChange = (shippingMethod) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      shipping: shippingMethod,
    }));
  };

  const handlePaymentMethod = (paymentMethod) => {
    if (paymentMethod === "cash") {
      setCardDetails({
        cardNumber: "",
        expiryDate: "",
        cvc: "",
      });

      setFormData((prevFormData) => ({
        ...prevFormData,
        payment: {
          paymentMethod: "cash",
          details: null,
        },
      }));
    } else if (paymentMethod === "card") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        payment: {
          paymentMethod: "card",
          details: cardDetails,
        },
      }));
    }
  };

  const calculateShippingCosts = () => {
    if (formData.shipping === "fedex") {
      setShippingCost(60.0);
    } else if (formData.shipping === "UPS") {
      setShippingCost(20.0);
    }
  };

  const calculatePrices = () => {
    const { activatedCoupon } = formData;
    if (products) {
      let subTotal = products.reduce(
        (accumulator, item) => accumulator + item.finalPrice,
        0
      );
      let totalCost = subTotal + shippingCost;
      let discount = products.reduce(
        (accumulator, item) =>
          accumulator + item.prices.discount * item.quantity,
        0
      );

      if (activatedCoupon) {
        const discountPercentage =
          parseFloat(activatedCoupon.discountType.value) / 100;
        const discountPrice = subTotal - subTotal * discountPercentage;
        if (
          subTotal > activatedCoupon.minimumAmount &&
          activatedCoupon.discountType.type === "percentage"
        ) {
          discount += subTotal * discountPercentage;
          subTotal = discountPrice;
          totalCost = subTotal + shippingCost;
        } else if (
          subTotal > activatedCoupon.minimumAmount &&
          activatedCoupon.discountType.type === "fixed"
        ) {
          subTotal = subTotal - parseFloat(activatedCoupon.discountValue);
          totalCost = subTotal + shippingCost;
          discount += parseFloat(activatedCoupon.discountType.value);
        }
      }
      formData.totalCost = totalCost;
      setDiscount(discount);
      setTotalCost(totalCost.toFixed(2));
      setSubTotal(subTotal.toFixed(2));
    }
  };

  useEffect(() => {
    calculatePrices();
  }, [products, shippingCost]);

  useEffect(() => {
    calculateShippingCosts();
  }, [formData.shipping]);

  useEffect(() => {
    if (formData.payment.paymentMethod === "cash") {
      setPaymentDropDown(false);
    } else if (formData.payment.paymentMethod === "card") {
      setPaymentDropDown(true);
    }
  }, [formData.payment.paymentMethod]);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevCardData) => ({
      ...prevCardData,
      [name]: value,
    }));
    handlePaymentMethod("card");
  };

  const handleCouponChange = (e) => {
    const { name, value } = e.target;
    if (value === "") {
      calculatePrices();
      setFormData((prevFormData) => ({
        ...prevFormData,
        activatedCoupon: null,
      }));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCouponCode = async (e) => {
    e.preventDefault();
    if (formData.coupon !== "") {
      try {
        const { data } = await axios(
          `https://super-shop-backend-five.vercel.app/api/coupons/${formData.coupon}`
        );
        setCouponMessage(true);
        setTimeout(() => {
          setCouponMessage(null);
        }, 1000);
        setCoupon(data);
      } catch (err) {
        console.log(err);
        setCouponMessage(false);
        setTimeout(() => {
          setCouponMessage(null);
        }, 1000);
        setCoupon(null);
      }
    }
  };

  useEffect(() => {
    if (coupon !== null) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        activatedCoupon: coupon,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        activatedCoupon: null,
      }));
    }
  }, [coupon]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      products: products,
    }));
  }, [products]);

  return (
    <Wrapper>
      <Container>
        <CheckOutForm
          errors={errors}
          formData={formData}
          handleChange={handleChange}
          handleShippingChange={handleShippingChange}
          paymentDropDown={paymentDropDown}
          handleCardChange={handleCardChange}
          handlePaymentMethod={handlePaymentMethod}
          handleSubmit={handleSubmit}
        />
        <OrderSummaryContainer>
          <OrderSummaryHeader>Order Summary</OrderSummaryHeader>
          <ProductContainer>
            {products.length > 0 &&
              products.map((item) => (
                <ShoppingCartItem key={nanoid()} product={item} />
              ))}
            {products.length === 0 && (
              <CartErrorMessageContainer>
                <Icon>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1.65em"
                    width="1.65em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
                  </svg>
                </Icon>
                <Title>No Items Added Yet!</Title>
              </CartErrorMessageContainer>
            )}
          </ProductContainer>
          <CouponContainer>
            <CouponForm>
              <Input
                name="coupon"
                placeholder="Input your coupon code"
                value={formData.coupon}
                onChange={handleCouponChange}
              />
              <CouponButton onClick={handleCouponCode}>Apply</CouponButton>
            </CouponForm>
            {couponMessage === true && (
              <SuccessMessage>Coupon is activated!</SuccessMessage>
            )}
            {couponMessage === false && (
              <ErrorMessage>Coupon is invalid!</ErrorMessage>
            )}
          </CouponContainer>
          <PricesWrapper>
            <PricesContainer>
              <PriceHeader>Subtotal</PriceHeader>
              <PriceText>$ {subTotal}</PriceText>
            </PricesContainer>
            <PricesContainer>
              <PriceHeader>Shipping Cost</PriceHeader>
              <PriceText>$ {shippingCost}</PriceText>
            </PricesContainer>
            <PricesContainer>
              <PriceHeader>Discount</PriceHeader>
              <PriceText color={"#FB923C"}>$ -{discount.toFixed(2)}</PriceText>
            </PricesContainer>
            <TotalPricesContainer>
              <TotalPricesText>Total Cost</TotalPricesText>
              <TotalPricesText>$ {totalCost}</TotalPricesText>
            </TotalPricesContainer>
          </PricesWrapper>
        </OrderSummaryContainer>
      </Container>
    </Wrapper>
  );
};

export default CheckOut;
