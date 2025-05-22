import React, { useState, useEffect } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setTaskInput("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Active") return !task.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>React To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="filter-buttons">
        {["All", "Active", "Completed"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="task-list">
        {filteredTasks.length === 0 && (
          <li className="no-tasks">No tasks to show</li>
        )}
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span className="task-text">{task.text}</span>
            </label>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
