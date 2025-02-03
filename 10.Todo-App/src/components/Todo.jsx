import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import '../App.css'
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(todo.content);

    const removeTodo = () => {
        onRemoveTodo(todo.id);
    }

    const updateTodo = () => {
        const request = {
            id: todo.id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "10px", border: "1px solid lightgrey" }}>
            <div>
                {
                    editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" className='todo-input' /> : todo.content
                }
            </div>
            <div>
                <IoIosRemoveCircleOutline onClick={removeTodo} className='todo-icon' />
                {
                    editable ? <FaCheck onClick={updateTodo} className='todo-icon' /> : <MdEdit className='todo-icon' onClick={() => setEditable(true)} />
                }



            </div>
        </div>
    )
}

export default Todo