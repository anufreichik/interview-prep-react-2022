import React from 'react';
import CheckboxGroup from "./CheckboxGroup";
import {useState} from "react";

const data = [
    {id:1, value:'apple', title:'Apple', selected:true},
    {id:3, value:'amazon', title:'Amazon',selected:false },
    {id:2, value:'google', title:'Google',selected:true},
]



const CheckboxFilter = () => {

    const [checkboxes, setCheckboxes]=useState(data);

    const onUpdate=(id)=>{
        setCheckboxes(prev=>{
            return prev.map(el=>{
                if(el.id===id){
                    return {...el, selected:!el.selected}
                }
                else
                    return {...el}
            })
        })
    }
    console.log(checkboxes)
    return (
        <div>
            <CheckboxGroup checkboxes={checkboxes} onUpdate={onUpdate} />
        </div>
    );
};

export default CheckboxFilter;
