import React from 'react';

export default function TodoList({todos}) {
  console.log('render todo list');

  return (
    <ul className="task-list">
      {
        todos && todos.length > 0 &&
        todos.map((todo, index) => (
          <li className="task" key={`task-${todo.content}-${todo.createdTime}`}>
            <div className="number"><span>{index + 1}</span></div>
            <div className="content">
              <p>{todo.content}</p>
            </div>
            {
              todo.hasDone === false &&
              <div className="action">
                <button>Done</button>
              </div>
            }
          </li>
        ))
      }
    </ul>
  );
}