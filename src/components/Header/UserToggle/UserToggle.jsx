import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, ProfileIcon } from "./UserToggle.styles";
import { setLoginDropDown } from "../../../store/UserDropDown/actions";
import LoginDropDown from "../LoginDropDown";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";

const UserToggle = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isLoginDropDown = useSelector((state) => state.loginDropDown.isActive);
  const ModalBackDrop = useSelector((state) => state.ModalBackDrop);
  const dispatch = useDispatch();

  const handleDropDown = () => {
    dispatch(setModalBackDrop(!ModalBackDrop));
    dispatch(setLoginDropDown(true));
  };

  if (!isLoggedIn) {
    return (
      <Container onClick={() => handleDropDown()}>
        <ProfileIcon>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6 drop-shadow-xl"
            height="1.35em"
            width="1.35em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </ProfileIcon>
      </Container>
    );
  }

  return (
    <Container onClick={() => dispatch(setLoginDropDown())}>
      <ProfileIcon></ProfileIcon>
    </Container>
  );
};

export default UserToggle;
