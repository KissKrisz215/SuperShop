import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
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

export const Label = styled.label`
  font-size: 0.7rem;
  color: ${(props) => props.theme.mediumGray};
  font-weight: 500;
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

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.red};
  font-size: 0.65rem;
`;
