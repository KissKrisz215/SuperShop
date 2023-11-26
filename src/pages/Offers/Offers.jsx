import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import LoadingRows from "../../components/Loading/LoadingRows";
import HeaderItem from "../../components/Header/HeaderItem";
import {
  Container,
  Wrapper,
  CouponContainer,
  Coupon,
  LoadingRowsContainer,
} from "./Offers.styles";
import CouponCard from "../../components/Coupon/CouponCard";
import GetCoupons from "../../store/Coupons/actions";

const Offers = () => {
  const coupons = useSelector((state) => state.coupons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCoupons());
  }, []);

  return (
    <HeaderItem title={"Offers"}>
      <Wrapper>
        <Container>
          {coupons.data.length === 0 && (
            <LoadingRowsContainer>
              <LoadingRows height={10} count={10} />
            </LoadingRowsContainer>
          )}
          {coupons && coupons.data.length > 1 && (
            <CouponContainer>
              {coupons.data.slice(0, 4).map((item) => (
                <Coupon>
                  <CouponCard key={nanoid()} height={"100%"} coupon={item} />
                </Coupon>
              ))}
            </CouponContainer>
          )}
        </Container>
      </Wrapper>
    </HeaderItem>
  );
};

export default Offers;
