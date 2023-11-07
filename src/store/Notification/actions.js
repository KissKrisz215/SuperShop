import { SET_NOTIFICATION } from "./index";

export const setNotification = (value) => (dispatch, getState) => {
  dispatch({
    type: SET_NOTIFICATION,
    payload: value,
  });
};
