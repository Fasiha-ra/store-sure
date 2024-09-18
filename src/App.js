import React from "react";
import { GlobalStyles } from "./Global.styles";
import Layout from "./Components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AdminLayout from "./Components/AdminLayout";
import Home from "./pages/index";
import Integration from "./pages/Integration";
import WhoeWeAre from "./pages/who_we_are";
import ContactUs from "./pages/ContactUs";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            {/* <Route path='/' element={<Header/>}/> */}
            <Route path="/" element={<Home />} />
            <Route path="/Integration" element={<Integration />} />
            <Route path="/who_we_are" element={<WhoeWeAre/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            {/* <Route path='/' element={<Footer/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
