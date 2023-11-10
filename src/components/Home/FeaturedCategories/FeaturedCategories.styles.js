import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 2.3rem 0rem;
  margin-top: 0.8rem;
  width: 100%;
  min-height: 450px;
  background-color: ${(props) => props.theme.navbarPrimary};
  display: flex;
  justify-content: center;
  @media only screen and ${breakpoint.device.sm} {
    padding: 1rem 0rem 1.6rem;
  }
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h4`
  font-weight: 600;
  font-size: 1.1rem;
`;

export const Description = styled.p`
  margin-top: 0.7rem;
  font-size: 0.8rem;
  color: #4b5563;
`;

export const CategoryContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.1rem;
  width: 95%;
  @media only screen and ${breakpoint.device.xxs} {
    grid-template-columns: repeat(4, 1fr);
    width: 95%;
  }
  @media only screen and ${breakpoint.device.sm} {
    grid-template-columns: repeat(6, 1fr);
    width: 95%;
  }
`;

export const CategoryItem = styled.div`
  background-color: #ffff;
  box-shadow: 0 1px 2px 0 rgba(243, 244, 246, 0.05);
  padding: 0.9rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const Logo = styled.img`
  max-width: 40px;
  max-height: 40px;
`;

export const Title = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.65rem;
`;

export const SubTitle = styled(Link)`
  text-decoration: none;
  font-size: 0.6rem;
  color: ${(props) => props.theme.lightGray};
  display: flex;
  align-items: center;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
`;

export const ContentContainer = styled.div``;

export const Icon = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
`;
