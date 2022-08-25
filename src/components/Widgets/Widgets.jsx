import React from 'react';
import LikeButton from "../Utils/LikeButton";
import FlippingCard from "../Utils/FlippingCard";
import FormatedDate from "../Utils/FormatedDate";


const Widgets = () => {
    const front='FRONT!';
    const back='BACK!';

    const dateToFormat = new Date();
    return (
        <div style={{display:"flex", alignItems:'center', justifyContent:'center', flexDirection:"column", gap:'10px'}}>
            <LikeButton title={'Like'}/>
            <FlippingCard contentFront={front} contentBack={back}/>
            <FormatedDate inputDate={dateToFormat} format={'MM-DD-YYYY'}/>
        </div>
    );
};

export default Widgets;
