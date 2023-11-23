import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import axios from "axios";
import {
  Wrapper,
  Container,
  ProductCategoryHeader,
  CategoryHeaderActive,
  CategoryHeaderCurrent,
  CategoryHeaderIcon,
  ProductCard,
  ProductContainer,
  ProductImage,
  ProductDescription,
  ProductText,
  Header,
  QuantityContainer,
  StockContainer,
  StockText,
  ProductPrice,
  ProductDescriptonText,
  DiscountedPrice,
  AddToCardContainer,
  ButtonsContainer,
  Button,
  ProductInfoTag,
  ProductInfoTagContainer,
  ProductInfo,
  ProductInfoText,
  ProductInfoTitle,
  ProductCategoryLink,
  RelatedProductsContainer,
  RelatedProductsHeader,
} from "./Product.styles";
import QuantityButton from "../../components/Product/QuantityButton";
import { increaseQuantity } from "../../store/ShoppingCartItems/actions";
import Products from "../../components/Product/Products";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCard = () => {
    dispatch(increaseQuantity(product, quantity));
    setQuantity(1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
    }
  };

  const getProduct = async () => {
    try {
      const { data } = await axios(`http://localhost:3500/api/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRelatedProducts = async () => {
    try {
      const { data } = await axios(
        `http://localhost:3500/api/categories/${product.category._id}`
      );
      setRelatedProducts(data.slice(0, 12));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      getRelatedProducts();
    }
  }, [product]);

  return (
    <Wrapper>
      <Container>
        {product && (
          <ProductContainer>
            <ProductCategoryHeader>
              <CategoryHeaderActive>Home </CategoryHeaderActive>
              <CategoryHeaderIcon>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="0.8em"
                  width="0.8em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </CategoryHeaderIcon>
              <CategoryHeaderActive>
                {product.category.name.en.toLowerCase().split(" ").join("-")}
              </CategoryHeaderActive>
              <CategoryHeaderIcon>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="0.8em"
                  width="0.8em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </CategoryHeaderIcon>
              <CategoryHeaderCurrent>{product.title.en}</CategoryHeaderCurrent>
            </ProductCategoryHeader>
            <ProductCard>
              <ProductImage
                alt={`${product.title.en} Product Image`}
                src={product.image[0]}
              />
              <ProductDescription>
                <ProductText>
                  <Header>{product.title.en}</Header>
                  <QuantityContainer>
                    SKU:{" "}
                    <StockContainer>
                      Stock:
                      <StockText>{product.stock}</StockText>
                    </StockContainer>
                  </QuantityContainer>
                  <ProductPrice>
                    ${product.prices.price}
                    {product.prices.discount > 0 && (
                      <DiscountedPrice>
                        {product.prices.originalPrice}
                      </DiscountedPrice>
                    )}
                  </ProductPrice>
                  <ProductDescriptonText>
                    {product.description.en}
                  </ProductDescriptonText>
                  <AddToCardContainer>
                    <ButtonsContainer>
                      <QuantityButton
                        width={"200px"}
                        buttonHeight={"100%"}
                        buttonWidth={"50px"}
                        height={"50px"}
                        quantity={quantity}
                        position="static"
                        border={"1px solid #D1D5DB"}
                        fontSize={"0.85rem"}
                        increaseFunction={handleIncreaseQuantity}
                        decreaseFunction={handleDecreaseQuantity}
                      />
                      <Button onClick={handleAddToCard}>Add to Cart</Button>
                    </ButtonsContainer>
                  </AddToCardContainer>
                  <ProductInfo>
                    <ProductInfoText>
                      <ProductInfoTitle>
                        Category:{" "}
                        <ProductCategoryLink>
                          {product.category.name.en
                            .toLowerCase()
                            .split(" ")
                            .join("-")}
                        </ProductCategoryLink>
                      </ProductInfoTitle>
                      <ProductInfoTagContainer>
                        {Array.isArray(product.tag) &&
                          product.tag.map((tagString) => {
                            const tags = JSON.parse(tagString);
                            return tags.map((item, index) => (
                              <ProductInfoTag key={nanoid()}>
                                {item}
                              </ProductInfoTag>
                            ));
                          })}
                      </ProductInfoTagContainer>
                    </ProductInfoText>
                  </ProductInfo>
                </ProductText>
              </ProductDescription>
            </ProductCard>
            {relatedProducts && (
              <RelatedProductsContainer>
                <RelatedProductsHeader>Related Products</RelatedProductsHeader>
                <Products products={relatedProducts} />
              </RelatedProductsContainer>
            )}
          </ProductContainer>
        )}
      </Container>
    </Wrapper>
  );
}

export default Product;
