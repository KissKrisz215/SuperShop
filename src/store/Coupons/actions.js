import axios from "axios";
import {
  GET_COUPONS_PENDING,
  GET_COUPONS_SUCCESS,
  GET_COUPONS_ERROR,
} from "./index";

export const getCoupons = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_COUPONS_PENDING,
    });

    const { data } = await axios(
      "https://super-shop-backend-five.vercel.app/api/coupons"
    );

    dispatch({
      type: GET_COUPONS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_COUPONS_ERROR,
      payload: "Failed to load Coupons data.",
    });
  }
};
