import React, { useState } from "react";
import "../styles/sidebar.css";

interface SidebarProps {
  addTask: (title: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ addTask }) => {
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    addTask(newTitle);
    setNewTitle("");
  };

  return (
    <aside className="sidebar">
      <h2>TODO APPLICATION</h2>
      <ul className="menu-list">
        <li>Upcoming</li>
        <li>Today</li>
        <li>Calendar</li>
      </ul>

      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="New task..."
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button className="btn" onClick={handleAdd}>Add New Task</button>
      
    </aside>
  );
};

export default Sidebar;
