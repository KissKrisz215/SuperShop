import { SET_MODAL_BACKDROP } from "./index";

export const setModalBackDrop = (value) => (dispatch, getState) => {
  dispatch({
    type: SET_MODAL_BACKDROP,
    payload: value,
  });
};
