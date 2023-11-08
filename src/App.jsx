import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
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
import axios from "axios";

const test = async () => {
  const { data } = await axios(
    "https://super-shop-backend-sooty.vercel.app/api"
  );
  console.log(data);
};

test();

function App() {
  const isModalBackDrop = useSelector((state) => state.ModalBackDrop);
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
          <Route path="/offer" element={<Offers />} />
          <Route path="/user/dashboard" element={<DashBoard />} />
          <Route path="/user/my-orders" element={<MyOrders />} />
          <Route path="/user/update-profile" element={<UpdateProfile />} />
          <Route path="/user/change-password" element={<ChangePassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
