import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Container,
  CategoriesWrapper,
  CategoriesHeader,
  CategoriesIcon,
  CategoriesHeaderContainer,
  OffersWrapper,
  OfferCircleContainer,
  OfferAnimationCircle,
  SubHeaderLink,
  ItemContainer,
} from "./SubHeader.styles";
import NavbarDropDown from "../NavbarDropDown/NavbarDropDown";

const SubHeader = () => {
  const [isNavbarDropDown, setIsNavbarDropDown] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);

  const handleDropDown = () => {
    setIsNavbarDropDown((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Container>
        <ItemContainer>
          <CategoriesWrapper>
            <CategoriesHeaderContainer onClick={() => handleDropDown()}>
              <CategoriesHeader>Categories</CategoriesHeader>
              <CategoriesIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.6rem"
                  height="0.6rem"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="ml-1 h-3 w-3 group-hover:text-emerald-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </CategoriesIcon>
            </CategoriesHeaderContainer>
            {isNavbarDropDown && (
              <NavbarDropDown
                setIsNavbarDropDown={setIsNavbarDropDown}
                setActiveDropDown={setActiveDropDown}
                activeDropDown={activeDropDown}
              />
            )}
          </CategoriesWrapper>
          <SubHeaderLink to={"/about-us"}>About Us</SubHeaderLink>
          <SubHeaderLink to={"/contact-us"}>Contact Us</SubHeaderLink>
          <OffersWrapper to={"/offers"}>
            Offers
            <OfferCircleContainer>
              <OfferAnimationCircle />
            </OfferCircleContainer>
          </OffersWrapper>
        </ItemContainer>
        <ItemContainer>
          <SubHeaderLink to={"/privacy-policy"}>Privacy Policy</SubHeaderLink>
          <SubHeaderLink to={"/terms-and-conditions"}>
            Terms & Conditions
          </SubHeaderLink>
        </ItemContainer>
      </Container>
    </Wrapper>
  );
};

export default SubHeader;
