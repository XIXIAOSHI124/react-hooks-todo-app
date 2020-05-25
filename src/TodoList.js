import React from 'react';
import TodoTask from './TodoTask';

export default function TodoList({todos}) {
  console.log('render todo list');

  return (
    <ul className="task-list">
      {
        todos && todos.length > 0 &&
        todos.map((todo, index) => (
          <TodoTask
            key={`task-${todo.content}-${todo.createdTime}`}
            number={index + 1}
            content={todo.content}
            createdTime={todo.createdTime}
            hasDone={todo.hasDone}
          />
        ))
      }
    </ul>
  );
}