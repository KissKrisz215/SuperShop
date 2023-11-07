const initialState = false;

export const SET_MODAL_BACKDROP = "SET_MODAL_BACKDROP";

function modalBackDropReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_BACKDROP:
      return action.payload;
    default:
      return state;
  }
}

export default modalBackDropReducer;
