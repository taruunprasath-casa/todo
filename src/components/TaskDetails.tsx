import React, { useState } from "react";
import type { Task } from "../App";
import "../styles/taskdetails.css";


interface TaskDetailsProps {
  task: Task;
  onClose: () => void;
  onUpdate: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onClose, onUpdate, onDelete }) => {
  const [editedTask, setEditedTask] = useState<Task>(task);

  const handleSave = () => {
    onUpdate(editedTask);
    onClose();
  };

  return (
    <aside className="task-details">
      <h3>Edit Task</h3>
      <input
        type="text"
        value={editedTask.title}
        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={editedTask.description || ""}
        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
      />

      <div className="actions">
        <button id="button" onClick={handleSave}>💾 Save</button>
        <button id="button" onClick={() => onDelete(task.id)}>🗑 Delete</button>
        <button id="button" onClick={onClose}>❌ Close</button>
      </div>
    </aside>
  );
};

export default TaskDetails;
