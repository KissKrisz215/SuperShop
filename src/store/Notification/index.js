const initialState = false;

export const SET_NOTIFICATION = "SET_NOTIFICATION";

function NotificationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
}

export default NotificationReducer;
