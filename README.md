# Website Portofolio — Mochamad Dwi Febriansyah, S.Kom

Website portofolio profesional bergaya **Minimalist Neo-Brutalism** yang dibangun dengan Vite + React. 

## 🚀 Fitur Utama

- **Desain Neo-Brutalism**: Karakter kuat dengan border tebal, warna aksen flat, dan shadow brutal.
- **Performa Tinggi**: Menggunakan Vite + React sebagai Static Site Generator (SSG).
- **Zero Database**: Seluruh data (proyek, pengalaman, kontak) disimpan pada file JSON secara lokal sehingga sangat cepat.
- **Responsif**: Tampilan disesuaikan untuk Mobile, Tablet, dan Desktop.
- **Smooth Animations**: Transisi dan animasi reveal saat scroll menggunakan Intersection Observer.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Modules approach)
- **Deployment**: GitHub Pages (via GitHub Actions)
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (via Google Fonts)

## 📂 Struktur Proyek

```
d:\web-porto\
├── index.html                  # SEO & Meta tags
├── src/
│   ├── components/             # React components (Navbar, Hero, Projects, dll)
│   ├── styles/                 # Sistem desain Neo-Brutalism
│   │   ├── variables.css       # Token desain (warna, bayangan, border)
│   │   └── ...                 # File CSS spesifik per komponen
│   ├── data/
│   │   └── portfolio.js        # 📝 PUSAT DATA PORTFOLIO (edit konten di sini)
│   └── App.jsx                 # Entry utama aplikasi
└── public/
    ├── favicon.svg             # Ikon website
    └── CV-Mochamad-Dwi-Febriansyah.pdf # File CV untuk diunduh
```

## 📝 Cara Mengedit Konten Portofolio

Semua data untuk website ini terpusat pada satu file. Anda **tidak perlu mengedit kode komponen React** untuk mengubah teks.

1. Buka file `src/data/portfolio.js`.
2. Ubah data di dalam object yang tersedia:
   - `HERO_DATA`: Untuk nama, gelar, dan deskripsi utama.
   - `TECH_STACK`: Untuk daftar keahlian teknologi Anda.
   - `PROJECTS`: Untuk daftar portofolio (pastikan link GitHub / Live terisi).
   - `EXPERIENCE`: Untuk riwayat profesional dan pendidikan.
   - `ACHIEVEMENTS`: Untuk daftar prestasi dan sertifikasi.
   - `CONTACT`: Untuk tautan email, GitHub, LinkedIn, dan WhatsApp.
3. Simpan, dan tampilan website akan otomatis terupdate!

## 💻 Menjalankan Secara Lokal (Development)

1. Clone repositori ini:
   ```bash
   git clone https://github.com/febriansyahcc/website-portofolio.git
   cd website-portofolio
   ```
2. Install dependensi:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka `http://localhost:5173/` di browser Anda.

## 🌐 Cara Deploy Otomatis ke GitHub Pages

Proyek ini telah dikonfigurasi untuk **deploy otomatis** ke GitHub Pages setiap kali Anda melakukan `push` ke branch `main`.

Ikuti langkah berikut pada repositori GitHub Anda:
1. Buka halaman GitHub repositori Anda: `https://github.com/febriansyahcc/website-portofolio`
2. Masuk ke tab **Settings** > **Pages** (di menu sebelah kiri bawah).
3. Pada bagian **Build and deployment**:
   - Source: Pilih **GitHub Actions** (bukan "Deploy from a branch").
4. Selesai! GitHub Actions akan secara otomatis memproses dan menghosting website Anda setiap ada perubahan.
5. Anda bisa mengecek prosesnya di tab **Actions** pada repositori Anda.
6. Link website Anda akan tersedia di: `https://febriansyahcc.github.io/website-portofolio/`
