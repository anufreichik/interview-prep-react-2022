import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";

const Grandchild = () => {
    const {userInfo} = useContext(AppContext);

    return (
        <div>
            <div>@ GrandChild</div>
            <div>  {userInfo?.email}</div>
            <div>  {userInfo?.name}</div>

        </div>
    );
};

export default Grandchild;
