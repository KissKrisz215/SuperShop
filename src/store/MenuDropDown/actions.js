import { SET_MENU_DROPDOWN_OPEN, SET_MENU_DROPDOWN_CLOSED } from "./index";

export const setMenuDropDownOpen = () => (dispatch) => {
  dispatch({
    type: SET_MENU_DROPDOWN_OPEN,
  });
};

export const setMenuDropDownClosed = () => (dispatch) => {
  dispatch({
    type: SET_MENU_DROPDOWN_CLOSED,
  });
};
