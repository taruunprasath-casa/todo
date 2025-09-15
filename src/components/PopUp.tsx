import { useState, type FormEvent } from "react";
import './PopUp.css';
import type { Task } from "./type";

interface AddTaskFormProps {
  onAdd: (task: Task) => void;
}

export default function PopUp({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState<"today" | "week" | "month" | "later">("today");
  const [recurring, setRecurring] = useState<"none" | "daily" | "weekly">("none");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      startDate,
      endDate,
      category,
      recurring,
      priority,
      completed: false,
    };

    onAdd(newTask);

    // Reset form
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setCategory("today");
    setRecurring("none");
    setPriority("medium");
  };



  return (
    <div className="main-container">
      <div className="addTask"><h3>Add New Task</h3></div>
      <form onSubmit={handleSubmit} className="from-container">

        <div className="title">
          <p>Task Title</p>
          <input type="text" placeholder="Enter Task Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="description">
          <p>Description</p>
          <textarea placeholder="Enter the Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="date-row">
          <p>Start Date</p>
          <input type="date" />
          <p>End Date</p>
          <input type="date" />
        </div>
        <div className="category">
          <p>Category</p>
          <select value={category} onChange={(e) => setCategory(e.target.value as Task["category"])}>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="later">Later</option>
          </select>
        </div>

        <div className="recur">
          <p>Recurr</p>
          <select value={recurring} onChange={(e) => setRecurring(e.target.value as Task["recurring"])}>
            <option value="none">Not Recurring</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div className="priority">
          <p>Priority</p>
          <select value={priority} onChange={(e) => setPriority(e.target.value as Task["priority"])}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
