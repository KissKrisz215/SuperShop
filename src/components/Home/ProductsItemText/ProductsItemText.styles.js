import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 350px;
  padding: 0.8rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
  @media only screen and ${breakpoints.device.sm} {
    height: 420px;
    padding: 0rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1450px;
  background-color: ${(props) => props.theme.emeraldGreen};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem;
  box-sizing: border-box;
  @media only screen and ${breakpoints.device.sm} {
    padding: 3rem;
  }
`;

export const InnerContainer = styled.div`
  background-color: #ffff;
  border-radius: 0.4rem;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem 1.5rem;
  @media only screen and ${breakpoints.device.sm} {
    padding: 0 2rem;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and ${breakpoints.device.sm} {
    width: 65%;
  }
`;

export const ImageContainer = styled.div`
  width: 35%;
  display: none;
  align-items: center;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 95%;
`;

export const Header = styled.h4`
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  @media only screen and ${breakpoints.device.sm} {
    font-size: 0.95rem;
  }
`;

export const SubHeader = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.6rem;
  @media only screen and ${breakpoints.device.sm} {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 0.7rem;
  margin-bottom: 1.2rem;
  max-width: 95%;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.emeraldGreen};
  color: #ffff;
  border: 0;
  border-radius: 0.9rem;
  padding: 0.6rem 1rem;
  max-width: 180px;
  font-size: 0.6rem;
  cursor: pointer;
  transition: 0.18s background-color ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
  @media only screen and ${breakpoints.device.sm} {
    max-width: 230px;
  }
`;
