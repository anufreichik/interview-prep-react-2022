import React, {useState} from 'react';
import './flippingcard.css'

const FlippingCard = ({contentFront,contentBack}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick=()=>{
        setIsFlipped((prev)=>!prev);
    }
    return (
        <div className='card-container' >
            <div className={`card ${isFlipped?'flipped':''}`} onMouseEnter={handleClick} onMouseLeave={handleClick}>
                <div className='front'>{contentFront}</div>
                <div className='back'>{contentBack}</div>
            </div>

        </div>
    );
};

export default FlippingCard;
