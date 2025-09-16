import React, { useEffect, useState } from 'react'
import TaskList from '../components/TaskList';
import Header from '../components/Header';
import Sidebar from '../components/SideBar';
import TaskDetails from '../components/TaskDetails';
import "../App.css";        

export interface Task {
    id: number;
    title: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    category: "today" | "week" | "month" | "later";
    recurring: "none" | "daily" | "weekly";
    priority: "high" | "medium" | "low";
    completed: boolean;
}

export const ThemeContext = React.createContext<{
    theme: "light" | "dark";
    toggleTheme: () => void;
}>({
    theme: "light",
    toggleTheme: () => { },
});



const Home = () => {
    const [tasks, setTasks] = useState<Task[]>(() => localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")!) : []);
    const [selectedTask, setSelectedTask] = useState<Task | null>();
    const [theme, setTheme] = useState<"light" | "dark">("light");


    useEffect(() => {
        const saved = localStorage.getItem("todo");
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: Task) => {
        setTasks((prev) => [...prev, task]);
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
        <>
            <ThemeContext.Provider
                value={{
                    theme,
                    toggleTheme: () =>
                        setTheme(theme === "light" ? "dark" : "light"),
                }}
            >
                <div className={`app ${theme}`}>
                    <Sidebar onAdd={addTask} />

                    <main className="main-content">
                        <Header
                            count={tasks.length}
                            completed={tasks.filter((t) => t.completed).length}
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
            </>
    )
}

export default Home