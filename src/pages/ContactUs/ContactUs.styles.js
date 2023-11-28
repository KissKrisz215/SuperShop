import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.form`
  max-width: 1450px;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0rem;
  padding: 0rem 1.4rem;
  box-sizing: border-box;
  @media only screen and ${breakpoints.device.xxs} {
    margin: 3rem 0rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media only screen and ${breakpoints.device.xs} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  @media only screen and ${breakpoints.device.lg} {
    padding: 0rem 0rem;
  }
`;

export const ContactCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 0.3rem;
  min-height: 280px;
`;

export const ContactHeader = styled.h5`
  font-weight: 600;
  margin-top: 0.9rem;
`;

export const ContactDescription = styled.p`
  margin-top: 0.3rem;
  font-size: 0.75rem;
  max-width: 400px;
  text-align: center;
`;

export const ContactTextHiglighted = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.emeraldGreen};
  display: inline-block;
  margin-right: 0.2rem;
  font-size: 0.75rem;
  line-height: 1.7rem;
`;

export const CustomFontAwesome = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.emeraldGreen};
  font-size: 1.6rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  min-height: 700px;
`;

export const FormImageContainer = styled.div`
    display: none;
  @media only screen and ${breakpoints.device.sm} {
    display:block;
    padding:0rem 0rem 0rem 2.5rem;
    width: 65%;
  min-height: 100%;
  display: flex;
  align-items: center;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 60%;
  }
  }
`;

export const FormImage = styled.img`
  width: 75%;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1.4rem;
  @media only screen and ${breakpoints.device.xxs} {
    width: 100%;
    padding: 0rem 1.4rem;
  }
  @media only screen and ${breakpoints.device.sm} {
    width: 40%;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 40%;
  }
`;

export const FormHeader = styled.h5`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const FormDescription = styled.p`
  margin-top: 0.6rem;
  font-size: 0.8rem;
`;

export const Form = styled.form`
  margin: 2.5rem 0rem;
  display: flex;
  flex-direction: column;
`;

export const NameInputContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 0.8rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #e5e7eb;
  opacity: 0.75;
  padding: 0.6rem 0.4rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  box-sizing: border-box;
  color: ${(props) => props.theme.mediumGray};
  outline: none;
  &:focus {
    outline: 1px solid ${(props) => props.theme.emeraldGreen};
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.mediumGray};
  font-size: 0.7rem;
  margin-bottom: 0.4rem;
`;

export const TextArea = styled.textarea`
  border: 1px solid #e5e7eb;
  opacity: 0.75;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  padding: 0.6rem 0.4rem;
  outline: none;
  &:focus {
    outline: 1px solid ${(props) => props.theme.emeraldGreen};
  }
`;

export const Button = styled.button`
  margin-top: 1.3rem;
  background-color: ${(props) => props.theme.emeraldGreen};
  border: none;
  color: #ffff;
  border-radius: 0.3rem;
  padding: 0.65rem 0.9rem;
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: 0.18s ease-in-out background-color;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
  @media only screen and ${breakpoints.device.xxs} {
    width: auto;
  }
`;

export const ButtonContainer = styled.div``;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
`;

export const FormError = styled.p`
  color: ${(props) => props.theme.red};
  font-size: 0.7rem;
  margin-top: 0.25rem;
`;
