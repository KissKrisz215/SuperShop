import React, { useState } from "react";
import {
  Wrapper,
  Container,
  CategoriesWrapper,
  CategoriesHeader,
  CategoriesIcon,
  CategoriesHeaderContainer,
} from "./SubHeader.styles";
import NavbarDropDown from "../NavbarDropDown/NavbarDropDown";

const SubHeader = () => {
  const [isNavbarDropDown, setIsNavbarDropDown] = useState();

  return (
    <Wrapper>
      <Container>
        <CategoriesWrapper
          onClick={() => setIsNavbarDropDown(!isNavbarDropDown)}
        >
          <CategoriesHeaderContainer>
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
          {isNavbarDropDown && <NavbarDropDown />}
        </CategoriesWrapper>
      </Container>
    </Wrapper>
  );
};

export default SubHeader;
