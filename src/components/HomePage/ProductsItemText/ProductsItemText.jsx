import React from "react";
import {
  Wrapper,
  Container,
  InnerContainer,
  TextContainer,
  ImageContainer,
  Image,
  Header,
  SubHeader,
  Description,
  Button,
} from "./ProductsItemText.styles";
import Icons from "../../../assets/";

const ProductsItemText = () => {
  return (
    <Wrapper>
      <Container>
        <InnerContainer>
          <TextContainer>
            <Header>Organic Products and Food</Header>
            <SubHeader>Quick Delivery to Your Home</SubHeader>
            <Description>
              There are many products you will find in our shop, Choose your
              daily necessary product from our KachaBazar shop and get some
              special offers. See Our latest discounted products from here and
              get a special discount.
            </Description>
            <Button>Download App</Button>
          </TextContainer>
          <ImageContainer>
            <Image alt="Delivery Logo" src={Icons.LogoDelivery} />
          </ImageContainer>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default ProductsItemText;
