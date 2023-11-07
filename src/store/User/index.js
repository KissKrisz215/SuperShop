const initialState = {
  isLoggedIn: false,
  errorMessage: null,
};

export const LOG_IN_USER_SUCCESS = "LOG_IN_USER_SUCCESS";
export const LOG_IN_USER_ERROR = "LOG_IN_USER_ERROR";

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOG_IN_USER_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default UserReducer;
