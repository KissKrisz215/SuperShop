import React from "react";
import NavbarInfo from "../NavbarInfo/";
import {
  Container,
  NavbarContainer,
  NavbarWrapper,
  NavbarIcon,
  NavbarLink,
  NavbarUserLinks,
  Wrapper,
} from "../Navbar/Navbar.styles";
import Icons from "../../../assets/index";
import SearchBar from "../../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CartDropDown from "../CartDropDown";
import UserToggle from "../UserToggle";
import LoginDropDown from "../LoginDropDown";
import SubHeader from "../SubHeader";

const Navbar = ({ children }) => {
  return (
    <Wrapper>
      <NavbarInfo />
      <NavbarWrapper>
        <NavbarContainer>
          <NavbarLink to={"/"}>
            <NavbarIcon alt="SuperShop Logo" src={Icons.LogoLight} />
          </NavbarLink>
          <SearchBar />
          <NavbarUserLinks>
            <ShoppingCart />
            <UserToggle />
          </NavbarUserLinks>
        </NavbarContainer>
      </NavbarWrapper>
      <SubHeader />
    </Wrapper>
  );
};

export default Navbar;
