import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState("");
    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        onCreateTodo(request);
        clearInput();
    }

    const clearInput = () => {
        setNewTodo(" ");
    }

    return (
        <div className='todo-create'>
            <input onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" placeholder='Todo Giriniz' />
            <button onClick={createTodo} className='todo-create-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate