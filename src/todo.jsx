import React, { useEffect, useState } from 'react';
import './todo.css';

const Todo = () => {
    const [tasks, setTasks] = useState(() => { return JSON.parse(localStorage.getItem('tasks')) || [] });
    const [newTask, setNewTask] = useState('');

    function handleAdd() {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    function handleDelete(index) {
        const updateTask = tasks.filter((_, i) => i !== index);
        setTasks(updateTask);
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="todo-container">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add your task"
                className="todo-input"
            />
            <button onClick={handleAdd} className="todo-button">Add</button>
            <ol className="todo-list">
                {tasks.map((task, index) =>
                    <li key={index} className="todo-item">
                        {task}
                        <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default Todo;
