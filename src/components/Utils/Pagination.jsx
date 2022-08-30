import React, {useState} from 'react';
import './pagination.css';

const Pagination = ({size, onChange}) => {
    const [selectedItem, setSelectedItem] = useState(0);
    const handleItemClick=(ind)=>{
        setSelectedItem(ind);
        onChange(ind);
    }
    const handlePrevNext=(val)=>{
        setSelectedItem((prev) => prev +val);
        const newVal = selectedItem + val;
        onChange(newVal);
    }
    return (
        <div className='pagination-container'>
            <div className='pagination-prev' onClick={() => handlePrevNext(-1)}
                 disabled={selectedItem === 0}>{'<'}</div>
            {
                [...Array(size)].map((el, index) => {
                    return (<div key={index} className={`pagination-item ${selectedItem === index ? 'selected' : ''}`}
                                 onClick={()=>handleItemClick(index)}>{index + 1}</div>)
                })
            }
            <div className='pagination-next' onClick={() => handlePrevNext(1)}
                 disabled={selectedItem === size - 1}>{'>'}</div>
        </div>
    );
};

export default Pagination;
