import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #f9fafb;
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1.5rem;
  @media only screen and ${breakpoints.device.xs} {
    flex-direction: row;
  }
`;

export const OrderSummaryContainer = styled.div`
  width: 100%;
  max-height: 650px;
  background-color: #ffff;
  border-radius: 0.4rem;
  border: 1px solid #e5e7eb;
  padding: 1.3rem 0.8rem;
  box-sizing: border-box;
  @media only screen and ${breakpoints.device.xs} {
    width: 40%;
    padding: 1.5rem;
  }
`;

export const OrderSummaryHeader = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
`;

export const ProductContainer = styled.div`
  max-height: 280px;
  overflow: scroll;
  margin-top: 1rem;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 0.7rem;
  border-radius: 0.3rem;
  padding: 0.6rem 1rem;
  border: 1px solid #e5e7eb;

  &:focus {
    outline: 1px solid ${(props) => props.theme.emeraldGreen};
  }

  &::placeholder {
    font-size: 0.65rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.emeraldGreen};
  border-radius: 0.2rem;
  padding: 0.75rem 1rem;
  border: none;
  cursor: pointer;
  color: #ffff;
  font-size: 0.7rem;
  transition: color 0.2s ease-in-out;
  width: 100%;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
  @media only screen and ${breakpoints.device.xxs} {
    width: auto;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CouponContainer = styled.div`
  margin: 1rem 0rem;
`;

export const CouponForm = styled.form`
  display: flex;
  gap: 1rem;
`;

export const CouponButton = styled.button`
  background-color: #ffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.3rem;
  font-size: 0.75rem;
  padding: 0.3rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.18s ease-in-out;
  &:hover {
    color: #ffff;
    background-color: ${(props) => props.theme.emeraldGreen};
    border: 1px solid ${(props) => props.theme.emeraldGreen};
  }
`;

export const PricesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const PricesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

export const PriceHeader = styled.p`
  font-size: 0.65rem;
  color: ${(props) => props.theme.mediumGray};
  font-weight: 600;
`;

export const PriceText = styled.p`
  color: ${(props) => props.color || "#1f2937"};
  font-size: 0.7rem;
  font-weight: 600;
`;

export const TotalPricesContainer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
`;

export const TotalPricesText = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
`;

export const CardInputDropDown = styled.div``;

export const SuccessMessage = styled.p`
  color: ${(props) => props.theme.emeraldGreen};
  font-size: 0.65rem;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.red};
  font-size: 0.65rem;
`;

export const PaymentInputContainer = styled.div``;

export const CartErrorMessageContainer = styled.div`
  min-height: 150px;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  flex-direction: column;
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.mediumGray};
`;

export const Title = styled.h5`
  font-size: 0.7rem;
  margin-bottom: 0.6rem;
  color: ${(props) => props.theme.mediumGray};
`;
