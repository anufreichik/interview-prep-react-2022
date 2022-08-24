import React, {useState} from 'react';
import './flippingcard.css'

const FlippingCard = ({contentFront,contentBack}) => {
    const [isFront, setIsFront] = useState(true);
    const handleClick=()=>{
        setIsFront((prev)=>!prev);
    }
    return (
        <div className='card' onClick={handleClick}>
            {isFront?contentFront:contentBack}
        </div>
    );
};

export default FlippingCard;
