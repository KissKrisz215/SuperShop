import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { nanoid } from "nanoid";
import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { setLoginFormType } from "../../../store/UserDropDown/actions";

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
  const { setAuth, persist, setPersist } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const store = useSelector((state) => state);
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      apiUrl === "https://super-shop-backend-five.vercel.app/api/auth/login"
    ) {
      try {
        const response = await axios.post(
          "http://localhost:3500/api/auth/login",
          formData
        );
        const accessToken = response?.data?.token;
        const decodedToken = jwtDecode(accessToken);
        setAuth({
          user: formData?.email,
          pwd: formData?.password,
          accessToken: accessToken,
          image: decodedToken.image,
        });
        setFormData({});
        navigate(from, { replace: true });
      } catch (error) {
        console.error("Error:", error.message);
        setFormData({});
      }
    } else {
      try {
        const response = await axios.post(apiUrl, formData);
      } catch (error) {
        console.error("Error:", error.message);
      }
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
              <InputWrapper key={nanoid()}>
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
