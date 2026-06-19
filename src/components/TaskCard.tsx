import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const priorityConfig = {
  low:    { label: "Düşük",   cls: "bg-green-50 text-green-700 border-green-200" },
  medium: { label: "Orta",    cls: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  high:   { label: "Yüksek",  cls: "bg-red-50 text-red-700 border-red-200" },
};

const categoryEmoji: Record<string, string> = {
  work: "💼", personal: "🏠", education: "📚", other: "🗂️",
};

export default function TaskCard({ task, onEdit, onDelete, onToggle }: Props) {
  const p = priorityConfig[task.priority];
  const date = new Date(task.createdAt).toLocaleDateString("tr-TR", {
    day: "numeric", month: "short", year: "numeric",
  });

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm p-5 transition-all ${
        task.completed ? "opacity-60 border-gray-100" : "border-gray-100 hover:shadow-md"
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all ${
            task.completed
              ? "bg-indigo-500 border-indigo-500"
              : "border-gray-300 hover:border-indigo-400"
          }`}
          aria-label={task.completed ? "Tamamlandı olarak işaretle" : "Tamamlandı yap"}
        >
          {task.completed && (
            <svg viewBox="0 0 20 20" fill="white" className="w-full h-full p-0.5">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-base">{categoryEmoji[task.category]}</span>
            <h3 className={`font-semibold text-gray-800 text-sm leading-snug ${task.completed ? "line-through text-gray-400" : ""}`}>
              {task.title}
            </h3>
          </div>
          {task.description && (
            <p className="text-xs text-gray-500 mb-2 leading-relaxed">{task.description}</p>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${p.cls}`}>
              {p.label}
            </span>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        </div>
        <div className="flex gap-1 flex-shrink-0">
          <button
            onClick={() => onEdit(task)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition"
            aria-label="Düzenle"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition"
            aria-label="Sil"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
