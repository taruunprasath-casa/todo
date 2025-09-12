import React from "react";
import TaskItem from "./TaskItem";
import "../styles/tasklist.css";
import type { Task } from "../App";

interface TaskListProps {
  tasks: Task[];
  onSelect: (task: Task) => void;
  onToggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onSelect, onToggleComplete }) => {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onSelect={() => onSelect(task)}
          onToggleComplete={() => onToggleComplete(task.id)}
        />
      ))}
    </section>
  );
};

export default TaskList;
