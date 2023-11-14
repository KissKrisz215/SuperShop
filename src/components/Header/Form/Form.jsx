import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Form = ({
  inputs,
  buttontext,
  linkto,
  link,
  title,
  description,
  linktext,
  apiUrl,
}) => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleFormPage = () => {
    dispatch(setLoginFormType(linkto));
  };

  const handleForgotPassword = () => {
    dispatch(setLoginFormType("resetpassword"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = async () => {
    console.log(formData);
    try {
      const response = await axios.post(apiUrl, formData);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    setFormData({});
  }, [inputs]);

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
                  <Input
                    onChange={handleInputChange}
                    name={item.formLabel}
                    placeholder={item.inputholder}
                    value={formData[item.formLabel] || ""}
                  />
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
        <FormButton onClick={handleFormSubmit}>
          {buttontext && buttontext}
        </FormButton>
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
