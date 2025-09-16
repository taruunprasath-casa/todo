import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { Task } from "./type";

export default function CalendarPage() {
    const [tasks, setTasks] = useState<Task[]>(() => localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")!) : []);

    useEffect(() => {
        const saved = localStorage.getItem("todo");
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(tasks));
    }, [tasks]);

    const events = tasks.map((task) => ({
        id: task.id.toString(),
        title: task.title,
        start: task.startDate,
        end: task.endDate,
        color:
            task.priority === "high"
                ? "red"
                : task.priority === "medium"
                    ? "orange"
                    : "green",
    }));

    return (
        <div style={{ padding: "20px" }}>
            <h2>📅 Task Calendar</h2>

            <div style={{ marginTop: "30px" }}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    editable={false}
                    selectable={true}
                    height="auto"
                />
            </div>
        </div>
    );
}
