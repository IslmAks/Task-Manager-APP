interface Props {
  filter: string;
  setFilter: (v: string) => void;
  search: string;
  setSearch: (v: string) => void;
}

const filters = [
  { value: "all",       label: "Tümü" },
  { value: "pending",   label: "Bekleyen" },
  { value: "completed", label: "Tamamlanan" },
  { value: "high",      label: "🔴 Yüksek" },
];

export default function FilterBar({ filter, setFilter, search, setSearch }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4">
      <input
        type="text"
        placeholder="Görev ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition"
      />
      <div className="flex gap-2 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-3 py-2 rounded-xl text-sm font-medium transition ${
              filter === f.value
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
