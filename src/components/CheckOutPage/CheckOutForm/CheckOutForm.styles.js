import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import breakpoints from "../../../styles/breakpoints";

export const FormContainer = styled.form`
  width: 100%;
  order: 1;
  padding: 0rem 0rem 1.3rem;
  @media only screen and ${breakpoints.device.xs} {
    width: 60%;
    order: 0;
  }
`;

export const FormWrapper = styled.div``;

export const FormHeader = styled.p`
  font-size: 0.75rem;
  color: #374151;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 0rem 0rem 1rem;
  @media only screen and ${breakpoints.device.xxs} {
    flex-direction: row;
  }
`;

export const PaymentInputContainer = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.7rem;
  color: ${(props) => props.theme.mediumGray};
  font-weight: 500;
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

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.red};
  font-size: 0.65rem;
`;

export const Header = styled.p`
  font-size: 0.7rem;
  color: ${(props) => props.theme.mediumGray};
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

export const ActionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  @media only screen and ${breakpoints.device.xs} {
    flex-direction: row;
  }
`;

export const ActionShoppingButton = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: #000;
  background-color: #eef2ff;
  border: 1px solid #e0e7ff;
  font-size: 0.65rem;
  padding: 0.7rem 0rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: 0.18s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    border: 1px solid #d9d9d9;
  }
  @media only screen and ${breakpoints.device.xs} {
    width: 50%;
  }
`;

export const ActionShoppingText = styled.p`
  font-size: 0.7rem;
`;

export const ActionOrderButton = styled.button`
  width: 100%;
  color: #ffff;
  background-color: ${(props) => props.theme.emeraldGreen};
  border: 1px solid ${(props) => props.theme.emeraldGreen};
  font-size: 0.65rem;
  padding: 0.7rem 0rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: 0.18s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
    border: 1px solid ${(props) => props.theme.darkGreen};
  }
  @media only screen and ${breakpoints.device.xs} {
    width: 50%;
  }
`;

export const ButtonFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 0.8rem;
`;
