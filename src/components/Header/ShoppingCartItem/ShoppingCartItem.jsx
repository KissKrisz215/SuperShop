import React from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Header,
  Icon,
  InfoContainer,
  InfoTitle,
  InfoSubTitle,
  InfoPriceText,
  ButtonContainer,
  DeleteButton,
  DeleteButtonContainer,
} from "./ShoppingCartItem.styles";
import QuantityButton from "../QuantityButton/QuantityButton";
import { removeDropDownProducts } from "../../../store/ShoppingCartItems/actions";

const ShoppingCartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductDelete = () => {
    dispatch(removeDropDownProducts(product));
  };

  return (
    <Container>
      <Header>
        <Icon src={product.image[0]} />
        <InfoContainer>
          <InfoTitle>{product.title.en}</InfoTitle>
          <InfoSubTitle>Item Price ${product.prices.price}</InfoSubTitle>
          <InfoPriceText>{product.finalPrice.toFixed(2)}</InfoPriceText>
        </InfoContainer>
        <ButtonContainer>
          <QuantityButton quantity={product.quantity} product={product} />
        </ButtonContainer>
      </Header>
      <DeleteButtonContainer onClick={() => handleProductDelete()}>
        <DeleteButton>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="0.85em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </DeleteButton>
      </DeleteButtonContainer>
    </Container>
  );
};

export default ShoppingCartItem;
