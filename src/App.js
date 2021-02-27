import React, { useState } from 'react';
import NewTask from './Presentational/NewTask';
import TasksList from './Presentational/TasksList';


export default function TaskManager(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({});

    const handleChange = ({target}) => {
        const {name, value} = target;
        setNewTask((prev) => ({
            ...prev,
            [name]: value,
            id: Date.now()
        }));
        // console.log(newTask);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTask) return;
        setTasks((prev) => [...prev, newTask]);
        setNewTask({});
    }

    const handleDelete = (taskIdToRemove) => {
        // console.log(taskIdToRemove);
        setTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
    }

    return (
        <main>
            <h1>Tasks</h1>
            <NewTask 
                task={newTask}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <TasksList 
                tasks={tasks}
                onDelete={handleDelete}
            />
        </main>
    )
}
