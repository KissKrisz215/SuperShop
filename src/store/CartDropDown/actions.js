import { SET_CART_DROPDOWN } from "./index";

export const setDropDown = () => (dispatch, getState) => {
  const state = getState();
  const isDropDown = state.cartDropDown;
  dispatch({
    type: SET_CART_DROPDOWN,
    payload: !isDropDown,
  });
};
