import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoginFormContainer = styled.div`
  position: fixed;
  max-width: 500px;
  max-height: 600px;
  width: 85%;
  background: #ffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.6rem;
  padding: 2.5rem 1rem;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;

export const Title = styled.h5`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.mediumGray};
`;

export const FormBody = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const InputHeader = styled.p`
  font-size: 0.7rem;
  color: ${(props) => props.theme.mediumGray};
  font-weight: 500;
`;

export const InputContainer = styled.div`
  height: 45px;
  position: relative;
`;

export const Input = styled.input`
  width: calc(100% - 3.6rem);
  height: calc(100% - 0.6rem);
  font-size: 0.7rem;
  border-radius: 0.3rem;
  padding: 0.3rem 1.8rem;
  border: 1px solid #e5e7eb;

  &:focus {
    outline: 1px solid ${(props) => props.theme.emeraldGreen};
  }

  &::placeholder {
    font-size: 0.65rem;
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 0.55rem;
  top: calc(50%);
  transform: translateY(-50%);
  display: flex;
  align-items: flex-end;
`;

export const PasswordLinkContainer = styled.div`
  margin-top: 1.3rem;
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;

export const PasswordResetLink = styled.p`
  text-decoration: underline;
  font-size: 0.7rem;
  cursor: pointer;
`;

export const FormButton = styled.button`
  width: 90%;
  background-color: ${(props) => props.theme.emeraldGreen};
  border-radius: 0.2rem;
  padding: 0.75rem 0rem;
  border: none;
  cursor: pointer;
  color: #ffff;
  font-size: 0.75rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsDivider = styled.p`
  margin: 1.8rem;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const SignUpText = styled.p`
  font-size: 0.7rem;
  color: ${(props) => props.theme.mediumGray};
`;

export const SignUpLink = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.emeraldGreen};
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.mediumGray};
  font-size: 0.7rem;
`;
