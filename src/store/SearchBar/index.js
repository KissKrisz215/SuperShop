const initialState = {
  searchValue: "",
  isLoading: false,
  errorMesage: null,
  products: null,
};

export const SET_SEARCHVALUE = "SET_SEARCHVALUE";
export const SET_LOADING = "SET_LOADING";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const SET_PRODUCTS = "SET_PRODUCTS";

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCHVALUE:
      return {
        ...state,
        errorMesage: false,
        searchValue: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        errorMessage: false,
        products: action.payload,
        isLoading: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        products: null,
        isLoading: false,
        errorMessage: true,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

export default SearchReducer;
