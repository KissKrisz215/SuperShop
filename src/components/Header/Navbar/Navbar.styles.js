import { Link } from "react-router-dom";
import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 150;
`;

export const Wrapper = styled.div`
  z-index: 50;
  position: sticky;
  top: 0;
`;

export const NavbarWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.emeraldGreen};
  @media only screen and ${breakpoint.device.sm} {
    height: 80px;
  }
`;

export const NavbarContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1450px;
  @media only screen and ${breakpoint.device.sm} {
    justify-content: space-between;
    width: 90%;
  }
`;

export const NavbarIcon = styled.img`
  height: 35px;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;

export const NavbarLink = styled(Link)``;

export const NavbarUserLinks = styled.div`
  display: none;
  gap: 1.5rem;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    align-items: center;
  }
`;
