import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 175px;
  border-radius: 0.3rem;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-property: box-shadow;
  transition-delay: 150ms;
  cursor: pointer;
  color: #ffff;
  display: flex;
  justify-content: center;
  &:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  @media only screen and ${breakpoints.device.xxs} {
    height: 190px;
  }
  @media only screen and ${breakpoints.device.sm} {
    height: 215px;
  }
`;

export const TextContainer = styled.div`
  margin-top: 0.9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h5`
  font-weight: 700;
  margin-top: 0.4rem;
`;

export const Text = styled.p`
  margin-top: 0.2rem;
  font-size: 0.7rem;
`;

export const SubTitle = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const Button = styled(Link)`
  text-decoration: none;
  margin-top: 0.7rem;
  color: #ffff;
  background-color: ${(props) => props.theme.emeraldGreen};
  border: none;
  border-radius: 0.89rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.65rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
`;
