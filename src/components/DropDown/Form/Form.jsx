import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { nanoid } from "nanoid";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
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
import { handleLogin } from "../../../store/Form/actions";
import { setNotification } from "../../../store/Notification/actions";

const Form = ({
  buttontext,
  linkto,
  link,
  title,
  description,
  linktext,
  apiUrl,
  formType,
}) => {
  const { setAuth, persist, setPersist } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const store = useSelector((state) => state);
  const [formData, setFormData] = useState({
    email: "justin@gmail.com",
    password: "password12345@",
  });
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
    if (title === "Login") {
      try {
        const response = await dispatch(handleLogin(formData));
        const from = location.state?.from?.pathname || "/";
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
        setFormData({});
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(apiUrl, formData);
        dispatch(setNotification(true, "Success!", "success"));
        setFormData({});
      } catch (error) {
        console.error("Error:", error.message);
        dispatch(setNotification(true, "There was an error!", "failure"));
        setFormData({});
      }
    }
  };

  useEffect(() => {
    if (formType !== "login") {
      setFormData({});
    }
  }, [formType]);

  useEffect(() => {
    setFormData({
      email: "justin@gmail.com",
      password: "password12345@",
    });
  }, []);

  return (
    <LoginFormContainer>
      <FormHeader>
        <Title>{title && title}</Title>
        <Description>{description && description}</Description>
      </FormHeader>
      <FormBody>
        {formType === "signup" && (
          <InputsContainer>
            <InputWrapper>
              <InputHeader>Name</InputHeader>
              <InputContainer>
                <InputIcon>
                  <StyledFontAwesomeIcon size={"xs"} icon={faUser} />
                </InputIcon>
                <Input
                  type="text"
                  onChange={handleInputChange}
                  name="username"
                  placeholder="Full Name"
                  value={formData.username}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper>
              <InputHeader>Email</InputHeader>
              <InputContainer>
                <InputIcon>
                  <StyledFontAwesomeIcon size={"xs"} icon={faEnvelope} />
                </InputIcon>
                <Input
                  type="email"
                  onChange={handleInputChange}
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper>
              <InputHeader>Password</InputHeader>
              <InputContainer>
                <InputIcon>
                  <StyledFontAwesomeIcon size={"xs"} icon={faLock} />
                </InputIcon>
                <Input
                  type="password"
                  onChange={handleInputChange}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                />
              </InputContainer>
            </InputWrapper>
          </InputsContainer>
        )}
        {formType === "login" && (
          <InputsContainer>
            <InputWrapper>
              <InputHeader>Email</InputHeader>
              <InputContainer>
                <InputIcon>
                  <StyledFontAwesomeIcon size={"xs"} icon={faEnvelope} />
                </InputIcon>
                <Input
                  type="email"
                  onChange={handleInputChange}
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper>
              <InputHeader>Password</InputHeader>
              <InputContainer>
                <InputIcon>
                  <StyledFontAwesomeIcon size={"xs"} icon={faLock} />
                </InputIcon>
                <Input
                  type="password"
                  onChange={handleInputChange}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                />
              </InputContainer>
            </InputWrapper>
          </InputsContainer>
        )}
        {formType === "resetpassword" && (
          <InputsContainer>
            <InputWrapper>
              <InputHeader>Email</InputHeader>
              <InputContainer>
                <InputIcon>
                  <StyledFontAwesomeIcon size={"xs"} icon={faEnvelope} />
                </InputIcon>
                <Input
                  type="email"
                  onChange={handleInputChange}
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                />
              </InputContainer>
            </InputWrapper>
          </InputsContainer>
        )}
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
