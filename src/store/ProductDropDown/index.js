const initialState = {
  isDropDown: false,
  data: null,
};

export const SET_PRODUCT_DROPDOWN_ACTIVE = "SET_PRODUCT_DROPDOWN_ACTIVE";
export const SET_PRODUCT_DROPDOWN_INACTIVE = "SET_PRODUCT_DROPDOWN_INACTIVE";

function ProductDropDownReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_DROPDOWN_ACTIVE:
      return {
        ...state,
        isDropDown: true,
        data: action.payload,
      };
    case SET_PRODUCT_DROPDOWN_INACTIVE:
      return {
        ...state,
        isDropDown: false,
        data: null,
      };
    default:
      return state;
  }
}

export default ProductDropDownReducer;
