import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  setLoginDropDown,
  setLoginFormType,
} from "../../../store/UserDropDown/actions";
import {
  Container,
  CloseButtonContainer,
  CloseButton,
} from "./LoginDropDown.styles";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";
import Form from "../Form/Form";
import AuthContext from "../../../context/AuthProvider";

const loginInputs = [
  {
    label: "Email",
    inputholder: "Email",
    icon: faEnvelope,
    formLabel: "email",
  },
  {
    label: "Password",
    inputholder: "Password",
    icon: faLock,
    formLabel: "password",
  },
];

const signUpInputs = [
  {
    label: "Name",
    inputholder: "Full Name",
    icon: faUser,
    formLabel: "username",
  },
  {
    label: "Email",
    inputholder: "Email",
    icon: faEnvelope,
    formLabel: "email",
  },
  {
    label: "Password",
    inputholder: "Password",
    icon: faLock,
    formLabel: "password",
  },
];

const passwordInputs = [
  {
    label: "Email",
    inputholder: "Your Registered Email",
    icon: faEnvelope,
    formLabel: "email",
  },
];

const LoginDropDown = () => {
  const { auth } = useContext(AuthContext);
  const isLoginDropDown = useSelector((state) => state.loginDropDown.isActive);
  const formType = useSelector((state) => state.loginDropDown.formType);
  const dispatch = useDispatch();

  const handleDropDownClose = () => {
    dispatch(setLoginDropDown(false));
    dispatch(setModalBackDrop(false));
    dispatch(setLoginFormType("login"));
  };

  const handleSignUp = () => {};

  let formContent;
  switch (formType) {
    case "login":
      formContent = (
        <Form
          buttontext="Login"
          title="Login"
          description={"Login with your email and password"}
          link="Register"
          linkto="signup"
          inputs={loginInputs}
          linktext={"Don't have an account yet?"}
          apiUrl="https://super-shop-backend-five.vercel.app/api/auth/login"
        />
      );
      break;
    case "signup":
      formContent = (
        <Form
          buttontext="Register"
          title="Sign Up"
          description={"Create an account with email"}
          link="Login"
          linkto="login"
          inputs={signUpInputs}
          linktext={"Already have an account?"}
          apiUrl="https://super-shop-backend-five.vercel.app/api/auth/signup"
        />
      );
      break;
    case "resetpassword":
      formContent = (
        <Form
          buttontext="Recover Password"
          title="Forgot Password"
          description={"Reset Your Password"}
          link="Login"
          inputs={passwordInputs}
          linktext={"Already have an account?"}
          linkto="login"
          apiUrl="https://super-shop-backend-five.vercel.app/api/user/changepassword"
        />
      );
      break;
    default:
      formContent = <Form buttontext="Login" />;
  }

  useEffect(() => {
    if (auth.user) {
      handleDropDownClose();
    }
  }, [auth.user]);

  return (
    <Container islogindropdown={isLoginDropDown}>
      <CloseButtonContainer onClick={handleDropDownClose}>
        <CloseButton>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="0.8em"
            width="0.8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </CloseButton>
      </CloseButtonContainer>
      {formContent}
    </Container>
  );
};

export default LoginDropDown;
