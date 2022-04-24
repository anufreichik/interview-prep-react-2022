import React, {useState} from 'react';
import './style.css';
const Autocomplete = () => {

    const names = ['Adam','Antony', 'Bruce', 'Cyndy', 'Daniel', 'Tim', 'Veronika', 'Victor', 'Kevin', 'Kyle', 'Klavdia', 'Dalia'];
    const [list, setList]=useState([]);
    const [value, setValue] = useState();

    const handleItemClick=(val)=>{
        setValue(val);
        setList([]);
    }
    const handleChange = (evt)=>{
        let val = evt.target.value;
        setValue(val);
        let tempArr = [];
        if(val.length){
            names.forEach((el)=>{
                if(el.substring(0,val.length).toUpperCase()===val.toUpperCase()){
                    tempArr.push(el);
                }
            })
        }

        setList(tempArr);
    }
    return (
        <div className='container-center'>
            <input className='autocomplete' onChange={(e)=>handleChange(e)} value={value}/>
            <div className='suggestions'>
                {
                    list.map((el,ind)=><div key={ind} onClick={()=>handleItemClick(el)}>{el}</div>)
                }
            </div>
        </div>
    );
};

export default Autocomplete;
