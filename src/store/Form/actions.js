import axios from "axios";
import { HANDLE_LOGIN_SUCCESS, HANDLE_LOGIN_ERROR } from "./index";
import { setNotification } from "../Notification/actions";

export const handleLogin = (formData) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      "https://super-shop-backend-five.vercel.app/api/auth/login",
      formData
    );
    dispatch(setNotification(true, "Success Logged In!", "success"));
    return response;
  } catch (error) {
    dispatch(setNotification(true, "Login Incorrect!", "failure"));
    console.error("Error:", error.message);
  }
};
