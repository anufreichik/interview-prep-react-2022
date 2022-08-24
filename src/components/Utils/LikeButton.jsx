import React,{useState} from 'react';
import './likebutton.css';

const LikeButton = ({title}) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleButtonClick=()=>{
        setIsLiked(!isLiked)
    }

    return <>
        <button className={`likebutton ${isLiked?'liked':''}`} onClick={handleButtonClick}>{title}</button>
        <div className={`heart ${isLiked?'heart-liked':''}`} onClick={handleButtonClick}></div>
        </>;
}
export default LikeButton;
