import React from "react";
import {
  Container,
  Image,
  Header,
  Button,
  Description,
} from "./NotFound.styles";
import Icons from "../../assets/index";

const NotFound = () => {
  return (
    <Container>
      <Image alt="404 Icon" src={Icons.Icon404} />
      <Header>Page is not found!</Header>
      <Description>
        Sorry! This page is not found! Please try again later.
      </Description>
      <Button to={"/"}>Back to Home!</Button>
    </Container>
  );
};

export default NotFound;
