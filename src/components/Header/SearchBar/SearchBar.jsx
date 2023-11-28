import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchValue,
  setLoading,
  getProducts,
  setProducts,
} from "../../../store/SearchBar/actions";
import LoadingSpinner from "../../Loading/LoadingSpinner/LoadingSpinner";
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
  LoadingContainer,
} from "./SearchBar.styles";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchValue);
  const isLoading = useSelector((state) => state.search.isLoading);
  const errorMessage = useSelector((state) => state.search.errorMessage);
  const products = useSelector((state) => state.search.products);
  const [searchDropDown, setSearchDropDown] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setSearchDropDown(false);
        dispatch(setSearchValue(""));
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropDownRef]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchValue.trim().length > 0 && searchValue.trim() !== "") {
          setSearchDropDown(true);
          if (searchValue.length !== 1) {
            setTimeout(() => {
              dispatch(getProducts());
            }, 20);
          }
        } else {
          setSearchDropDown(false);
          dispatch(setProducts(null));
          dispatch(setSearchValue(""));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchValue, dispatch]);

  const closeDropDown = () => {
    dispatch(setSearchValue(""));
    setSearchDropDown(false);
  };

  return (
    <Wrapper>
      <InputContainer>
        <Input
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
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
      {searchDropDown && (
        <DropDownContainer ref={dropDownRef}>
          <LoadingContainer>
            <LoadingSpinner loading={isLoading} />
          </LoadingContainer>
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
