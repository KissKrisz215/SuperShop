import { SET_LOGIN_DROPDOWN, SET_LOGIN_FORM_TYPE } from "./index";

export const setLoginDropDown = (value) => (dispatch, getState) => {
  dispatch({
    type: SET_LOGIN_DROPDOWN,
    payload: value,
  });
};

export const setLoginFormType = (value) => (dispatch, getState) => {
  dispatch({
    type: SET_LOGIN_FORM_TYPE,
    payload: value,
  });
};
