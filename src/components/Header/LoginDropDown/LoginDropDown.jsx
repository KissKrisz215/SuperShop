import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginDropDown,
  setLoginFormType,
} from "../../../store/UserDropDown/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  CloseButtonContainer,
  CloseButton,
} from "./LoginDropDown.styles";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";
import Form from "../Form/Form";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const loginInputs = [
  {
    label: "Email",
    inputholder: "Email",
    icon: faEnvelope,
  },
  {
    label: "Password",
    inputholder: "Password",
    icon: faLock,
  },
];

const signUpInputs = [
  {
    label: "Name",
    inputholder: "Full Name",
    icon: faUser,
  },
  {
    label: "Email",
    inputholder: "Email",
    icon: faEnvelope,
  },
  {
    label: "Password",
    inputholder: "Password",
    icon: faLock,
  },
];

const passwordInputs = [
  {
    label: "Email",
    inputholder: "Your Registered Email",
    icon: faEnvelope,
  },
];

const LoginDropDown = () => {
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
        />
      );
      break;
    default:
      formContent = <Form buttontext="Login" />;
  }

  return (
    <Container isLoginDropDown={isLoginDropDown}>
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