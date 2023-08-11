import React, { useState } from 'react';
import './App.css';
import './Todo.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [editedDescription, setEditedDescription] = useState('');


  const handleAddTodo = () => {
    
    if (newTask.trim() === '') {
        alert("Please Add New Task")
    }

    const newTodo = {
      id: Date.now(),
      task: newTask,
      description: newDescription,
      status: 'Not Completed',
    };

    setTodos([...todos, newTodo]);
    setNewTask('');
    setNewDescription('');

  };

  const handleDeleteTodo = (id) => {
   
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditStart = (id, task, description) => {
    setEditingTodoId(id);
    setEditedTask(task);
    setEditedDescription(description);
  };

  const handleEditSave = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, task: editedTask, description: editedDescription }
        : todo
    );
    setTodos(updatedTodos);
    setEditingTodoId(null);
  };

  const handleEditCancel = () => {
    setEditingTodoId(null);
    setEditedTask('');
    setEditedDescription('');
  };

  const handleStatusChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, status: todo.status === 'Not Completed' ? 'Completed' : 'Not Completed' }
        : todo
    );
    setTodos(updatedTodos);
  };

  const handleFilterChange = (status) => {
    if (status === 'All') {
      setTodos(todos);
    } else {
      const filteredTodos = todos.filter((todo) => todo.status === status);
      setTodos(filteredTodos);
    }
  };
  


  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}  ${current.getHours()}:${current.getMinutes()}`;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Todo</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="mb-3">
        <select className="form-select" onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    <div className='container'>
    <h4 className="text-center mb-4">My Todos</h4> 
        <div  className='row'>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card card mb-3">
            {editingTodoId === todo.id ? (
              <div className="card-body">
                <input className="form-control mb-2" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                <input className="form-control mb-2" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                <button className="btn btn-success me-2" onClick={() => handleEditSave(todo.id)}>Save</button><span>,,</span>
                <button className="btn btn-secondary" onClick={handleEditCancel}>Cancel</button>
              </div>
            ) : (
             <div>
                
                 <div className="card-body">
                <h6 className="card-title">{date}</h6>
                <h4 className="card-title">Name : {todo.task}</h4>
                <p className="card-text">Description : {todo.description}</p>
                <h6 className="card-text">Status: {todo.status}</h6>
               
               <button className="btn btn-warning me-2" onClick={() => handleStatusChange(todo.id)}>Change Status</button>
                <button className="btn btn-info me-2" onClick={() => handleEditStart(todo.id, todo.task, todo.description)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
               
              </div>
             </div>
            )}
          </div>
        ))}
    
        </div>
    </div>
    </div>
  );
};

export default App;
