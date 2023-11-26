import React, { useEffect, useState } from "react";
import LoadingRows from "../../Loading/LoadingRows";
import {
  Wrapper,
  Container,
  Title,
  Description,
  LoadingContainer,
} from "./ProductsItem.styles";
import Products from "../../Product/Products";

const ProductsItem = ({ products, title, description }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {!products && (
          <LoadingContainer>
            <LoadingRows height={18} count={8} margin="0.2rem" />
          </LoadingContainer>
        )}
        {products && products.length > 1 && <Products products={products} />}
      </Container>
    </Wrapper>
  );
};

export default ProductsItem;
