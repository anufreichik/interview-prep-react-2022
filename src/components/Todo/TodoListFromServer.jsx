import React, {useEffect, useState} from 'react';

const TodoListFromServer = () => {
    const [todoList, setTodoList] = useState([]);
    useEffect(()=>{
        // const response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        // const json = await response.json();
        // setTodoList(json.data);
    },[])

    console.log(todoList)
    return (
        <div>

        </div>
    );
};

export default TodoListFromServer;
