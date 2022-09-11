import React, {useContext, useEffect} from 'react';
import Child from "./Child";
import {AppContext} from "../context/AppContext";

const Parent = () => {
    const { login } = useContext(AppContext);
    useEffect(()=>{
        login();
    },[])
    return (
            <Child/>
        )
}
export default Parent;
