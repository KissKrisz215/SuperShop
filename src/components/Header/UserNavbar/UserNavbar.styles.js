import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const Container = styled.div`
  max-height: 300px;
  background-color: #ffff;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.7rem;

  width: 100%;
  @media only screen and ${breakpoints.device.sm} {
    box-sizing: border-box;
    width: 30%;
    max-width: 300px;
  }
`;

export const NavbarLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const NavbarLinkContainer = styled(Link)`
  text-decoration: none;
  color: #000;
  opacity: 0.9;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  padding: 0.4rem 0rem;
  border-radius: 0.3rem;
  transition: 0.16s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.emeraldGreen};
    background-color: #f9fafb;
  }
`;

export const NavbarLinkTitle = styled.p`
  font-size: 0.65rem;
`;

export const CustomFontAwesome = styled(FontAwesomeIcon)`
  font-size: 0.8rem;
`;
