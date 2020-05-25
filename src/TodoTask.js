import React, { useState, useCallback } from 'react';

function TodoTask({number, content, hasDone }) {
  console.log('render TodoTask');
  const [done, updateDone] = useState(hasDone);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    updateDone((prevState) => {
      updateDone(!prevState);
    });
  }, []);

  return (
    <li className="task">
      <div className="number"><span>{number}</span></div>
      <div className="content">
        <p className={ done ? 'done' : ''}>{content}</p>
      </div>
      {
        (done) ?
          <div className="action">
            <button onClick={handleClick}>TODO</button>
          </div>
          :
          <div className="action">
            <button className="done" onClick={handleClick}>Done</button>
          </div>
      }
    </li>
  );
}

export default TodoTask;