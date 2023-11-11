import React from "react";
import {
  Wrapper,
  Container,
  HeaderContainer,
  ImageContainer,
  TextContainer,
  Header,
  Description,
  LinkContainer,
  HeaderWrapper,
  LinkText,
  LinkImage,
  ImageRight,
  ImageLeft,
} from "./Footer.styles";
import Icons from "../../assets/";

const Footer = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderContainer>
          <ImageContainer>
            <ImageLeft src={Icons.LogoShopping1} />
          </ImageContainer>
          <TextContainer>
            <Header>Get Your Daily Needs From Our KachaBazar Store</Header>
            <Description>
              There are many products you will find in our shop, Choose your
              daily necessary product from our KachaBazar shop and get some
              special offers.
            </Description>
            <LinkContainer>
              <LinkText
                href={"https://www.apple.com/app-store/"}
                target="_blank"
              >
                <LinkImage src={Icons.LogoAppStore} />
              </LinkText>
              <LinkText href={"https://play.google.com/"} target="_blank">
                <LinkImage src={Icons.LogoPlayStore} />
              </LinkText>
            </LinkContainer>
          </TextContainer>
          <ImageContainer>
            <ImageRight src={Icons.LogoShopping2} />
          </ImageContainer>
        </HeaderContainer>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Footer;
