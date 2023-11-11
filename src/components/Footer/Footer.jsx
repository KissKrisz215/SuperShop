import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faPhoneVolume,
  faCreditCard,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
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
  FooterInfoWrapper,
  FooterInfoContainer,
  FooterInfo,
  CustomFontAwesomeIcon,
  FooterLinksContainer,
  FooterLinksWrapper,
  AddressContainer,
  AddressLogo,
  EmailText,
  PhoneText,
  AddressText,
} from "./Footer.styles";
import Icons from "../../assets/";
import FooterLink from "../FooterLink/FooterLink";

const footerInfo = [
  {
    icon: faTruck,
    title: "Free Shipping From €500.00",
  },
  {
    icon: faPhoneVolume,
    title: "Support 24/7 At Anytime",
  },
  {
    icon: faCreditCard,
    title: "Secure Payment Totally Safe",
  },
  {
    icon: faGift,
    title: "Latest Offer Upto 20% Off",
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "Abouts Us",
        link: "about-us",
      },
      {
        name: "Contact Us",
        link: "contact-us",
      },
      {
        name: "Careers",
        link: "/",
      },
      {
        name: "Latest News",
        link: "/",
      },
    ],
  },
  {
    title: "Latest News",
    links: [
      {
        name: "Fish & Meat",
        link: "/fish-meat",
      },
      {
        name: "Soft Drink",
        link: "/drinks",
      },
      {
        name: "Milk & Dairy",
        link: "/milk-dairy",
      },
      {
        name: "Beauty & Health",
        link: "/beauty-health",
      },
    ],
  },
  {
    title: "My Account",
    links: [
      {
        name: "Dashboard",
        link: "/user/dashboard",
      },
      {
        name: "My Orders",
        link: "/user/my-orders",
      },
      {
        name: "Recent Orders",
        link: "/user/dashboard",
      },
      {
        name: "Update Profile",
        link: "/user/update-profile",
      },
    ],
  },
];

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
      <FooterInfoWrapper>
        <FooterInfoContainer>
          {footerInfo.map((item) => (
            <FooterInfo>
              <CustomFontAwesomeIcon icon={item.icon} />
              {item.title}
            </FooterInfo>
          ))}
        </FooterInfoContainer>
      </FooterInfoWrapper>
      <FooterLinksWrapper>
        <FooterLinksContainer>
          {footerLinks && footerLinks.map((item) => <FooterLink data={item} />)}
          <AddressContainer>
            <AddressLogo src={Icons.LogoDark} />
            <AddressText>
              987 Andre Plain Suite High Street 838, Lake Hestertown, USA987
              Andre Plain Suite High Street 838, Lake Hestertown, USA
            </AddressText>
            <PhoneText>Tel : 02.356.1666</PhoneText>
            <EmailText>Email : ccruidk@test.com</EmailText>
          </AddressContainer>
        </FooterLinksContainer>
      </FooterLinksWrapper>
    </Wrapper>
  );
};

export default Footer;
