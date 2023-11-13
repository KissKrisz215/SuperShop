import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  min-height: 900px;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  margin-top: 1rem;
  gap: 0.8rem;
  padding: 0.8rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media only screen and ${breakpoints.device.xxs} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media only screen and ${breakpoints.device.sm} {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const HeaderCategory = styled.div``;

export const CategoryProductsWrapper = styled.div`
  margin-top: 1.9rem;
`;

export const CategoryProductsHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: ${(props) => props.theme.beige};
  height: 45px;
  border-radius: 0.2rem;
  align-items: center;
  padding: 0rem 0.7rem;
  box-sizing: border-box;
`;

export const CategorySubHeader = styled.p`
  font-size: 0.7rem;
`;

export const CategoryButton = styled.select`
  font-size: 0.7rem;
  font-weight: 400;
  border: 0;
  border-radius: 0.2rem;
  padding: 0rem 0.4rem;
`;

export const CategoryButtonOption = styled.option``;

export const CategoryProductsContent = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 3.5rem;
`;

export const ProductsButton = styled.button`
  background-color: #e0e7ff;
  border: none;
  font-size: 0.65rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: 0.18s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.emeraldGreen};
    color: #ffff;
  }
`;

export const ProductsButtonContainer = styled.div`
  margin-top: 1.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProductQuantity = styled.span`
  font-weight: 600;
  font-size: 0.67rem;
`;
