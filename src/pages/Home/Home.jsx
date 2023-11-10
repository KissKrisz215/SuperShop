import React from "react";
import { Container } from "./Home.styles";
import Info from "../../components/Home/Info";
import FeaturedCategories from "../../components/Home/FeaturedCategories";

const Home = () => {
  return (
    <Container>
      <Info />
      <FeaturedCategories />
    </Container>
  );
};

export default Home;
