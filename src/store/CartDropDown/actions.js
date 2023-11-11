import { SET_CART_DROPDOWN_OPEN, SET_CART_DROPDOWN_CLOSED } from "./index";

export const setDropDownOpen = () => (dispatch) => {
  dispatch({
    type: SET_CART_DROPDOWN_OPEN,
  });
};

export const setDropDownClosed = () => (dispatch) => {
  dispatch({
    type: SET_CART_DROPDOWN_CLOSED,
  });
};
