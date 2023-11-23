import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import {
  Wrapper,
  InputContainer,
  Input,
  SearchIcon,
  DropDownContainer,
  DropDownItem,
  DropDownText,
  ProductImage,
  PriceContainer,
  TextContainer,
  ErrorMessage,
  ErrorText,
} from "./SearchBar.styles";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [products, setProducts] = useState(null);
  const dropDownRef = useRef(null);

  const searchProducts = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3500/api/products/search",
        { searchValue }
      );
      setProducts(data);
      setIsLoading(false);
      setErrorMessage(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setSearchDropDown(false);
        setSearchValue("");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropDownRef]);

  useEffect(() => {
    if (searchValue.length > 0) {
      setSearchDropDown(true);
      searchProducts(searchValue);
    } else {
      setSearchDropDown(false);
      setProducts(null);
    }
  }, [searchValue]);

  const closeDropDown = () => {
    setSearchValue("");
    setSearchDropDown(false);
  };

  return (
    <Wrapper>
      <InputContainer>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for products (e.g. fish, apple, oil)"
        />
        <SearchIcon>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            ></path>
            <path
              fill="none"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            ></path>
          </svg>
        </SearchIcon>
      </InputContainer>
      {searchDropDown === true && (
        <DropDownContainer ref={dropDownRef}>
          {errorMessage ? (
            <ErrorMessage>
              <ErrorText>No Results</ErrorText>
            </ErrorMessage>
          ) : (
            <>
              {products &&
                products.map((product) => (
                  <DropDownItem
                    onClick={() => closeDropDown()}
                    to={`/product/${product._id}`}
                    key={nanoid()}
                  >
                    <TextContainer>
                      <ProductImage
                        alt={`${product.title.en} Image`}
                        src={product.image[0]}
                      />
                      <DropDownText>{product.title.en}</DropDownText>
                    </TextContainer>
                    <PriceContainer>${product.prices.price}</PriceContainer>
                  </DropDownItem>
                ))}
            </>
          )}
        </DropDownContainer>
      )}
    </Wrapper>
  );
};

export default SearchBar;
