const initialState = false;

export const SET_CART_DROPDOWN = "SET_CART_DROPDOWN";

function cartDropDownReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_DROPDOWN:
      return action.payload;
    default:
      return state;
  }
}

export default cartDropDownReducer;
