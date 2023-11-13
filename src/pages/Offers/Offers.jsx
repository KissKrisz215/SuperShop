import React from "react";
import HeaderItem from "../../components/HeaderItem";
import { Container, Wrapper, CouponContainer, Coupon } from "./Offers.styles";
import CouponCard from "../../components/Home/CouponCard";
import { useSelector } from "react-redux";

const Offers = () => {
  const coupons = useSelector((state) => state.coupons);

  return (
    <HeaderItem title={"Offers"}>
      <Wrapper>
        <Container>
          <CouponContainer>
            {coupons &&
              coupons.data.slice(0, 4).map((item) => (
                <Coupon>
                  <CouponCard height={"100%"} coupon={item} />
                </Coupon>
              ))}
          </CouponContainer>
        </Container>
      </Wrapper>
    </HeaderItem>
  );
};

export default Offers;
