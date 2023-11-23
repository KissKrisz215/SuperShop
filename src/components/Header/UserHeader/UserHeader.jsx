import React from "react";
import { Wrapper, Container, PageContainer, Header } from "./UserHeader.styles";
import UserNavbar from "../UserNavbar/UserNavbar";

const UserHeader = ({ children, title }) => {
  return (
    <Wrapper>
      <Container>
        <UserNavbar />
        <PageContainer>
          <Header>{title}</Header>
          {children}
        </PageContainer>
      </Container>
    </Wrapper>
  );
};

export default UserHeader;
