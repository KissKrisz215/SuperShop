import React from "react";
import {
  Container,
  Wrapper,
  InfoItemsContainer,
  InfoTextContainer,
  TextContainer,
  ButtonContainer,
  Button,
  Header,
  Description,
} from "./Info.styles";
import InfoCarousel from "../InfoCarousel";
import CouponInfo from "../../Coupon/CouponInfo/CouponInfo";

const Info = () => {
  return (
    <Wrapper>
      <Container>
        <InfoItemsContainer>
          <InfoCarousel />
          <CouponInfo />
        </InfoItemsContainer>
        <InfoTextContainer>
          <TextContainer>
            <Header>100% Natural Quality Organic Product</Header>
            <Description>
              See Our latest discounted products from here and get a special
              discount product
            </Description>
          </TextContainer>
          <ButtonContainer>
            <Button to={"/categories"}>Shop Now</Button>
          </ButtonContainer>
        </InfoTextContainer>
      </Container>
    </Wrapper>
  );
};

export default Info;
