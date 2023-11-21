import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 900px;
  background-color: #ecfdf5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  z-index: 100;
`;

export const Image = styled.img`
  max-width: 650px;
  margin-bottom: 2rem;
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 0.7rem;
`;

export const Description = styled.span`
  font-size: 0.8rem;
  color: #4b5563;
  margin-bottom: 0.8rem;
`;

export const Button = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.emeraldGreen};
  color: #ffff;
  padding: 0.7rem 1.6rem;
  border-radius: 0.3rem;
  font-size: 0.75rem;
  font-weight: 600;
  transition: 0.18s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
`;
