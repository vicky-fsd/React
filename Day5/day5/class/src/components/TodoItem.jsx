import React, { useState } from 'react';

const TodoItem = ({ todo, handleStatusChange, handleEditStart, handleDeleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEditSave = () => {
    // Call the parent component's edit save function
    // and pass the updated task and description
    handleEditStart(todo.id, editedTask, editedDescription);
    setEditing(false);
  };

  return (
    <div className="todo-card">
      {editing ? (
        <div>
          <input value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
          <input value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => handleStatusChange(todo.id)}>Change Status</button>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
