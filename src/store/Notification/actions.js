import { SET_NOTIFICATION } from "./index";

export const setNotification =
  (active, message, type) => (dispatch, getState) => {
    const value = {
      active,
      message,
      type,
    };

    dispatch({
      type: SET_NOTIFICATION,
      payload: value,
    });
  };
