import React, {useState, useRef, useCallback} from 'react';
import TodoList from './TodoList';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('render app');
  const [todos, updateTodos] = useState([]);
  const taskInputRef = useRef(null);

  const handleOnClickAddBtn = useCallback((e) => {
    console.log('click add button');
    e.stopPropagation();
    const {value} = taskInputRef.current;
    updateTodos((prevTodos) => [...prevTodos, {
      createdTime: Date.now(),
      content: value,
      hasDone: false
    }]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TODO App
        </p>
        <a
          className="App-link"
          href="https://github.com/XIXIAOSHI124/react-hooks-todo-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View project
        </a>
      </header>
      <div className="main">
        <div className="task-box">
          <input
            type="text"
            placeholder="TODO"
            ref={taskInputRef}
          />
          <button onClick={handleOnClickAddBtn}>Add</button>
          <span className="clean"></span>
        </div>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
