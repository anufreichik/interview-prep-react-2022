import React from 'react';
import GrandChild from "./GrandChild";

const Child = () => {
    return (
        <div>
           <span>@ child</span>
            <GrandChild/>
        </div>
    );
};

export default Child;
