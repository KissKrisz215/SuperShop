import { Link } from "react-router-dom";
import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavbarWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.emeraldGreen};
`;

export const NavbarContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  max-width: 1450px;
`;

export const NavbarIcon = styled.img`
  height: 35px;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;

export const NavbarLink = styled(Link)``;
