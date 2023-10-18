import React, { useState } from 'react';
import './TodoForm.css'

function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');
  const [errorMessae, seterrorMessae] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      seterrorMessae('Please Add Input');
    }
    else{
      addTodo(newTodo);
      setNewTodo('');
      seterrorMessae('');
    }
  }

  return (
    <div className='Todoforms'>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      {errorMessae && <p style={{ color: 'red'}}>{errorMessae}
      </p>}
      <button className='btn' onClick={handleAddTodo}>Add</button>
      
    </div>
  );
}

export default TodoForm;