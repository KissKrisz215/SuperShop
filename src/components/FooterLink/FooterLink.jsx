import React from "react";
import { nanoid } from "nanoid";
import { Container, LinkContainer, Links, Header } from "./FooterLink.styles";

const FooterLink = ({ data }) => {
  return (
    <Container>
      <Header>{data.title}</Header>
      <LinkContainer>
        {data &&
          data.links.map((link) => (
            <Links key={nanoid()} to={link.link}>
              {link.name}
            </Links>
          ))}
      </LinkContainer>
    </Container>
  );
};

export default FooterLink;
