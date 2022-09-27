import React, {useEffect, useState} from 'react';
import './photo.css'

const Photo = ({data, getPhotoDetails}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [detailsData, setDetailsData] = useState();
    const [buttonTitle, setButtonTitle] = useState('Show Details');

    const handleShowDetails=(id)=>{
        setButtonTitle(showDetails?'Show Details':'Hide Details');
        setShowDetails(prev=>!prev);

        getPhotoDetails(id).then(res=> {
            setDetailsData(res);
        })

    }

    return (
        <div className='photo-container'>
            <img src={data.link} className='photo'/>
            <div className='photo-details'>

                {showDetails && <span>{`${detailsData?.title} ${new Date(detailsData?.toTake).toLocaleString('en-US', {hour12: false})}`}</span>}
                <a onClick={()=>handleShowDetails(data.id)}>{buttonTitle}</a>
            </div>
        </div>
    );
};

export default Photo;
