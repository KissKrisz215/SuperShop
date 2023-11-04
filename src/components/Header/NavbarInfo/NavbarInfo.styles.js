import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.navbarPrimary};
  display: none;
  justify-content: center;
  padding: 0.4rem 0rem;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoText = styled.p`
  font-size: 0.6rem;
  font-weight: 300;
  margin: 0rem 0.2rem;
`;

export const InfoContact = styled.a`
  font-size: 0.6rem;
  margin: 0 0.2rem;
  text-decoration: none;
  font-weight: 600;
  color: ${(props) => props.theme.emeraldGreen};
`;

export const InfoLinks = styled(Link)`
  font-size: 0.6rem;
  font-weight: 300;
  text-decoration: none;
  color: black;
`;

export const TextDivider = styled.span`
  font-size: 0.5rem;
  font-weight: 300;
`;
