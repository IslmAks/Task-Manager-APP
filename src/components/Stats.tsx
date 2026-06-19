import { Task } from "../interfaces/Task";

interface Props { tasks: Task[] }

export default function Stats({ tasks }: Props) {
  const total     = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending   = total - completed;
  const high      = tasks.filter((t) => t.priority === "high" && !t.completed).length;

  const stats = [
    { label: "Toplam",       value: total,     color: "bg-indigo-50 text-indigo-700" },
    { label: "Tamamlanan",   value: completed, color: "bg-green-50 text-green-700" },
    { label: "Bekleyen",     value: pending,   color: "bg-yellow-50 text-yellow-700" },
    { label: "Yüksek Öncelik", value: high,    color: "bg-red-50 text-red-700" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {stats.map((s) => (
        <div key={s.label} className={`rounded-2xl p-4 ${s.color}`}>
          <p className="text-2xl font-bold">{s.value}</p>
          <p className="text-xs font-medium opacity-80 mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
