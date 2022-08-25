import React, {useState} from 'react';
import './starrating.css';


const StarRating = () => {
    const [rating, setRating] = useState(-1);
    const [hover, setHover] = useState(-1);
    const handleStarClick = (index) => {
        setRating(index);
    }
    return (
        <div className='star-rating-container'>
            {
                [...Array(5)].map((star, index) => {
                    return (
                        <div className={`star ${index <= (hover || rating) ? 'on' : ''}`}
                             onClick={() => handleStarClick(index)}
                             onMouseEnter={() => setHover(index)}
                             onMouseLeave={() => setHover(rating)}

                        ></div>
                    )
                })
            }
        </div>
    );
};

export default StarRating;
