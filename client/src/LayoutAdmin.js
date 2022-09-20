import React from 'react';
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SiteBarEditor from "./components/SiteBarEditor";

const LayoutAdmin = () => {
    return (
        <div>
             
      <Header >
        
      </Header >
      <div className="container ">
    





    <div className="row">
    <SiteBarEditor />
<Outlet />
    </div>
    </div>
      
        


    <Footer />
        </div>
    );
};

export default LayoutAdmin;