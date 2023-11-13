import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Wrapper,
  Container,
  HeaderContainer,
  CategoryProductsWrapper,
  CategoryProductsHeader,
  CategorySubHeader,
  CategoryButton,
  CategoryButtonOption,
  CategoryProductsContent,
  ProductsButton,
  ProductsButtonContainer,
  ProductQuantity,
} from "./Categories.styles";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import Icons from "../../assets/index";
import CategoryCarousel from "../../components/CategoryCarousel";
import Products from "../../components/Products";
import { useSelector } from "react-redux";

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
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(10);
  const { id } = useParams();

  const getProducts = async () => {
    try {
      const { data } = await axios(
        `https://super-shop-backend-five.vercel.app/api/categories/${id}`
      );

      setAllProducts(data);
      setVisibleProducts(data.slice(0, loadMoreCount));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleLoadMore = () => {
    setVisibleProducts(allProducts.slice(0, loadMoreCount + 10));
    setLoadMoreCount(loadMoreCount + 10);
  };

  useEffect(() => {
    getProducts();
    setLoadMoreCount(18);
  }, [id]);

  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          {CategoryLinks.map((category) => (
            <CategoryHeader
              key={category.title}
              link={category.link}
              image={category.img}
              title={category.title}
            />
          ))}
        </HeaderContainer>
        <CategoryCarousel />
        <CategoryProductsWrapper>
          <CategoryProductsHeader>
            <CategorySubHeader>
              Total all{" "}
              <ProductQuantity>
                {allProducts && allProducts.length}
              </ProductQuantity>{" "}
              items Found
            </CategorySubHeader>
            <CategoryButton>
              <CategoryButtonOption>Sort By Price</CategoryButtonOption>
              <CategoryButtonOption>High to Low</CategoryButtonOption>
            </CategoryButton>
          </CategoryProductsHeader>
          <CategoryProductsContent>
            <Products products={visibleProducts} />
            {visibleProducts.length < allProducts.length && (
              <ProductsButtonContainer>
                <ProductsButton onClick={handleLoadMore}>
                  Load More
                </ProductsButton>
              </ProductsButtonContainer>
            )}
          </CategoryProductsContent>
        </CategoryProductsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Categories;
