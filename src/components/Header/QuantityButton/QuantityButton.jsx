import React from "react";
import { Container, Label, ButtonContainer } from "./QuantityButton.styles";

const QuantityButton = ({ width, height, quantity }) => {
  return (
    <Container width={width} height={height}>
      <ButtonContainer>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="0.7em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </ButtonContainer>
      <Label>{quantity}</Label>
      <ButtonContainer>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="0.7em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </ButtonContainer>
    </Container>
  );
};

export default QuantityButton;
