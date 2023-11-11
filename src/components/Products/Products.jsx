import React from "react";
import { Container } from "./Products.styles";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <Container>
      {products && products.map((product) => <Product data={product} />)}
    </Container>
  );
};

export default Products;
