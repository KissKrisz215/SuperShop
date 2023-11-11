import React from "react";
import { Container, LinkContainer, Links, Header } from "./FooterLink.styles";

const FooterLink = ({ data }) => {
  return (
    <Container>
      <Header>{data.title}</Header>
      <LinkContainer>
        {data &&
          data.links.map((link) => <Links to={link.link}>{link.name}</Links>)}
      </LinkContainer>
    </Container>
  );
};

export default FooterLink;
