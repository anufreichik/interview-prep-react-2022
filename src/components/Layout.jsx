import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <div>
          <Navbar/>
            <Header/>
            <div className="content">
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
