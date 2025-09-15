import React, { useState } from "react";
import "../styles/sidebar.css";
import PopUp from "./PopUp";
import type { Task } from "./type";

interface SidebarProps {
  onAdd: (task: Task) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onAdd }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <h2>TODO APPLICATION</h2>
        <ul className="menu-list">
          <li>Upcoming</li>
          <li>Today</li>
          <li>Calendar</li>
        </ul>

        <h2>Add New Task</h2>
        <button onClick={() => setShowPopup(true)} className="btn">
          Add New Task
        </button>
      </aside>

      {showPopup && (
        <div className="modal-overlay" onClick={() => setShowPopup(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <PopUp
              onAdd={(task: Task) => {
                onAdd(task);
                setShowPopup(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
