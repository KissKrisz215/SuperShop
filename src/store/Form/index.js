const initialState = {
  formData: {},
};

export const HANDLE_LOGIN_SUCCESS = "HANDLE_LOGIN_SUCCESS";
export const HANDLE_LOGIN_ERROR = "HANDLE_LOGIN_ERROR";

function cartDropDownReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_LOGIN_SUCCESS:
      return {
        ...state,
        formData: {},
      };
    case HANDLE_LOGIN_ERROR:
      return {
        ...state,
        formData: {},
      };
    default:
      return state;
  }
}

export default cartDropDownReducer;
