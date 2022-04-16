import React, {useEffect, useState} from 'react';
import './todolist.css';
import {todos} from "./todos-data";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todoList, setTodoList] = useState(todos);

    const deleteTodoItem = (id)=>{
        const newList = [...todoList].filter(el=>el._id!==id);
        setTodoList(newList);
    }
    const updateStatus=(id)=>{
        const newList = [...todoList].map(el=>{
            if(el._id===id) {
                return {...el, active: !el.active}
            }
            else return el;
        })
        setTodoList(newList);
    }

    useEffect(()=>{
        todoList.sort((a,b)=>{
            if(a.title<b.title) return -1;
            else return 1;
        });
    },[])

    useEffect(()=>{
        todoList.sort((a,b)=>{
            if(a.title<b.title) return -1;
            else return 1;
        });
    },[todoList])

    return (
        <div className='list-container'>
            <div>

            </div>
            {
                todoList.map((el, index)=>
                <TodoItem item={el} key={el._id} deleteTodo={deleteTodoItem} updateStatus={updateStatus}/>
                )
            }
        </div>
    );
};

export default TodoList;
