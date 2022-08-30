import {Link} from "react-router-dom";
import React from "react";
import './sidebar.css'

const Sidebar=()=>{
    return(
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
            <Link to="posts">Posts With Pagination</Link>
            <Link to="widgets">Widgets</Link>
        </nav>
    )
}
export default Sidebar;
