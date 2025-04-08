// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim() === '') return;
    setItems([...items, input]);
    setInput('');
  };
  useEffect(() => {
    localStorage.setItem("dynamicList", JSON.stringify(items));
  }, [items]);
  
  return (
    <div className="app-container">
      <h1>Dynamic List Manager</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="list-container">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            {item}
          </div>
        ))}
        <div className="list-item">
          <button onClick={() => setItems([])}>Clear All</button>
        </div>
        <div className="list-item">
          <button onClick={() => setItems(items.slice(0, -1))}>Remove Last</button>
        </div>
        <div className="list-item">
          <button onClick={() => setItems(items.slice(1))}>Remove First</button>
        </div>
        <div className="list-item">
          <button onClick={() => setItems(items.filter((_, i) => i % 2 !== 0))}>
            Remove Even Indexed
          </button>
        </div>
        <div className="list-item">
          <button onClick={() => setItems(items.reverse())}>Reverse List</button>
        </div>
        <div className="list-item">
          <button onClick={() => setItems(items.sort((a, b) => a.length - b.length))}>
            Sort by Length
          </button>
        </div>

        <div className="list-item">
          <button onClick={() => localStorage.setItem('dynamicList', JSON.stringify(items))}>
            Save to Local Storage
          </button>
        </div>
        <div className="list-item">
          <button onClick={() => {
            const savedItems = JSON.parse(localStorage.getItem('dynamicList')) || [];
            setItems(savedItems);
          }}>
            Load from Local Storage
          </button>
        </div>
       <div className="list-item">
          <button onClick={() => {
            const savedItems = JSON.parse(localStorage.getItem('dynamicList')) || [];
            setItems(savedItems);
          }}>
          </button>
      </div>
    </div>
    </div>
  );
}

export default App;
