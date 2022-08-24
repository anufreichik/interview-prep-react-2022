import React from 'react';
import './moviebooking.css';
import Movies from "./Movies/Movies";
import Seats from "./Seats/Seats";

const MovieBooking = () => {
    return (
        <div className='movie-container'>
            <div>
                <Movies/>
            </div>
            <ul className="legend-container">
                <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                </li>

                <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                </li>

                <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>

            <Seats/>



        </div>
    );
};

export default MovieBooking;
