import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Header, CouponCardContainer } from "./CouponInfo.styles";
import CouponCard from "../CouponCard";

const CouponInfo = () => {
  const { data } = useSelector((state) => state.coupons);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header>Latest Super Discount Active Coupon Code</Header>
      <CouponCardContainer>
        {data &&
          data.slice(2, 4).map((coupon) => <CouponCard coupon={coupon} />)}
      </CouponCardContainer>
    </Container>
  );
};

export default CouponInfo;
