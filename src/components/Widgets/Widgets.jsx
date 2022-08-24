import React from 'react';
import LikeButton from "../Utils/LikeButton";
import FlippingCard from "../Utils/FlippingCard";


const Widgets = () => {
    const front='Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ab consequatur officia optio voluptates?Adipisci deleniti ex inventore laudantium quia velit!';
    const back='Consectetur adipisicing elit.Ab consequatur officia optio voluptates?Adipisci deleniti ex inventore laudantium quia velit!';

    return (
        <div style={{display:"flex", alignItems:'center', justifyContent:'center', flexDirection:"column"}}>
            <LikeButton title={'Like'}/>
            <FlippingCard contentFront={front} contentBack={back}/>
        </div>
    );
};

export default Widgets;
