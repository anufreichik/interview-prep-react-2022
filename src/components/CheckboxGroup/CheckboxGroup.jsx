import React from 'react';


const CheckboxGroup = ({checkboxes, onUpdate}) => {

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            { checkboxes.map(el=>(
                <div style={{display:"flex", gap:'5px', width:'200px', justifyContent:'flex-start'}} key={el.id}>
                    <input type="checkbox" value={el.value} id={el.id} onChange={()=>onUpdate(el.id)} checked={el.selected}/>
                    <label title={el.title} >{el.title}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxGroup;
