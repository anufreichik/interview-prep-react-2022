import React,{useState} from 'react';
import './popover.css'
const Popover = () => {
    const [open, setOpen] =useState(false);
    return (
        <div className='wrapper'>
            <div className='popover-container'>
                <div className='popover-button' onClick={()=>setOpen(prev=>!prev)}>
                    {!open?'Open Popover':'Close Popover'}
                </div>
                {open && <div className='container-content'>The Content of popover</div>}
            </div>
        </div>

    );
};

export default Popover;
