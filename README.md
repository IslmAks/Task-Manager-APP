# ✅ Görev Yöneticisi — Task Manager

React + TypeScript + Tailwind CSS ile geliştirilmiş, LocalStorage tabanlı CRUD görev yönetim uygulaması.

## 🚀 Özellikler

- **Ekle** — Başlık, açıklama, kategori ve öncelik ile görev oluştur
- **Listele** — Tüm görevleri filtrele (tümü / bekleyen / tamamlanan / yüksek öncelik) ve ara
- **Güncelle** — Herhangi bir görevi düzenle, tamamlandı olarak işaretle
- **Sil** — Görevi kalıcı olarak kaldır
- **LocalStorage** — Veriler tarayıcıda kalıcı olarak saklanır
- **Responsive** — Mobil ve masaüstü uyumlu

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| ReactJS   | UI kütüphanesi |
| TypeScript | Tip güvenliği |
| Tailwind CSS | Stil |
| Vite | Build aracı |
| LocalStorage | Veri saklama |

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── useTasks.ts      ← LocalStorage hook (CRUD)
│   ├── TaskForm.tsx     ← Ekle / Güncelle formu
│   ├── TaskCard.tsx     ← Görev kartı
│   ├── Stats.tsx        ← Özet istatistikler
│   └── FilterBar.tsx    ← Arama + filtreleme
├── pages/
│   └── Home.tsx         ← Ana sayfa
├── interfaces/
│   └── Task.ts          ← TypeScript arayüzleri
├── App.tsx
└── main.tsx
```

## ⚡ Kurulum

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev


