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
  CircleTop,
  CircleBottom,
  CouponHeader,
  CouponDescription,
  CouponMinimumPrice,
} from "./CouponCard.styles";
import DateCountDown from "../DateCountDown/DateCountDown";

const CouponCard = ({ coupon, height, width }) => {
  const [isExpired, setIsExpired] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const checkExpiryDate = () => {
    const currentDate = new Date();
    const endTime = new Date(coupon.endTime);
    if (currentDate < endTime) {
      setIsExpired(false);
    } else {
      setIsExpired(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coupon.couponCode);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  useEffect(() => {
    checkExpiryDate();
  }, []);

  return (
    <Wrapper height={height}>
      <Container height={height}>
        <CouponInfo>
          <CouponImage alt="Coupon Image" src={coupon.logo} />
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
        <CouponCode>
          <CouponHeader onClick={copyToClipboard}>
            {isCopied ? "Copied!" : coupon.couponCode}
          </CouponHeader>
          <CouponDescription>
            * This coupon applies when shopping more than{" "}
            <CouponMinimumPrice>${coupon.minimumAmount}</CouponMinimumPrice>
          </CouponDescription>
          <CircleTop />
          <CircleBottom />
        </CouponCode>
      </Container>
    </Wrapper>
  );
};

export default CouponCard;
