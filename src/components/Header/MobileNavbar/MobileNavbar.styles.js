import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${(props) => props.theme.emeraldGreen};
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  box-sizing: border-box;
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;

export const ContainerButtons = styled.div`
  color: #ffff;
  cursor: pointer;
`;

export const NavbarLink = styled(Link)`
  color: #ffff;
`;
