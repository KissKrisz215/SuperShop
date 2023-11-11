import axios from "axios";
import {
  SET_PRODUCT_DROPDOWN_ACTIVE,
  SET_PRODUCT_DROPDOWN_INACTIVE,
} from "./index";

export const setProductDropDown =
  (isActive, product) => (dispatch, getState) => {
    if (isActive === true) {
      dispatch({
        type: SET_PRODUCT_DROPDOWN_ACTIVE,
        payload: product,
      });
    } else if (isActive === false) {
      dispatch({
        type: SET_PRODUCT_DROPDOWN_INACTIVE,
      });
    }
  };
