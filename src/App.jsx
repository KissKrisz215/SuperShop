import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getCategories } from "./store/Categories/actions";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/colors";
import ProductDropDown from "./components/Product/ProductDropDown/ProductDropDown";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Offers from "./pages/Offers";
import DashBoard from "./pages/DashBoard";
import MyOrders from "./pages/MyOrders";
import UpdateProfile from "./pages/UpdateProfile";
import ChangePassword from "./pages/ChangePassword";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Header/Navbar/";
import ModalBackDrop from "./components/DropDown/ModalBackDrop";
import Notification from "./components/Header/Notification/Notification";
import Categories from "./pages/Categories/Categories";
import { getCoupons } from "./store/Coupons/actions";
import Footer from "./components/Footers/Footer";
import CartDropDown from "./components/ShoppingCart/CartDropDown";
import LoginDropDown from "./components/DropDown/LoginDropDown";
import MobileNavbar from "./components/Header/MobileNavbar/MobileNavbar";
import MenuDropDown from "./components/DropDown/MenuDropDown/MenuDropDown";
import CheckOut from "./pages/CheckOut";
import Order from "./pages/Order";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Product from "./pages/Product";

function App() {
  const isModalBackDrop = useSelector((state) => state.ModalBackDrop);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCoupons());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isModalBackDrop === true && <ModalBackDrop />}
        <CartDropDown />
        <ProductDropDown />
        <LoginDropDown />
        <MobileNavbar />
        <MenuDropDown />
        {/* <Notification message={"Invalid user or password!"} /> */}
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/categories/:name/:id" element={<Categories />} />
          <Route path="/product/:id" element={<Product />}></Route>
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/checkout" element={<CheckOut />}></Route>
              <Route path="/user/dashboard" element={<DashBoard />} />
              <Route path="/user/my-orders" element={<MyOrders />} />
              <Route path="/user/update-profile" element={<UpdateProfile />} />
              <Route
                path="/user/change-password"
                element={<ChangePassword />}
              />
              <Route path="/user/orders/:id" element={<Order />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
