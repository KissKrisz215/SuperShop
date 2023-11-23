import React from "react";
import { nanoid } from "nanoid";
import { Container } from "./Products.styles";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <Container>
      {products &&
        products.map((product) => <Product key={nanoid()} data={product} />)}
    </Container>
  );
};

export default Products;
