import React from "react";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Wrapper,
  Container,
  InfoContainer,
  Icon,
  InfoText,
  InfoContact,
  InfoLinks,
  TextDivider,
  UserInfoContainer,
  InfoIcon,
} from "./NavbarInfo.styles";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";
import { setLoginDropDown } from "../../../store/UserDropDown/actions";
import AuthContext from "../../../context/AuthProvider";
import useLogout from "../../../hooks/useLogout";

const NavbarInfo = () => {
  const { auth } = useContext(AuthContext);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const handleDropDown = () => {
    dispatch(setModalBackDrop(true));
    dispatch(setLoginDropDown(true));
  };

  const logout = useLogout();

  return (
    <Wrapper>
      <Container>
        <InfoContainer>
          <Icon>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
              height="0.7em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </Icon>
          <InfoText>
            We are available 24/7, Need help?
            <InfoContact href="tel:+099949343">+099949343</InfoContact>
          </InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoLinks to={"/about-us"}>About Us</InfoLinks>
          <TextDivider>|</TextDivider>
          <InfoLinks to={"/contact-us"}>Contact Us</InfoLinks>
          <TextDivider>|</TextDivider>
          <InfoLinks to={"/user/dashboard"}>My Account</InfoLinks>
          {auth?.user ? (
            <UserInfoContainer onClick={logout}>
              <TextDivider>|</TextDivider>
              <InfoLinks>Logout</InfoLinks>
            </UserInfoContainer>
          ) : (
            <UserInfoContainer onClick={() => handleDropDown()}>
              <TextDivider>|</TextDivider>
              <InfoIcon>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="0.55em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <InfoLinks>Login</InfoLinks>
              </InfoIcon>
            </UserInfoContainer>
          )}
        </InfoContainer>
      </Container>
    </Wrapper>
  );
};

export default NavbarInfo;
