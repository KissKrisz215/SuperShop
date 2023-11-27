const initialState = {
  active: false,
  message: "",
  type: "success",
};

export const SET_NOTIFICATION = "SET_NOTIFICATION";

function NotificationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        active: action.payload.active,
        message: action.payload.message,
        type: action.payload.type,
      };
    default:
      return state;
  }
}

export default NotificationReducer;
