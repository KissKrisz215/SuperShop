import React from "react";
import {
  Wrapper,
  Container,
  HeaderContainer,
  HeaderText,
} from "./HeaderItem.styles";
import Icons from "../../assets/";

const HeaderItem = ({ children, title }) => {
  return (
    <Wrapper>
      <HeaderContainer background={Icons.LogoHeader}>
        <HeaderText>{title}</HeaderText>
      </HeaderContainer>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default HeaderItem;
