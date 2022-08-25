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
                <div className='front'>
                    <h1>{contentFront}</h1>
                    <img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>
                </div>
                <div className='back'>
                    <h1>{contentBack}</h1>
                    <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
                    <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
                </div>
            </div>

        </div>
    );
};

export default FlippingCard;
