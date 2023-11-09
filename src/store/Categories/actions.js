import axios from "axios";
import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from "./index";

export const getCategories = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_CATEGORIES_PENDING,
    });

    const { data } = await axios(
      "https://super-shop-backend-five.vercel.app/api/categories/all"
    );

    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_CATEGORIES_ERROR,
      payload: "Failed to load Categories data.",
    });
  }
};
