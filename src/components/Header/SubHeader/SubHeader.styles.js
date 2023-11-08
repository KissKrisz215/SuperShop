import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(156, 163, 175, 0.3);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 90%;
  display: flex;
  align-items: center;
`;

export const CategoriesWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
`;

export const CategoriesHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  &:hover {
    color: ${(props) => props.theme.emeraldGreen};
  }
`;

export const CategoriesHeader = styled.h5`
  font-size: 0.7rem;
`;

export const CategoriesIcon = styled.div``;
