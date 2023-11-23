import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import {
  Container,
  ProfileIcon,
  UserLinkContainer,
  ProfileImage,
} from "./UserToggle.styles";
import { setLoginDropDown } from "../../../store/UserDropDown/actions";
import LoginDropDown from "../../DropDown/LoginDropDown";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";
import AuthContext from "../../../context/AuthProvider";

const UserToggle = () => {
  const { auth } = useContext(AuthContext);
  const isLoginDropDown = useSelector((state) => state.loginDropDown.isActive);
  const ModalBackDrop = useSelector((state) => state.ModalBackDrop);
  const dispatch = useDispatch();

  const handleDropDown = () => {
    dispatch(setModalBackDrop(!ModalBackDrop));
    dispatch(setLoginDropDown(true));
  };

  if (!auth?.user) {
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
    <UserLinkContainer to={"/user/dashboard"}>
      <ProfileImage alt="Profile Image" src={auth.image} />
    </UserLinkContainer>
  );
};

export default UserToggle;
