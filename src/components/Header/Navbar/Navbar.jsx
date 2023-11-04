import React from "react";
import NavbarInfo from "../NavbarInfo/NavbarInfo";
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
          <NavbarUserLinks>1</NavbarUserLinks>
        </NavbarContainer>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
