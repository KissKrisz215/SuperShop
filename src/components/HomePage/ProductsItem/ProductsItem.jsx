import React, { useEffect, useState } from "react";
import { Wrapper, Container, Title, Description } from "./ProductsItem.styles";
import Products from "../../Product/Products";

const ProductsItem = ({ products, title, description }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {products && <Products products={products} />}
      </Container>
    </Wrapper>
  );
};

export default ProductsItem;
