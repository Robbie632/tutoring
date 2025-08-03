import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState('');


  const addTodo = () => {

  };

  const toggleComplete = (id) => {

  };

  const deleteTodo = (id) => {
  };

  const handleKeyPress = (e) => {

  };

  return (
    <div className="container">
      <h1>To-Do App</h1>

      <div style={{ display: 'flex', marginBottom: '1.5em' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add Task</button>
      </div>

      <ul id="itemList">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                <span className="item" onClick={() => toggleComplete(todo.id)}>
                {todo.text}
                </span>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>
                Delete
                </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;