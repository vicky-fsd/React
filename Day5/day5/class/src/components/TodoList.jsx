import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleStatusChange, handleEditStart, handleDeleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleStatusChange={handleStatusChange}
          handleEditStart={handleEditStart}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
