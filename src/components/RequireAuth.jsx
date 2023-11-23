import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import { setLoginDropDown } from "../store/UserDropDown/actions";
import { setModalBackDrop } from "../store/ModalBackDrop/actions";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth?.accessToken === undefined) {
      dispatch(setLoginDropDown(true));
      dispatch(setModalBackDrop(true));
    }
  }, [auth]);

  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
