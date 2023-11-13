import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 100%;
`;

export const CategoryTitle = styled.p`
  font-size: 0.6rem;
  color: ${(props) => props.theme.mediumGray};
`;

export const CategoryImage = styled.img`
  width: 30px;
  background: #ffff;
  padding: 0.3rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const CategoryContainer = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  background: #ffff;
  max-width: 90%;
  height: 100px;
  border-radius: 0.4rem;
  gap: 0.3rem;
  cursor: pointer;
  &:hover {
    ${CategoryTitle} {
      color: ${(props) => props.theme.emeraldGreen};
    }
  }
`;

export const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const ArrowLeftButton = styled.div`
  position: absolute;
  left: 0;
  top: 1.7rem;
  z-index: 15;
  background-color: ${(props) => props.theme.emeraldGreen};
  color: #ffff;
  padding: 0.2rem;
  border-radius: 0.2rem;
  display: flex;
  transform: ${(props) => (props.rotate ? "rotate(180deg)" : "rotate(0deg)")};
  cursor: pointer;
`;

export const ArrowRightButton = styled.div`
  position: absolute;
  right: 0;
  top: 1.7rem;
  transform: translateY(-50%);
  z-index: 15;
  background-color: ${(props) => props.theme.emeraldGreen};
  color: #ffff;
  padding: 0.2rem;
  border-radius: 0.2rem;
  display: flex;

  transform: ${(props) => (props.rotate ? "rotate(180deg)" : "rotate(0deg)")};
  cursor: pointer;
`;
