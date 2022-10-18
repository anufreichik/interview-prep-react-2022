import React, {useState} from 'react';

const Folder = ({explorer}) => {
    const[expand, setExpand]=useState(false);

    if(explorer.isFolder)
    return (

        <div>
            <span onClick={()=>{setExpand(!explorer)}}>{explorer.name}</span>
            <div style={{display:expand?'block':'none', paddingLeft:'12px'}}>
                {explorer.items?.map(exp=>{
                    return(<Folder explorer={exp}/>)
                })}
            </div>
        </div>

    )
    else
        return (
            <span >{explorer.name}</span>
        )
};

export default Folder;
