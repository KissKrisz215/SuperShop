import axios from "axios";
import {
  SET_SEARCHVALUE,
  SET_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  SET_PRODUCTS,
} from "./index";

export const setSearchValue = (value) => (dispatch, getState) => {
  dispatch({
    type: SET_SEARCHVALUE,
    payload: value,
  });
};

export const setLoading = (value) => (dispatch, getState) => {
  dispatch({
    type: SET_LOADING,
    payload: value,
  });
};

export const getProducts = (value) => async (dispatch, getState) => {
  const state = getState();
  const searchValue = state.search.searchValue;
  dispatch(setLoading(true));
  try {
    const { data } = await axios.post(
      "https://super-shop-backend-five.vercel.app/api/products/search",
      { searchValue }
    );

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
    });
    console.log(error);
  }
};

export const setProducts = (value) => (dispatch, getState) => {
  dispatch({
    type: SET_PRODUCTS,
    payload: value,
  });
};
