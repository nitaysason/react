import React, { useState } from 'react';

const Roi = () => {
    // Define a state variable 'todos' and a function 'setTodos' to update it
    const [todos, setTodos] = useState([]);
    // Define a state variable 'inputValue' and a function 'setInputValue' to update it
    const [inputValue, setInputValue] = useState('');
  
    // Function to add a new todo item
    const addTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, inputValue.trim()]);
        setInputValue('');
      }
    };
  
    // Function to remove a todo item
    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div>
        <h2>Todo List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default Roi