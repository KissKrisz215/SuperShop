import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  background-color: #ffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0.5rem 0.1rem;
  border-radius: 0.4rem;
  min-height: 260px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  position: relative;
  @media only screen and ${breakpoints.device.sm} {
    padding: 0.3rem 0.5rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 180px;
  width: 100%;
  cursor: pointer;
  transition: 0.2s transform ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s transform ease-in-out;
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  max-height: 180px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Title = styled.p`
  font-size: 0.65rem;
  color: #4b5563;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: 0;
`;

export const StockContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.6rem;
  font-size: 0.56rem;
  display: flex;
  gap: 0.1rem;
  background-color: ${(props) => props.theme.navbarPrimary};
  max-width: 75px;
  border-radius: 0.5rem;
  padding: 0.1rem 0.4rem;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.emeraldGreen};
`;

export const StockText = styled.p`
  font-size: 0.56rem;
  color: ${(props) => props.theme.red};
  font-weight: 600;
`;

export const ProductContent = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.3rem;
  @media only screen and ${breakpoints.device.sm} {
    margin-top: 0.4rem;
  }
`;

export const ProductPrice = styled.p`
  margin-top: 0.6rem;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  position: relative;
  top: 0rem;
  align-self: end;
  width: 45px;
  height: 45px;
  background: transparent;
  transition-property: all;
  border: 1px solid #e5e7eb;
  border-radius: 0.2rem;
  transition-timing-function: cubic-bezier (0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  color: ${(props) => props.theme.emeraldGreen};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ffff;
    background-color: ${(props) => props.theme.emeraldGreen};
    border: 1px solid ${(props) => props.theme.emeraldGreen};
  }
  @media only screen and ${breakpoints.device.sm} {
    width: 38px;
    height: 38px;
  }
`;

export const ContentText = styled.div`
  position: relative;
  padding: 0.7rem 0rem;
  @media only screen and ${breakpoints.device.sm} {
    padding: 0.5rem 0rem;
  }
`;
