import styled from "styled-components";

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
  width: 30%;
`;

export const CouponImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 0.3rem;
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
