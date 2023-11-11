const initialState = [];

export const SET_CART_DROPDOWN = "SET_CART_DROPDOWN";

function ShoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_DROPDOWN:
      return action.payload;
    default:
      return state;
  }
}

export default ShoppingCartReducer;
