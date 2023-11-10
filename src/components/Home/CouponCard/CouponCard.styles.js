import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";

export const Container = styled.div`
  height: 125px;
  width: 100%;
  display: flex;
  background: #ffff;
  padding: 0.8rem 0.6rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

export const Wrapper = styled.div``;

export const CouponInfo = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const CouponCode = styled.div`
  position: relative;
  width: 30%;
  border-left: 2px dashed #e5e7eb;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  padding-left: 0.2rem;
`;

export const CouponImage = styled.img`
  max-width: 2rem;
  width: 100%;
  height: auto; // Ensure the aspect ratio is maintained
  border-radius: 0.3rem;
  @media only screen and ${breakpoint.device.sm} {
    max-width: 2.5rem;
  }
  @media only screen and ${breakpoint.device.lg} {
    max-width: 4rem;
  }
`;

export const CouponTextContainer = styled.div``;

export const CouponTextHeader = styled.div``;

export const CouponTextTitle = styled.p``;

export const CouponTextExpiry = styled.div``;

export const HeaderPrice = styled.p``;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const PriceParagraph = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: #4b5563;
  display: flex;
  align-items: center;
`;

export const PriceText = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.red};
`;

export const ExpiredContainer = styled.div`
  margin-left: 0.4rem;
  padding: 0.25rem 0.7rem;
  border-radius: 0.6rem;
  font-size: 0.6rem;
  background: #fee2e2;
  color: ${(props) => props.theme.red};
`;

export const ActiveContainer = styled.div`
  margin-left: 0.4rem;
  padding: 0.25rem 0.7rem;
  border-radius: 0.6rem;
  font-size: 0.6rem;
  background: #d1fae5;
  color: ${(props) => props.theme.darkGreen};
`;

export const Header = styled.h5`
  margin-top: 0.15rem;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const CircleTop = styled.div`
  position: absolute;
  width: 13px;
  height: 10px;
  border-radius: 50%;
  background: #f9fafb;
  left: calc(0% - 0.6rem);
  top: calc(0% - 1.3rem);
  padding: 0.3rem;
`;

export const CircleBottom = styled.div`
  position: absolute;
  width: 13px;
  height: 10px;
  border-radius: 50%;
  background: #f9fafb;
  left: calc(0% - 0.6rem);
  bottom: calc(0% - 1.3rem);
  padding: 0.3rem;
`;

export const CouponHeader = styled.h5`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${(props) => props.theme.darkGreen};
  background-color: #ecfdf5;
  padding: 0.4rem 0.9rem;
  border-radius: 0.4rem;
  border: 1px dashed #6ee7b7;
  cursor: pointer;
`;

export const CouponDescription = styled.p`
  font-size: 0.6rem;
  text-align: center;
  color: ${(props) => props.theme.mediumGray};
`;

export const CouponMinimumPrice = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.mediumGray};
`;
