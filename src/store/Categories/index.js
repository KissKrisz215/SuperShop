const initialState = {
  isLoading: true,
  errorMessage: null,
  data: [],
};

export const GET_CATEGORIES_PENDING = "GET_CATEGORIES_PENDING";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";

function CategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        data: [],
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        data: action.payload,
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        data: [],
      };
    default:
      return state;
  }
}

export default CategoriesReducer;
