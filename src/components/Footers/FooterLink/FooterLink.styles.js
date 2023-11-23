import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.p`
  font-size: 0.85rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

export const Links = styled(Link)`
  color: #4b5563;
  text-decoration: none;
  font-size: 0.7rem;
  transition: 0.18s color ease-in-out;
  &:hover {
    color: ${(props) => props.theme.emeraldGreen};
  }
`;
