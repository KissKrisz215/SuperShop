import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./Home.styles";
import Info from "../../components/HomePage/Info";
import FeaturedCategories from "../../components/HomePage/FeaturedCategories";
import ProductsItem from "../../components/HomePage/ProductsItem/ProductsItem";
import ProductsItemText from "../../components/HomePage/ProductsItemText";

const Home = () => {
  const [popularProducts, setPopularProducts] = useState(null);
  const [discountedProducts, setDiscountedProducts] = useState(null);

  const getProducts = async (type) => {
    const { data } = await axios(
      `https://super-shop-backend-five.vercel.app/api/products/${type}`
    );

    if (type === "discounted") {
      setDiscountedProducts(data.slice(0, 12));
    } else if (type === "popular") {
      setPopularProducts(data.slice(0, 12));
    }
  };

  useEffect(() => {
    getProducts("discounted");
    getProducts("popular");
  }, []);

  return (
    <Container>
      <Info />
      <FeaturedCategories />
      {popularProducts && (
        <ProductsItem
          title={"Popular Products for Daily Shopping"}
          description={
            "See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping."
          }
          products={popularProducts}
        />
      )}
      <ProductsItemText />
      {discountedProducts && (
        <ProductsItem
          title={"Latest Discounted Products"}
          description={
            "See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping."
          }
          products={discountedProducts}
        />
      )}
    </Container>
  );
};

export default Home;
