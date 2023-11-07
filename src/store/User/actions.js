import axios from "axios";
import { LOG_IN_USER_SUCCESS, LOG_IN_USER_ERROR } from "./index";

export const logInUser = () => (dispatch, getState) => {
  try {
    const { data } = axios("");
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOG_IN_USER_ERROR,
      payload: "Invalid user or password!",
    });
  }
};
