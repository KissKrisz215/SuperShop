import styled from "styled-components";
import { PaymentInputsWrapper } from "react-payment-inputs";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
`;

export const CustomPaymentInputWrapper = styled(PaymentInputsWrapper)`
  width: 100%;
  max-height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0rem;
`;

export const PaymentTextContainer = styled.div`
  width: 100%;
  font-size: 0.7rem;
  padding: 0;
  display: flex;
`;

export const PaymentDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 0.7rem;
`;

export const Input = styled.input`
  min-width: 100%;
  padding: 0.3rem 0rem !important;
`;
