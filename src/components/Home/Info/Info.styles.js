import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "../../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 410px;
  @media only screen and ${breakpoint.device.sm} {
    min-height: 550px;
  }
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 95%;
  margin-top: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  @media only screen and ${breakpoint.device.sm} {
    width: 90%;
  }
`;

export const InfoItemsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 75%;
  gap: 1rem;
`;

export const InfoTextContainer = styled.div`
  box-sizing: border-box;
  padding: 0rem 2rem;
  width: 100%;
  min-height: 130px;
  background-color: ${(props) => props.theme.beige};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and ${breakpoint.device.sm} {
    min-height: 100px;
  }
`;

export const TextContainer = styled.div`
  max-width: 70%;
  @media only screen and ${breakpoint.device.sm} {
    max-width: 100%;
  }
`;

export const Header = styled.h5`
  color: ${(props) => props.theme.darkGreen};
  font-weight: 600;
  font-size: 0.95rem;
`;

export const Description = styled.p`
  margin-top: 0.2rem;
  color: ${(props) => props.theme.mediumGray};
  font-size: 0.75rem;
`;

export const ButtonContainer = styled.div``;

export const Button = styled(Link)`
  text-decoration: none;
  color: #ffff;
  font-size: 0.7rem;
  background-color: ${(props) => props.theme.emeraldGreen};
  border-radius: 0.9rem;
  padding: 0.7rem 0.9rem;
  transition: background-color 0.18s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
  @media only screen and ${breakpoint.device.sm} {
    padding: 0.45rem 0.9rem;
  }
`;
