import React, { useState } from "react";
import TaskDetails from "./components/TaskDetails";
import TaskList from "./components/TaskList";
import Sidebar from "./components/SideBar";
import "./App.css";
import Header from "./components/Header";

export interface Subtask {
  id: number;
  title: string;
  completed: boolean;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  list: string;
  dueDate?: string;
  tags: string[];
  subtasks: Subtask[];
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => { },
  });

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      list: "General",
      tags: [],
      subtasks: [],
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (updated: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updated.id ? updated : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setSelectedTask(null);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(theme === "light" ? "dark" : "light") }}>
      <div className={`app ${theme}`}>
        <Sidebar addTask={addTask} />
        <main className="main-content">
          <Header
            count={tasks.length}
            completed={tasks.filter((t) => t.completed).length}
            theme={theme}
            setTheme={setTheme}
          />
          <TaskList
            tasks={tasks}
            onSelect={setSelectedTask}
            onToggleComplete={toggleComplete}
          />
        </main>
        {selectedTask && (
          <TaskDetails
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
