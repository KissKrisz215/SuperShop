import React from "react";
import {
  Container,
  Header,
  Body,
  IconContainer,
  Title,
  Text,
} from "./CartInfo.styles";
import { useDispatch } from "react-redux";
import { setDropDown } from "../../../store/CartDropDown/actions";

const CartInfo = ({ finalItems, finalAmount }) => {
  const dispatch = useDispatch();
  return (
    <Container onClick={() => dispatch(setDropDown())}>
      <Header>
        <IconContainer>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
            ></path>
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
            ></path>
          </svg>
        </IconContainer>
        <Title>{finalItems} Items</Title>
      </Header>
      <Body>
        <Text>${finalAmount}</Text>
      </Body>
    </Container>
  );
};

export default CartInfo;
