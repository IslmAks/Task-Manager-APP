export interface Task {
  id: string;
  title: string;
  description: string;
  category: "work" | "personal" | "education" | "other";
  priority: "low" | "medium" | "high";
  completed: boolean;
  createdAt: string;
}

export type TaskFormData = Omit<Task, "id" | "completed" | "createdAt">;
