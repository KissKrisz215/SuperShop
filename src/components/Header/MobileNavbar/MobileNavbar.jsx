import React from "react";
import { Container, ContainerButtons, NavbarLink } from "./MobileNavbar.styles";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import UserToggle from "../UserToggle";
import { setMenuDropDownOpen } from "../../../store/MenuDropDown/actions";
import { useDispatch } from "react-redux";

const MobileNavbar = () => {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(setMenuDropDownOpen());
  };

  return (
    <Container>
      <ContainerButtons onClick={() => handleMenu()}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6 drop-shadow-xl"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="17" y1="10" x2="3" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="17" y1="18" x2="3" y2="18"></line>
        </svg>
      </ContainerButtons>
      <ContainerButtons>
        <NavbarLink to="/">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6 drop-shadow-xl"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </NavbarLink>
      </ContainerButtons>
      <ContainerButtons>
        <ShoppingCart />
      </ContainerButtons>
      <ContainerButtons>
        <UserToggle />
      </ContainerButtons>
    </Container>
  );
};

export default MobileNavbar;
