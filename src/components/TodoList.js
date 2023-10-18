import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css'

function TodoList({ todos, showCompleted, onToggle, onEdit, onDelete }) {
    const filteredTodos = showCompleted
      ? todos
      : todos.filter((todo) => !todo.completed);
  
    return (
      <ul>
        {filteredTodos.map((todo) => (
          <li
          key= {todo.id}
          className={todo.completed ? 'completed-task' : ''}
          >
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
            
          />
          </li>
        ))}
      </ul>
    );
  }

  export default TodoList;