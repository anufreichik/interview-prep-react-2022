import React from 'react';
import Folder from "./Folder";

const explorer = {
    name:'root',
    isFolder:true,
    items:[
        {
            name:'public',
            isFolder: true,
            items:[
                {name:'nested1', isFolder: false},
                {name:'nested2', isFolder: true,
                items:[
                    {name:'index.html', isFolder: false},
                    {name:'index.css', isFolder: false},
                ]
                }
            ]
        },
        {
            name:'scr',isFolder: false
        }
    ]
}
const FoldersTree = () => {
    return (
        <div>
            <Folder explorer={explorer}/>
        </div>
    );
};

export default FoldersTree;
