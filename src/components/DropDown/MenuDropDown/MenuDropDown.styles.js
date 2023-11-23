import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 420px;
  height: 100%;
  background: #ffff;
  transform: ${(props) =>
    props.menudropdown ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.emeraldGreen};
  height: 100%;
  max-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
`;

export const SubHeaderContainer = styled.div`
  min-height: 55px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
`;

export const SubHeaderTitle = styled.h5`
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: 1.3rem;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
`;

export const HeaderIcon = styled(Link)`
  margin-left: 1.3rem;
`;

export const IconImage = styled.img``;

export const HeaderTitle = styled.h2`
  font-size: 0.8rem;
  font-weight: 700;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.red};
  cursor: pointer;
  background: #ffff;
  border-radius: 50%;
  padding: 0.3rem;
`;

export const CloseButtonIcon = styled.div`
  display: flex;
  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

export const CloseButtonTitle = styled.p`
  margin: 0;
  font-size: 0.7rem;
  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
`;

export const CheckOutButton = styled.div`
  height: 100%;
  width: 90%;
  justify-content: space-between;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.emeraldGreen};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
`;

export const ButtonTitle = styled.p`
  font-size: 0.8rem;
  margin: 0rem 0.5rem;
`;

export const PriceContainer = styled.div`
  background-color: #ffff;
  color: ${(props) => props.theme.darkGreen};
  font-size: 0.8rem;
  margin: 0rem 0.5rem;
  padding:0.45rem; 0.3rem;
  border-radius: 0.4rem;
`;

export const CartEmptyArray = styled.div`
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
`;

export const Title = styled.h5`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.7rem;
  width: 80%;
  color: ${(props) => props.theme.mediumGray};
  text-align: center;
  line-height: 1rem;
`;

export const IconContainer = styled.div`
  margin-bottom: 0.9rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d1fae5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.darkGreen};
`;
