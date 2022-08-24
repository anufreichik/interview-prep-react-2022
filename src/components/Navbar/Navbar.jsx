import React from 'react';
import './navbar.css'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <div className="navLogo">
                        Logo
                </div>

                    <nav className='navLinks'>
                        <Link to="/">Home</Link>
                        <Link to="todo">Todos</Link>
                        <Link to="algoquestions">AlgoQuestions</Link>
                        <Link to="debounce">Debounce</Link>
                        <Link to="autocomplete">Autocomplete</Link>
                        <Link to="marketplace">Market Place</Link>
                        <Link to="office">Office</Link>
                        <Link to="shoppping">Shopping Store</Link>
                        <Link to="moviebooking">Movies Booking</Link>
                        <Link to="widgets">Widgets</Link>
                    </nav>

                <div className='navButtonsContainer'>
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
