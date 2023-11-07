import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LoginFormContainer,
  FormHeader,
  Title,
  Description,
  FormBody,
  InputsContainer,
  InputWrapper,
  InputHeader,
  InputContainer,
  Input,
  InputIcon,
  PasswordLinkContainer,
  PasswordResetLink,
  ButtonsContainer,
  FormButton,
  ButtonsDivider,
  SignUpContainer,
  SignUpText,
  SignUpLink,
  StyledFontAwesomeIcon,
} from "./Form.styles";
import { useDispatch } from "react-redux";
import { setLoginFormType } from "../../../store/UserDropDown/actions";

const Form = ({
  inputs,
  buttontext,
  linkto,
  link,
  title,
  description,
  linktext,
}) => {
  const dispatch = useDispatch();
  const handleFormPage = () => {
    dispatch(setLoginFormType(linkto));
  };

  const handleForgotPassword = () => {
    dispatch(setLoginFormType("resetpassword"));
  };

  return (
    <LoginFormContainer>
      <FormHeader>
        <Title>{title && title}</Title>
        <Description>{description && description}</Description>
      </FormHeader>
      <FormBody>
        <InputsContainer>
          {inputs &&
            inputs.map((item) => (
              <InputWrapper>
                <InputHeader>{item.label}</InputHeader>
                <InputContainer>
                  <InputIcon>
                    <StyledFontAwesomeIcon size={"xs"} icon={item.icon} />
                  </InputIcon>
                  <Input placeholder={item.inputholder} />
                </InputContainer>
              </InputWrapper>
            ))}
        </InputsContainer>
        <PasswordLinkContainer>
          <PasswordResetLink onClick={() => handleForgotPassword()}>
            Forgot password?
          </PasswordResetLink>
        </PasswordLinkContainer>
      </FormBody>
      <ButtonsContainer>
        <FormButton>{buttontext && buttontext}</FormButton>
        <ButtonsDivider>OR</ButtonsDivider>
        <SignUpContainer>
          <SignUpText>{linktext && linktext}</SignUpText>
          <SignUpLink onClick={() => handleFormPage()}>
            {link && link}
          </SignUpLink>
        </SignUpContainer>
      </ButtonsContainer>
    </LoginFormContainer>
  );
};

export default Form;
