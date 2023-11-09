import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getCategories } from "./store/Categories/actions";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/colors";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Faq from "./pages/Faq";
import Offers from "./pages/Offers";
import DashBoard from "./pages/DashBoard";
import MyOrders from "./pages/MyOrders";
import UpdateProfile from "./pages/UpdateProfile";
import ChangePassword from "./pages/ChangePassword";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Header/Navbar/";
import ModalBackDrop from "./components/Header/ModalBackDrop";
import Notification from "./components/Header/Notification/Notification";
import Categories from "./pages/Categories/Categories";

function App() {
  const isModalBackDrop = useSelector((state) => state.ModalBackDrop);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isModalBackDrop === true && <ModalBackDrop />}
        {/* <Notification message={"Invalid user or password!"} /> */}
        <Navbar />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/user/dashboard" element={<DashBoard />} />
          <Route path="/user/my-orders" element={<MyOrders />} />
          <Route path="/user/update-profile" element={<UpdateProfile />} />
          <Route path="/user/change-password" element={<ChangePassword />} />
          <Route path="/categories/:name/:id" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
