import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "./ProductDropDown.styles";
import { setModalBackDrop } from "../../store/ModalBackDrop/actions";
import { setProductDropDown } from "../../store/ProductDropDown/actions";
import QuantityButton from "../Header/QuantityButton";

const ProductDropDown = () => {
  const isActive = useSelector((state) => state.product.isDropDown);
  const product = useSelector((state) => state.product.data);
  const isModalActive = useSelector((state) => state.ModalBackDrop);

  const dispatch = useDispatch();

  const handleDropDownClose = () => {
    dispatch(setProductDropDown(false));
  };

  useEffect(() => {
    if (isActive) {
      if (!isModalActive) {
        dispatch(setModalBackDrop(true));
      }
      console.log(product);
      document.body.style.overflow = "hidden";
    } else {
      dispatch(setModalBackDrop(false));

      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  return (
    <Container>
      <DropDownContainer>
        <ProductImageContainer to={`/product/${product.title}`}>
          <ProductImage src={product.image[0]} />
        </ProductImageContainer>
        <ProductContent>
          <Header>{product.title.en}</Header>
          <StockContainer>
            Stock:
            <StockText>{product.stock}</StockText>
          </StockContainer>
          <Description>{product.description.en}</Description>
          <Price>${product.prices.originalPrice}</Price>
          <ButtonsContainer>
            <QuantityButton
              width={"180px"}
              buttonHeight={"100%"}
              buttonWidth={"50px"}
              height={"50px"}
              quantity={5}
              position="static"
              border={"1px solid #D1D5DB"}
              fontSize={"0.85rem"}
            />
            <Button>Add to Cart</Button>
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
                      <ProductInfoTag key={index}>{item}</ProductInfoTag>
                    ));
                  })}
              </ProductInfoTagContainer>
            </ProductInfoText>
            <ProductInfoButtonContainer>
              <ProductInfoButton>More Info</ProductInfoButton>
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
