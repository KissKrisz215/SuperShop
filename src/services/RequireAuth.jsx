import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginDropDown } from "../store/UserDropDown/actions";
import { setModalBackDrop } from "../store/ModalBackDrop/actions";

const RequireAuth = () => {
    const token = null;
    const location = useLocation();
    const ModalBackDrop = useSelector((state) => state.ModalBackDrop);
    const dispatch = useDispatch();

        const handleDropDown = () => {
        dispatch(setModalBackDrop(!ModalBackDrop));
        dispatch(setLoginDropDown(true));
      };


    return (
                    token
                        ? <Outlet />
                        : <><Navigate to="/" state={{ from: location }} replace />
                        {handleDropDown()}
                        </>
    )
}


export default RequireAuth;