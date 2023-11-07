const initialState = {
  isActive: false,
  formType: "login",
};

export const SET_LOGIN_DROPDOWN = "SET_LOGIN_DROPDOWN";
export const SET_LOGIN_FORM_TYPE = "SET_LOGIN_FORM_TYPE";

function loginDropDownReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_DROPDOWN:
      return {
        ...state,
        isActive: action.payload,
      };
    case SET_LOGIN_FORM_TYPE:
      return {
        ...state,
        formType: action.payload,
      };
    default:
      return state;
  }
}

export default loginDropDownReducer;
