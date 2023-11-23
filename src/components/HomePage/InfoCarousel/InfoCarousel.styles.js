import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: 240px;
  overflow: hidden;
  flex-wrap: no-wrap;

  @media only screen and ${breakpoint.device.sm} {
    width: 60%;
    max-height: 100%;
  }
`;

export const Carousel = styled.div`
  background-image: url(${(props) => props.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 0.3rem;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const CarouselContainer = styled.div`
  width: 100%;
`;

export const Indicators = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

export const Indicator = styled.div`
  background-color: ${(props) => (props.active === true ? "#007AFF" : "black")};
  opacity: ${(props) => (props.active === true ? "1" : "0.2")};
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;

export const CarouselContent = styled.div`
  height: 100%;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  @media only screen and ${breakpoint.device.sm} {
    padding: 0rem 2.2rem;
    align-items: flex-start;
  }
`;

export const CarouselHeader = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  max-width: 450px;
  @media only screen and ${breakpoint.device.sm} {
    font-size: 1.5rem;
    max-width: 400px;
  }
`;

export const Description = styled.p`
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #4b5563;
  max-width: 400px;
`;

export const Button = styled(Link)`
  text-decoration: none;
  font-size: 0.7rem;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.emeraldGreen};
  max-width: 120px;
  padding: 0.5rem 0.8rem;
  color: #ffff;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
`;
