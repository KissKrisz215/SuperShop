import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Container,
  CouponInfo,
  CouponCode,
  CouponImage,
  CouponTextContainer,
  CouponTextHeader,
  CouponTextTitle,
  CouponTextExpiry,
  HeaderPrice,
  PriceContainer,
  PriceText,
  PriceParagraph,
  ExpiredContainer,
  ActiveContainer,
  Header,
} from "./CouponCard.styles";
import DateCountDown from "../DateCountDown/DateCountDown";

const CouponCard = ({ coupon }) => {
  const [isExpired, setIsExpired] = useState(false);

  const checkExpiryDate = () => {
    const currentDate = new Date();
    const endTime = new Date(coupon.endTime);
    if (currentDate < endTime) {
      setIsExpired(false);
    } else {
      setIsExpired(true);
    }
  };

  useEffect(() => {
    checkExpiryDate();
  }, []);

  return (
    <Wrapper>
      <Container>
        <CouponInfo>
          <CouponImage src={coupon.logo} />
          <CouponTextContainer>
            <CouponTextHeader>
              <HeaderPrice>
                {coupon.discountType.type === "fixed" ? (
                  <PriceContainer>
                    <PriceText>${coupon.discountType.value}</PriceText>
                    <PriceParagraph>Off</PriceParagraph>
                    {isExpired ? (
                      <ExpiredContainer>InActive</ExpiredContainer>
                    ) : (
                      <ActiveContainer>Active</ActiveContainer>
                    )}
                  </PriceContainer>
                ) : (
                  <PriceContainer>
                    <PriceText>{coupon.discountType.value}%</PriceText>
                    <PriceParagraph>Off</PriceParagraph>
                    {isExpired ? (
                      <ExpiredContainer>InActive</ExpiredContainer>
                    ) : (
                      <ActiveContainer>Active</ActiveContainer>
                    )}
                  </PriceContainer>
                )}
                <Header>{coupon.title.en}</Header>
                <DateCountDown isExpired={isExpired} date={coupon.endTime} />
              </HeaderPrice>
            </CouponTextHeader>
            <CouponTextTitle></CouponTextTitle>
            <CouponTextExpiry></CouponTextExpiry>
          </CouponTextContainer>
        </CouponInfo>
        <CouponCode></CouponCode>
      </Container>
    </Wrapper>
  );
};

export default CouponCard;
