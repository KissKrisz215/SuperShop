import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const CloseButton = styled.div`
  color: ${(props) => props.theme.red};
  display: flex;
`;

export const CloseButtonContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 37px;
  height: 37px;
  background: #ffff;
  border-radius: 50%;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #fecaca;
  }
`;

export const DropDownContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 760px;
  width: 90%;
  height: 100%;
  border-radius: 0.9rem;
  background: #fff;
  padding: 0.8rem 0.6rem;
  @media only screen and ${breakpoints.device.xxs} {
    align-items: flex-start;
    max-height: 450px;
    flex-direction: row;
    max-width: 780px;
    padding: 1rem 1.4rem;
  }
  @media only screen and ${breakpoints.device.sm} {
    align-items: flex-start;
    max-height: 450px;
    flex-direction: row;
    max-width: 850px;
    padding: 0.8rem 0.6rem;
  }
`;

export const ProductImage = styled.img`
  width: 80%;
  height: 100%;
  @media only screen and ${breakpoints.device.xxs} {
    max-height: 450px;
    flex-direction: row;
    width: 100%;
  }
`;

export const ProductImageContainer = styled(Link)`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  @media only screen and ${breakpoints.device.xxs} {
    display: block;
    width: 50%;
    height: 100%;
  }
`;

export const ProductContent = styled.div`
  width: 100%;
  @media only screen and ${breakpoints.device.xxs} {
    padding: 1.4rem 0rem;
    width: 60%;
  }
  @media only screen and ${breakpoints.device.sm} {
    padding: 1.4rem 1rem;
    width: 50%;
  }
`;

export const Header = styled.h4`
  font-weight: 600;
  font-size: 0.9rem;
  @media only screen and ${breakpoints.device.xxs} {
    font-size: 1.1rem;
  }
`;

export const StockContainer = styled.div`
  margin-top: 0.4rem;
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

export const Description = styled.p`
  font-size: 0.63rem;
  line-height: 1rem;
  color: ${(props) => props.theme.mediumGray};
  margin-top: 1rem;
  padding: 0rem 1.6rem 0rem 0rem;
  @media only screen and ${breakpoints.device.xxs} {
    padding: 0rem;
  }
`;

export const Price = styled.p`
  margin-top: 0.9rem;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
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
  min-width: 180px;
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

export const ProductInfoText = styled.div``;

export const ProductInfoTitle = styled.div`
  font-size: 0.67rem;
  font-weight: 600;
  display: flex;
  align-items: center;
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

export const ProductInfoTag = styled.div`
  margin-top: 0.2rem;
  font-size: 0.6rem;
  color: #4b5563;
  background-color: #f9fafb;
  padding: 0.2rem 0.5rem;
  font-weight: 600;
  border-radius: 0.4rem;
`;

export const ProductInfoTagContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const ProductInfoButton = styled(Link)`
  font-size: 0.7rem;
  text-decoration: none;
  color: ${(props) => props.theme.orangeDark};
`;

export const ProductInfoButtonContainer = styled.div``;

export const DiscountContainer = styled.div`
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  font-size: 0.8rem;
  background-color: ${(props) => props.theme.orangeDark};
  color: #fff;
  padding: 0.2rem 0.25rem;
  border-radius: 0.3rem;
`;

export const DiscountedPrice = styled.s`
  font-size: 0.85rem;
  color: ${(props) => props.theme.lightGray};
`;
