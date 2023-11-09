import React from "react";
import { Container, Wrapper, InfoItemsContainer } from "./Info.styles";
import InfoCarousel from "../InfoCarousel";
import CouponInfo from "../CouponInfo/CouponInfo";

const Info = () => {
  return (
    <Wrapper>
      <Container>
        <InfoItemsContainer>
          <InfoCarousel />
          {/* <CouponInfo /> */}
        </InfoItemsContainer>
      </Container>
    </Wrapper>
  );
};

export default Info;
