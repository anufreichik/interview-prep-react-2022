import React from 'react';
import { Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import './layout.css';
import Sidebar from "./Sidebar/Sidebar";


const Layout = () => {
    return (
        <div>
          <Navbar/>
            <div className="layout-content">
                <Sidebar/>
                <main className='main-container'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
