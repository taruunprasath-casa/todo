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

      <div className="date-row">
        <label>
          Start Date:
          <input
            type="date"
            value={editedTask.startDate || ""}
            onChange={(e) => setEditedTask({ ...editedTask, startDate: e.target.value })}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={editedTask.endDate || ""}
            onChange={(e) => setEditedTask({ ...editedTask, endDate: e.target.value })}
          />
        </label>
      </div>

      <label>
        Category:
        <select
          value={editedTask.category}
          onChange={(e) => setEditedTask({ ...editedTask, category: e.target.value as Task["category"] })}
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="later">Later</option>
        </select>
      </label>

      {/* Recurring */}
      <label>
        Recurring:
        <select
          value={editedTask.recurring}
          onChange={(e) => setEditedTask({ ...editedTask, recurring: e.target.value as Task["recurring"] })}
        >
          <option value="none">Not Recurring</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </label>

      {/* Priority */}
      <label>
        Priority:
        <select
          value={editedTask.priority}
          onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value as Task["priority"] })}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>

      <label>
        <input
          type="checkbox"
          checked={editedTask.completed}
          onChange={(e) => setEditedTask({ ...editedTask, completed: e.target.checked })}
        />
        Completed
      </label>

      <div className="actions">
        <button id="button" onClick={handleSave}>💾 Save</button>
        <button id="button" onClick={() => onDelete(task.id)}>🗑 Delete</button>
        <button id="button" onClick={onClose}>❌ Close</button>
      </div>
    </aside>
  );
};

export default TaskDetails;
