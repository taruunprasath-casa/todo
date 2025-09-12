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