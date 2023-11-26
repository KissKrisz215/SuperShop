import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import LoadingRows from "../../Loading/LoadingRows/LoadingRows";
import { Container, Header, CouponCardContainer } from "./CouponInfo.styles";
import CouponCard from "../CouponCard";

const CouponInfo = () => {
  const { data } = useSelector((state) => state.coupons);

  return (
    <Container>
      <Header>Latest Super Discount Active Coupon Code</Header>
      <CouponCardContainer>
        {data.length < 1 && (
          <LoadingRows height={20} count={6} margin={"0.25rem"} />
        )}
        {data &&
          data
            .slice(2, 4)
            .map((coupon) => <CouponCard key={nanoid()} coupon={coupon} />)}
      </CouponCardContainer>
    </Container>
  );
};

export default CouponInfo;
