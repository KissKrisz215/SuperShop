import React, { useEffect, useState } from "react";
import { Container, CartIcon, NumberContainer } from "./ShoppingCart.styles";
import CartDropDown from "../CartDropDown";
import { useDispatch, useSelector } from "react-redux";
import { setDropDownOpen } from "../../../store/CartDropDown/actions";
import CartInfo from "../CartInfo/CartInfo";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";

const finalAmountTest = 11361.33;

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const ModalBackDrop = useSelector((state) => state.ModalBackDrop);
  const cartProducts = useSelector((state) => state.shoppingCart);

  const handleDropDown = () => {
    dispatch(setModalBackDrop(true));
    dispatch(setDropDownOpen());
  };

  const totalFinalPrice = cartProducts
    .reduce((total, product) => total + product.finalPrice, 0)
    .toFixed(2);

  return (
    <Container>
      <CartIcon onClick={() => handleDropDown()}>
        <NumberContainer>{cartProducts.length}</NumberContainer>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6 drop-shadow-xl"
          height="1.35em"
          width="1.35em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </CartIcon>
      <CartInfo
        finalItems={cartProducts.length}
        finalAmount={totalFinalPrice}
      />
    </Container>
  );
};

export default ShoppingCart;
