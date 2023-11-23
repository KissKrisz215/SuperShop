import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  Container,
  HeaderContainer,
  HeaderIcon,
  HeaderTitle,
  HeaderTitleContainer,
  CloseButtonContainer,
  CloseButtonIcon,
  CloseButtonTitle,
  ContentContainer,
  FooterContainer,
  CheckOutButton,
  ButtonTitle,
  PriceContainer,
  CartEmptyArray,
  Title,
  Description,
  IconContainer,
  Icon,
} from "./CartDropDown.styles";
import {
  setDropDownOpen,
  setDropDownClosed,
} from "../../../store/CartDropDown/actions";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";

const CartDropDown = () => {
  const cartRef = useRef(null);
  const dispatch = useDispatch();
  const CartDropDown = useSelector((state) => state.cartDropDown);
  const ModalBackDrop = useSelector((state) => state.ModalBackDrop);
  const products = useSelector((state) => state.shoppingCart);

  const totalFinalPrice = products
    .reduce((total, product) => total + product.finalPrice, 0)
    .toFixed(2);

  const handleDropDown = () => {
    dispatch(setDropDownClosed());
    dispatch(setModalBackDrop(false));
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        handleDropDown();
      }
    };

    if (CartDropDown) {
      setTimeout(() => {
        document.addEventListener("click", handleDocumentClick);
      }, 1);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [CartDropDown]);

  return (
    <Container ref={cartRef} cartdropdown={CartDropDown}>
      <HeaderContainer>
        <HeaderTitleContainer>
          <HeaderIcon>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M320 264l-89.6 112-38.4-44.88"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
              ></path>
            </svg>
          </HeaderIcon>
          <HeaderTitle>Shopping Cart</HeaderTitle>
        </HeaderTitleContainer>
        <CloseButtonContainer onClick={() => handleDropDown()}>
          <CloseButtonIcon>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="0.85em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
            </svg>
          </CloseButtonIcon>
          <CloseButtonTitle>Close</CloseButtonTitle>
        </CloseButtonContainer>
      </HeaderContainer>
      <ContentContainer>
        {products.length > 0 ? (
          products.map((item) => (
            <ShoppingCartItem id={nanoid()} product={item} />
          ))
        ) : (
          <CartEmptyArray>
            <IconContainer>
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
            </IconContainer>
            <Title>Your cart is empty</Title>
            <Description>
              No items added in your cart. Please add product to your cart list.
            </Description>
          </CartEmptyArray>
        )}
      </ContentContainer>
      <FooterContainer>
        <CheckOutButton onClick={handleDropDown} to={"/checkout"}>
          <ButtonTitle>Proceed To Checkout</ButtonTitle>
          <PriceContainer>${totalFinalPrice}</PriceContainer>
        </CheckOutButton>
      </FooterContainer>
    </Container>
  );
};

export default CartDropDown;
