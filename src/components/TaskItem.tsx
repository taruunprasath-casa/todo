import React from "react";
import type { Task } from "../App";
import "../styles/tasklist.css";

interface TaskItemProps {
  task: Task;
  onSelect: () => void;
  onToggleComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onSelect, onToggleComplete }) => {
  return (
    <div className="task-item">
      <span
        onClick={onSelect}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "var(--text-color)" : "var(--text-color)",
          cursor: "pointer",
        }}
      >
        {task.title}
      </span>
       <input type="checkbox" checked={task.completed} onChange={onToggleComplete} />
    </div>
  );
};

export default TaskItem;
