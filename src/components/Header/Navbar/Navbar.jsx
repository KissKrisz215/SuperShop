import React from "react";
import NavbarInfo from "../NavbarInfo/";
import {
  Container,
  NavbarContainer,
  NavbarWrapper,
  NavbarIcon,
  NavbarLink,
  NavbarUserLinks,
} from "../Navbar/Navbar.styles";
import Icons from "../../../assets/index";
import SearchBar from "../../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CartDropDown from "../CartDropDown";

const Navbar = () => {
  return (
    <Container>
      <NavbarInfo />
      <NavbarWrapper>
        <NavbarContainer>
          <NavbarLink to={"/"}>
            <NavbarIcon src={Icons} />
          </NavbarLink>
          <SearchBar />
          <NavbarUserLinks>
            <ShoppingCart />
          </NavbarUserLinks>
        </NavbarContainer>
      </NavbarWrapper>
      <CartDropDown />
    </Container>
  );
};

export default Navbar;
