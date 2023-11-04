import React from "react";
import NavbarInfo from "../NavbarInfo/NavbarInfo";
import {
  Container,
  NavbarContainer,
  NavbarWrapper,
  NavbarIcon,
  NavbarLink,
} from "../Navbar/Navbar.styles";
import Icons from "../../../assets/index";

const Navbar = () => {
  return (
    <Container>
      <NavbarInfo />
      <NavbarWrapper>
        <NavbarContainer>
          <NavbarLink to={"/"}>
            <NavbarIcon src={Icons} />
          </NavbarLink>
        </NavbarContainer>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
