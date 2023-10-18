import './TodoItem.css'
import React from "react";
import { useState } from "react";


function TodoItem({ todo, onToggle, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo.title);
  
    const handleSave = () => {
      onEdit(todo.id, editedTodo);
      setIsEditing(false);
    };
  
    return (
      <li className="list-items">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            {todo.title}
            <button className='edit-btn' onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
        <button className='del' onClick={() => onDelete(todo.id)}>Delete</button>
      </li>
    );
  }
  export default TodoItem;