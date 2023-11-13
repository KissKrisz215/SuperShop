import React, { useEffect } from "react";
import { Wrapper, Container, HeaderContainer } from "./Categories.styles";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import Icons from "../../assets/index";
import CategoryCarousel from "../../components/CategoryCarousel";

const CategoryLinks = [
  {
    img: Icons.LogoHeader1,
    title: "FRESH & NATURAL",
    link: "/categories/Fruits%20&%20Vegetable/632aca2b4d87ff2494210be8",
  },
  {
    img: Icons.LogoHeader2,
    title: "FISH & MEAT",
    link: "/categories/Fish%20&%20Meat/632aca6d4d87ff2494210c24",
  },
  {
    img: Icons.LogoHeader3,
    title: "BREAD & BAKERY",
    link: "/categories/Biscuits%20&%20Cakes/632ac9e94d87ff2494210ba0",
  },
];

const Categories = () => {
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          {CategoryLinks.map((category) => (
            <CategoryHeader
              link={category.link}
              image={category.img}
              title={category.title}
            />
          ))}
        </HeaderContainer>
        <CategoryCarousel />
      </Container>
    </Wrapper>
  );
};

export default Categories;
