import React, {useState} from 'react';
import './slider.css'
const Slider = ()=>{
    const slidesData=[
        {url:'https://source.unsplash.com/random/300×300?fruit', title:'image 1'},
        {url:'https://source.unsplash.com/random/300×300?car', title:'image 2'},
        {url:'https://source.unsplash.com/random/300×300?animal', title:'image 3'},
        {url:'https://source.unsplash.com/random/300×300?city', title:'image 4'},
        {url:'https://source.unsplash.com/random/300×300?computer', title:'image 5'},
    ]
    const [currentIndex, setCurrentIndex] = useState(0);


    const handleNextClick=()=>{
        if(currentIndex<slidesData.length-1) setCurrentIndex((prev)=>currentIndex+1);
        else setCurrentIndex(0);
    }
    const handlePrevClick=()=>{
            if(currentIndex>0) setCurrentIndex((prev)=>currentIndex-1);
            else setCurrentIndex(slidesData.length-1);
    }

    const handleDotClick=(ind)=>{
        setCurrentIndex(ind);
    }

    return(
       <div className='slider-container'>
           <div className='slide'>
               <img src={slidesData[currentIndex]?.url} alt={slidesData[currentIndex]?.title}/>
               <span>{slidesData[currentIndex]?.title}</span>
               <div className='slide-next' onClick={()=>handleNextClick()}>⟩</div>
               <div className='slide-prev' onClick={()=>handlePrevClick()}>⟨</div>
           </div>

            <div className='dots-container'>
                {slidesData.map((el,ind)=><div className='dot' onClick={()=>handleDotClick(ind)}>⚫</div>)}
            </div>
       </div>
    )
}
export default Slider;
