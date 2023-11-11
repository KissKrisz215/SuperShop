import React from "react";
import {
  Container,
  ProductImage,
  ProductImageContainer,
  Title,
  StockContainer,
  StockText,
  ProductContent,
  ProductPrice,
  Button,
  ContentText,
  DiscountContainer,
  DiscountedPrice,
  QuantityButtonContainer,
} from "./Product.styles";
import { useDispatch, useSelector } from "react-redux";
import { setProductDropDown } from "../../store/ProductDropDown/actions";
import { addDropDownProducts } from "../../store/ShoppingCartItems/actions";
import QuantityButton from "../Header/QuantityButton";

const Product = ({ data }) => {
  const products = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleDropDown = () => {
    dispatch(setProductDropDown(true, data));
  };

  const handleProductAdd = () => {
    dispatch(addDropDownProducts(data));
  };

  const isInCart = products.some((product) => product._id === data._id);

  return (
    <Container>
      <ProductImageContainer>
        <ProductImage onClick={handleDropDown} src={data.image[0]} />
      </ProductImageContainer>
      <ProductContent>
        <ContentText>
          <Title>{data.title.en}</Title>
          <ProductPrice>
            ${data.prices.price}
            {data.prices.discount > 0 && (
              <DiscountedPrice>{data.prices.originalPrice}</DiscountedPrice>
            )}
          </ProductPrice>
        </ContentText>

        {isInCart ? (
          <QuantityButtonContainer>
            <QuantityButton
              width={"75px"}
              height={"37px"}
              color={"#ffff"}
              background={"#10B981"}
              quantity={
                products.find((product) => product._id === data._id).quantity
              }
              product={data}
            />
          </QuantityButtonContainer>
        ) : (
          <Button onClick={() => handleProductAdd()}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="75%"
              width="75%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
            </svg>
          </Button>
        )}
      </ProductContent>
      <StockContainer>
        Stock:
        <StockText>{data.stock}</StockText>
      </StockContainer>
      {data.prices.discount > 0 && (
        <DiscountContainer>
          {data.prices.discount.toFixed(2)} % Off
        </DiscountContainer>
      )}
    </Container>
  );
};

export default Product;
