const initialState = false;

export const SET_MENU_DROPDOWN_OPEN = "SET_MENU_DROPDOWN_OPEN";
export const SET_MENU_DROPDOWN_CLOSED = "SET_MENU_DROPDOWN_CLOSED";

function menuDropDownReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_DROPDOWN_OPEN:
      return true;
    case SET_MENU_DROPDOWN_CLOSED:
      return false;
    default:
      return state;
  }
}

export default menuDropDownReducer;
