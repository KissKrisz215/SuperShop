const initialState = false;

export const SET_CART_DROPDOWN_OPEN = "SET_CART_DROPDOWN_OPEN";
export const SET_CART_DROPDOWN_CLOSED = "SET_CART_DROPDOWN_CLOSED";

function cartDropDownReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_DROPDOWN_OPEN:
      return true;
    case SET_CART_DROPDOWN_CLOSED:
      return false;
    default:
      return state;
  }
}

export default cartDropDownReducer;
