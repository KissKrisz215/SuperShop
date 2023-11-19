import React from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import {
  Container,
  CustomPaymentInputWrapper,
  PaymentTextContainer,
  PaymentDetailsContainer,
  Input,
} from "./PaymentInput.styles";

const PaymentInput = ({ handleCardChange }) => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta,
  } = usePaymentInputs();
  meta.error = null;

  return (
    <Container>
      <CustomPaymentInputWrapper {...wrapperProps}>
        <PaymentTextContainer>
          <svg {...getCardImageProps({ images })} />
          <Input
            name="cardNumber"
            {...getCardNumberProps({ onChange: handleCardChange })}
          />
        </PaymentTextContainer>
        <PaymentDetailsContainer>
          <Input
            name="expiryDate"
            {...getExpiryDateProps({ onChange: handleCardChange })}
          />
          <Input name="cvc" {...getCVCProps({ onChange: handleCardChange })} />
        </PaymentDetailsContainer>
      </CustomPaymentInputWrapper>
    </Container>
  );
};

export default PaymentInput;
