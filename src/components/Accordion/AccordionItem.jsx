import React,{useState} from 'react';
import './accordionItem.css'
const AccordionItem = ({itemData}) => {
    const [open,setOpen] =useState(false);
    return (
        <div className='accordion-container'>
            <div className='item-container'>
                <div>{itemData.title}</div>
                <div>
                    <button onClick={()=>setOpen(prev=>!prev)}>{!open?'Details':'Close'}</button>
                </div>
            </div>
            {open && <div className='accordion-details'>{itemData.details}</div>}

        </div>
    );
};

export default AccordionItem;
