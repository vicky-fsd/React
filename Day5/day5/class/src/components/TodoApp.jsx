import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log('Stored todos:', storedTodos);
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    console.log('Saving todos:', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now(), status: 'Not Completed' }]);
  };

  const handleStatusChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, status: todo.status === 'Not Completed' ? 'Completed' : 'Not Completed' }
        : todo
    );
    setTodos(updatedTodos);
  };

  const handleEditStart = (id, task, description) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, description } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleStatusChange={handleStatusChange}
        handleEditStart={handleEditStart}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
