const initialState = {
  isLoading: false,
  errorMessage: null,
  data: [],
};

export const GET_COUPONS_PENDING = "GET_COUPONS_PENDING";
export const GET_COUPONS_SUCCESS = "GET_COUPONS_SUCCESS";
export const GET_COUPONS_ERROR = "GET_COUPONS_ERROR";

function CouponReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUPONS_PENDING:
      return {
        data: [],
        isLoading: true,
        errorMessage: null,
      };
    case GET_COUPONS_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        errorMessage: null,
      };
    case GET_COUPONS_ERROR:
      return {
        data: [],
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default CouponReducer;
