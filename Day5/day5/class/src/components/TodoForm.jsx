import React, { useState } from 'react';

const TodoForm = ({ handleAddTodo }) => {
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddClick = () => {
    if (newTask.trim() === '') return;

    handleAddTodo({
      task: newTask,
      description: newDescription,
    });

    setNewTask('');
    setNewDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={handleAddClick}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
