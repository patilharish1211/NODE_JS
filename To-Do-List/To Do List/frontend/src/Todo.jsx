import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
  const [data, setData] = useState([]);
  const [task, setTask] = useState(''); 
  const [editId, setEditId] = useState(null); 

  // Fetching tasks from the backend
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3500/todo');
      setData(response.data.tasks);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (task.trim()) {
      if (editId) {
        
        try {
          await axios.put(`http://localhost:3500/todo/${editId}`, { task });
          setEditId(null); 
        } catch (err) {
          console.log(err);
        }
      } else {
        
        try {
          const newTask = { id: uuidv4(), task };
          await axios.post('http://localhost:3500/todo', newTask);
        } catch (err) {
          console.log(err);
        }
      }
      setTask('');
      getData(); 
    }
  };

  
  const handleEdit = (taskId, currentTask) => {
    setTask(currentTask); 
    setEditId(taskId); 
  };

  
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3500/todo/${taskId}`);
      getData(); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todo-container container">
      <h1 className="my-3">To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)} 
            name="task"
            className="form-control todo-input"
            placeholder="Add a new task"
          />
          <button type="submit" className="btn btn-success add-button">
            {editId ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </form>

      <ul className="list-group todo-list">
        {data.map((el) => (
          <li key={el.id} className="list-group-item d-flex justify-content-between align-items-center todo-item" style={{textAlign: 'center'}}>
            <div>
              <input type="radio" className="radio me-2" style={{marginLeft: '450px'}} />
              <span   className="task-text" style={{marginLeft: '0px'}} >{el.task}</span>
            </div>
            <div className="todo-buttons">
              <button
                className="btn btn-primary me-2 edit-button"
                onClick={() => handleEdit(el.id, el.task)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger delete-button"
                onClick={() => handleDelete(el.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
 