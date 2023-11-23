import React from "react";
import {
  Container,
  Text,
  Title,
  Button,
  SubTitle,
  TextContainer,
} from "./CategoryHeader.styles";

const CategoryHeader = ({ title, image, link }) => {
  return (
    <Container image={image} to={link}>
      <TextContainer>
        <SubTitle>Taste of</SubTitle>
        <Title>{title}</Title>
        <Text>Weekend discount offer</Text>
        <Button to={link}>Shop Now</Button>
      </TextContainer>
    </Container>
  );
};

export default CategoryHeader;
