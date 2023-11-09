import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "../../../styles/breakpoints";

const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  background: #ffff;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(156, 163, 175, 0.3);
  display: none;
  justify-content: center;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 1.5rem;
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

export const OffersWrapper = styled(Link)`
  text-decoration: none;
  position: relative;
  width: 40px;
  padding: 0rem 0.3rem;
  color: ${(props) => props.theme.red};
  background-color: #fee2e2;
  border-radius: 0.2rem;
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.darkGreen};
  }
`;

export const OfferCircleContainer = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ef4444;
  position: absolute;
  top: -0.2rem;
  right: -0.2rem;
`;

export const OfferAnimationCircle = styled.div`
  background-color: #f87171;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;

  opacity: 0.75;
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity, 1));
`;

export const SubHeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.7rem;
  color: black;
  &:hover {
    color: ${(props) => props.theme.darkGreen};
  }
`;
