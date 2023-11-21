const initialState = [];

export const SET_CART_DROPDOWN = "SET_CART_DROPDOWN";
export const DELETE_ALL_ITEMS = "DELETE_ALL_ITEMS";

function ShoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_DROPDOWN:
      return action.payload;
    case DELETE_ALL_ITEMS:
      return [];
    default:
      return state;
  }
}

export default ShoppingCartReducer;
