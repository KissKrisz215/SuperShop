import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
`;

export const Container = styled.div`
  padding: 2.5rem 0.8rem;
  width: 100%;
  max-width: 1450px;
`;

export const ProductCategoryHeader = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`;

export const CategoryHeaderActive = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
`;

export const CategoryHeaderCurrent = styled.p`
  font-size: 0.7rem;
`;

export const CategoryHeaderIcon = styled.div`
  display: flex;
`;

export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.8rem;
  margin-left: 0rem;
  @media only screen and ${breakpoints.device.xs} {
    flex-direction: row;
    margin-left: 5.5rem;
    align-items: flex-start;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ProductImage = styled.img`
  max-width: 430px;
  max-height: 400px;
  height: 100%;
  width: 100%;
`;

export const ProductDescription = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  @media only screen and ${breakpoints.device.xs} {
    justify-content: space-between;
  }
`;

export const ProductText = styled.div``;

export const Header = styled.p`
  font-weight: 600;
  color: #1f2937;
`;

export const QuantityContainer = styled.div`
  margin-top: 0.4rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.mediumGray};
`;

export const StockContainer = styled.div`
  margin-top: 0.2rem;
  top: 0.5rem;
  left: 0.6rem;
  font-size: 0.56rem;
  display: flex;
  gap: 0.1rem;
  background-color: #d1fae5;
  max-width: 75px;
  border-radius: 0.5rem;
  padding: 0.1rem 0.4rem;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.emeraldGreen};
  font-weight: 700;
`;

export const StockText = styled.p`
  font-size: 0.56rem;
  color: ${(props) => props.theme.red};
  font-weight: 600;
`;

export const ProductPrice = styled.p`
  margin: 1rem 0rem;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ProductDescriptonText = styled.p`
  color: ${(props) => props.theme.mediumGray};
  font-size: 0.7rem;
  max-width: 550px;
  line-height: 1.2rem;
`;

export const DiscountedPrice = styled.s`
  font-size: 1rem;
  color: ${(props) => props.theme.lightGray};
`;

export const AddToCardContainer = styled.div`
  margin-top: 1.5rem;
`;

export const ButtonsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.emeraldGreen};
  color: #ffff;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  min-width: 200px;
  cursor: pointer;
  transition: background-color 0.18s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
`;

export const ProductInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfoTitle = styled.div`
  font-size: 0.67rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductInfoTag = styled.div`
  margin-top: 0.2rem;
  font-size: 0.6rem;
  color: #4b5563;
  background-color: #ffff;
  padding: 0.2rem 0.5rem;
  font-weight: 600;
  border-radius: 0.4rem;
`;

export const ProductInfoTagContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const ProductCategoryLink = styled(Link)`
  color: #4b5563;
  font-size: 0.65rem;
  transition: background-color 0.18s ease-in-out;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.emeraldGreen};
  }
`;

export const ProductInfoText = styled.div``;

export const RelatedProductsContainer = styled.div`
  margin-top: 2rem;
  @media only screen and ${breakpoints.device.xs} {
    margin-left: 1.5rem;
  }
`;

export const RelatedProductsHeader = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;
