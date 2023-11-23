import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  Wrapper,
  Container,
  Header,
  Description,
  CategoryContainer,
  CategoryItem,
  ContentContainer,
  SubTitleContainer,
  SubTitle,
  Logo,
  Title,
  Icon,
} from "./FeaturedCategories.styles";

const FeaturedCategories = () => {
  const { data } = useSelector((state) => state.categories);

  return (
    <Wrapper>
      <Container>
        <Header>Featured Categories</Header>
        <Description>
          Choose your necessary products from this feature categories.
        </Description>
        <CategoryContainer>
          {data &&
            data.map((category) => (
              <CategoryItem key={nanoid()}>
                <Logo src={category.icon} />
                <ContentContainer>
                  <Title to={`/categories/${category.name.en}/${category._id}`}>
                    {category.name.en}
                  </Title>
                  {category.children.length > 0 && (
                    <SubTitleContainer>
                      {category.children.slice(0, 3).map((item) => (
                        <SubTitle
                          key={nanoid()}
                          to={`/categories/${item.name.en}/${item._id}`}
                        >
                          <Icon>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 512 512"
                              height="0.6em"
                              width="0.6em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="none"
                                stroke-linecap="square"
                                stroke-miterlimit="10"
                                stroke-width="48"
                                d="M184 112l144 144-144 144"
                              ></path>
                            </svg>
                          </Icon>
                          {item.name.en}
                        </SubTitle>
                      ))}
                    </SubTitleContainer>
                  )}
                </ContentContainer>
              </CategoryItem>
            ))}
        </CategoryContainer>
      </Container>
    </Wrapper>
  );
};

export default FeaturedCategories;
