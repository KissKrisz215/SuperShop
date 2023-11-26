import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: ${(props) => props.position || "absolute"};
  width: ${(props) => props.width || "270px"};
  box-sizing: border-box;
  min-height: 500px;
  background: #ffff;
  border-radius: 0.4rem;
  top: calc(100% + 0.3rem);
  box-shadow: ${(props) =>
    props.boxshadow ||
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"};
  padding: 1rem 1rem 2.5rem;
  border: ${(props) => props.border || "1px solid rgba(0, 0, 0, 0.1)"};
  z-index: 1000;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "0.2rem"};
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const CategoryHeader = styled.p`
  font-size: 0.65rem;
  display: flex;
  align-items: center;
`;

export const CategoryIcon = styled.img`
  max-width: 20px;
`;

export const CategoryDropDownIcon = styled.div`
  color: ${(props) => props.theme.lightGray};
  padding: 0rem 0.3rem;
  transform: ${(props) =>
    props.isActive === props.categoryName ? "rotate(0deg)" : "rotate(270deg)"};
  position: absolute;
  top: 0.3rem;
  right: 0.5rem;
  cursor: pointer;
`;

export const CategoryContent = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const CategoryItemInnerContainer = styled(Link)`
  text-decoration: none;
  color: black;
  gap: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3rem;
  padding: 0.35rem 0.5rem;
  &:hover {
    background-color: #f9fafb;
    color: ${(props) => props.theme.emeraldGreen};
  }
`;

export const SubCategoryContainer = styled(Link)`
  text-decoration: none;
  color: black;
  margin-bottom: 0.2rem;
`;

export const SubCategoryHeader = styled.h5`
  font-size: 0.6rem;
  margin: 0rem 1.1rem;
  &:hover {
    color: ${(props) => props.theme.emeraldGreen};
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
