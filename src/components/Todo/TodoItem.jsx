import React from 'react';
import './todolist.css';
const TodoItem = ({item, deleteTodo, updateStatus}) => {
    return (
        <div className='list-item'>
            <div className={!item.active?'done-item':undefined}>{item.title}</div>
            <div>
                <input type='checkbox' checked={item.active} onClick={()=>updateStatus(item._id)} />
            </div>
            <div>
                <button onClick={()=>deleteTodo(item._id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;
