import { useState } from "react";
import { Task } from "../interfaces/Task";
import { useTasks } from "../components/useTasks";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import Stats from "../components/Stats";
import FilterBar from "../components/FilterBar";

export default function Home() {
  const { tasks, addTask, updateTask, deleteTask, toggleComplete } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filter, setFilter]         = useState("all");
  const [search, setSearch]         = useState("");

  const filtered = tasks.filter((t) => {
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    if (!matchSearch) return false;
    if (filter === "completed") return t.completed;
    if (filter === "pending")   return !t.completed;
    if (filter === "high")      return t.priority === "high" && !t.completed;
    return true;
  });

  const handleUpdate = (data: Parameters<typeof addTask>[0]) => {
    if (editingTask) {
      updateTask(editingTask.id, data);
      setEditingTask(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            ✅ Görev Yöneticisi
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Görevlerini ekle, düzenle ve takip et
          </p>
        </header>

        <Stats tasks={tasks} />

        <TaskForm
          editingTask={editingTask}
          onSubmit={editingTask ? handleUpdate : addTask}
          onCancel={() => setEditingTask(null)}
        />

        <FilterBar
          filter={filter} setFilter={setFilter}
          search={search} setSearch={setSearch}
        />

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-4xl mb-3">📭</p>
              <p className="text-sm">Görev bulunamadı.</p>
            </div>
          ) : (
            filtered.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={setEditingTask}
                onDelete={deleteTask}
                onToggle={toggleComplete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
