import React, { useState, useEffect } from "react";
import Header from "../Header/index";
import { MainLayoutSection } from "./adminLayout.styles";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";



const AdminLayout = () => {

  return (
    
    <MainLayoutSection>
      <div className="mainHeader">
        <Header />
      </div>
   
       
        <div className="mainContent">
          <Outlet />
        </div>
        <div className="footer">
          <Footer/>
        </div>
      
    </MainLayoutSection>
    
  );
};

export default AdminLayout;
