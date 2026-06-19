import React, { useState, useEffect } from "react";
import { Task, TaskFormData } from "../interfaces/Task";

interface Props {
  editingTask?: Task | null;
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
}

const emptyForm: TaskFormData = {
  title: "",
  description: "",
  category: "work",
  priority: "medium",
};

export default function TaskForm({ editingTask, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<TaskFormData>(emptyForm);

  useEffect(() => {
    if (editingTask) {
      const { title, description, category, priority } = editingTask;
      setForm({ title, description, category, priority });
    } else {
      setForm(emptyForm);
    }
  }, [editingTask]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSubmit(form);
    setForm(emptyForm);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {editingTask ? "✏️ Görevi Düzenle" : "➕ Yeni Görev Ekle"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Görev Başlığı *
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Görevi kısaca tanımla..."
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Açıklama
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Detay ekle (isteğe bağlı)..."
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition resize-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Kategori
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-400 outline-none text-sm bg-white transition"
            >
              <option value="work">💼 İş</option>
              <option value="personal">🏠 Kişisel</option>
              <option value="education">📚 Eğitim</option>
              <option value="other">🗂️ Diğer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Öncelik
            </label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-400 outline-none text-sm bg-white transition"
            >
              <option value="low">🟢 Düşük</option>
              <option value="medium">🟡 Orta</option>
              <option value="high">🔴 Yüksek</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 pt-1">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl text-sm transition"
          >
            {editingTask ? "Güncelle" : "Görev Ekle"}
          </button>
          {editingTask && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium py-2.5 rounded-xl text-sm transition"
            >
              İptal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
