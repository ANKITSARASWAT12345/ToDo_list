import React, { useState } from 'react';
import './style.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    setTodos([...todos, { text, done: false }]);
    setText('');
  };

  const toggleDone = (i) => {
    const updated = [...todos];
    updated[i].done = !updated[i].done;
    setTodos(updated);
  };

  const handleDelete = (i) => {
    setTodos(todos.filter((_, index) => index !== i));
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <span
              onClick={() => toggleDone(i)}
              style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
