import React from 'react';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import List from "./LIst/List";
import './style.css';

const Office = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <List/>
        </div>
    );
};

export default Office;
