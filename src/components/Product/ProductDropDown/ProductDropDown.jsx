import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  Container,
  CloseButton,
  CloseButtonContainer,
  DropDownContainer,
  ProductImage,
  ProductContent,
  ProductImageContainer,
  Header,
  StockContainer,
  StockText,
  Description,
  Price,
  ButtonsContainer,
  Button,
  ProductInfo,
  ProductInfoText,
  ProductInfoButton,
  ProductInfoTitle,
  ProductCategoryLink,
  ProductInfoTag,
  ProductInfoTagContainer,
  ProductInfoButtonContainer,
  DiscountContainer,
  DiscountedPrice,
} from "./ProductDropDown.styles";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";
import { setProductDropDown } from "../../../store/ProductDropDown/actions";
import QuantityButton from "../../Product/QuantityButton";
import { increaseQuantity } from "../../../store/ShoppingCartItems/actions";
import { setNotification } from "../../../store/Notification/actions";

const ProductDropDown = () => {
  const isActive = useSelector((state) => state.product.isDropDown);
  const product = useSelector((state) => state.product.data);
  const isModalActive = useSelector((state) => state.ModalBackDrop);
  const [quantity, setQuantity] = useState(1);
  const dropdownRef2 = useRef(null);

  const dispatch = useDispatch();

  const handleAddToCard = () => {
    dispatch(increaseQuantity(product, quantity));
    setQuantity(1);
    dispatch(
      setNotification(
        true,
        `${quantity} ${product.title.en} Added to Cart`,
        "success"
      )
    );
  };
  const handleDropDownClose = () => {
    dispatch(setProductDropDown(false));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      handleDropDownClose();
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (isActive) {
      if (!isModalActive) {
        dispatch(setModalBackDrop(true));
      }
      document.body.style.overflow = "hidden";
    } else {
      dispatch(setModalBackDrop(false));

      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isActive) {
    return null;
  }

  return (
    <Container>
      <DropDownContainer ref={dropdownRef2}>
        {product.prices.discount > 0 && (
          <DiscountContainer>
            {product.prices.discount.toFixed(2)}% Off
          </DiscountContainer>
        )}
        <ProductImageContainer
          onClick={() => handleDropDownClose()}
          to={`/product/${product._id}`}
        >
          <ProductImage alt={`${product.title} Image`} src={product.image[0]} />
        </ProductImageContainer>
        <ProductContent>
          <Header>{product.title.en}</Header>
          <StockContainer>
            Stock:
            <StockText>{product.stock}</StockText>
          </StockContainer>
          <Description>{product.description.en}</Description>
          <Price>
            ${product.prices.originalPrice}
            {product.prices.discount > 0 && (
              <DiscountedPrice>{product.prices.originalPrice}</DiscountedPrice>
            )}
          </Price>
          <ButtonsContainer>
            <QuantityButton
              width={"180px"}
              buttonHeight={"100%"}
              buttonWidth={"50px"}
              height={"50px"}
              quantity={quantity}
              position="static"
              border={"1px solid #D1D5DB"}
              fontSize={"0.85rem"}
              increaseFunction={handleIncreaseQuantity}
              decreaseFunction={handleDecreaseQuantity}
            />
            <Button onClick={handleAddToCard}>Add to Cart</Button>
          </ButtonsContainer>
          <ProductInfo>
            <ProductInfoText>
              <ProductInfoTitle>
                Category:{" "}
                <ProductCategoryLink>
                  {product.category.name.en.toLowerCase().split(" ").join("-")}
                </ProductCategoryLink>
              </ProductInfoTitle>
              <ProductInfoTagContainer>
                {Array.isArray(product.tag) &&
                  product.tag.map((tagString) => {
                    const tags = JSON.parse(tagString);
                    return tags.map((item, index) => (
                      <ProductInfoTag key={nanoid()}>{item}</ProductInfoTag>
                    ));
                  })}
              </ProductInfoTagContainer>
            </ProductInfoText>
            <ProductInfoButtonContainer>
              <ProductInfoButton
                onClick={() => handleDropDownClose()}
                to={`/product/${product._id}`}
              >
                More Info
              </ProductInfoButton>
            </ProductInfoButtonContainer>
          </ProductInfo>
        </ProductContent>
      </DropDownContainer>
      <CloseButtonContainer onClick={handleDropDownClose}>
        <CloseButton>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="0.8em"
            width="0.8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </CloseButton>
      </CloseButtonContainer>
    </Container>
  );
};

export default ProductDropDown;
