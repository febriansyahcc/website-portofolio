// ============================================
// PORTFOLIO DATA — Mochamad Dwi Febriansyah
// Edit data di sini, tampilan otomatis berubah
// ============================================

export const HERO_DATA = {
  name: "Mochamad Dwi Febriansyah",
  title: "S.Kom",
  role: "Full-Stack Developer",
  photo: "/profile.jpg",
  summary:
    "Fresh Graduate Informatika dengan pengalaman membangun aplikasi web skala enterprise. Terampil dalam Laravel, React, dan Nuxt.js dengan rekam jejak nyata di proyek pemerintah, event teknologi nasional, dan komunitas developer.",
  cta: {
    primary: { text: "Lihat Proyek Saya", target: "#projects" },
    secondary: { text: "Download CV", target: "/CV-Mochamad-Dwi-Febriansyah.pdf" },
  },
};

export const TECH_STACK = {
  languages: [
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "SQL", color: "#336791" },
    { name: "PHP", color: "#777BB4" },
    { name: "Node.js", color: "#339933" },
  ],
  frameworks: [
    { name: "Laravel", color: "#FF2D20" },
    { name: "Nuxt.js", color: "#00DC82" },
    { name: "React.js", color: "#61DAFB" },
    { name: "Express.js", color: "#000000" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "jQuery", color: "#0769AD" },
  ],
  tools: [
    { name: "Git", color: "#F05032" },
    { name: "MySQL", color: "#4479A1" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "Google Workspace", color: "#4285F4" },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Sistem Manajemen Magang PDAM Tirta Moedal Kota Semarang",
    description:
      "Merancang dan mengembangkan sistem manajemen magang dan penelitian terintegrasi untuk memfasilitasi proses pendaftaran hingga evaluasi peserta.",
    features: [
      "Mengotomatisasi proses administratif (verifikasi dokumen, penugasan mentor, sertifikat)",
      "Implementasi Single Sign-On (SSO) untuk autentikasi terpusat & aman",
      "Implementasi Tanda Tangan Elektronik (TTE) BSrE – BSSN untuk dokumen resmi",
      "Monitoring dengan presensi face recognition & lokasi",
    ],
    techBadges: ["Laravel", "Nuxt.js", "MySQL"],
    github: "https://github.com/Mochamad-Dwi-Febriansyah/internship-new-banget.git",
    live: "#",
    featured: true,
    color: "#2563EB",
  },
  {
    id: 2,
    title: "Web Ticketing DevFest 2025 Semarang",
    description:
      "Sistem ticketing berbasis web untuk event DevFest Semarang 2025 untuk registrasi, pembelian tiket, dan manajemen peserta secara online.",
    features: [
      "Integrasi Midtrans Payment Gateway untuk transaksi real-time",
      "Google Login & pengiriman email notifikasi (SMTP)",
      "Sistem terpusat yang scalable dan aman",
    ],
    techBadges: ["Firebase", "React.js", "SMTP"],
    github: "https://github.com/rafiadipramana/devfest-semarang-2025.git",
    live: "#",
    featured: true,
    color: "#FACC15",
  },
  {
    id: 3,
    title: "Learning Management System v2",
    description:
      "Membangun ulang LMS dengan pendekatan modern web stack untuk meningkatkan skalabilitas dan performa sistem menggunakan REST API dan SPA architecture.",
    features: [
      "Pendekatan modern web stack dengan REST API",
      "Arsitektur Single Page Application (SPA)",
    ],
    techBadges: ["Express.js", "React.js", "MySQL"],
    github: "https://github.com/Mochamad-Dwi-Febriansyah/learning-management-system-express-react.git",
    live: "#",
    featured: false,
    color: "#22C55E",
  },
  {
    id: 4,
    title: "Learning Management System v1",
    description:
      "Mengembangkan sistem manajemen pembelajaran berbasis web untuk mengelola siswa, guru, dan materi dengan arsitektur CRUD dan autentikasi berbasis role.",
    features: [
      "Arsitektur CRUD dan autentikasi berbasis role",
      "Otomatisasi proses akademik",
      "Meningkatkan efisiensi pengelolaan pembelajaran online",
    ],
    techBadges: ["Laravel", "MySQL", "jQuery"],
    github: "https://github.com/Mochamad-Dwi-Febriansyah/elearn-laravel",
    live: "#",
    featured: false,
    color: "#EC4899",
  },
  {
    id: 5,
    title: "Portal Pondok Pesantren Addainuriyah Dua",
    description:
      "Website landing page dan sistem pendaftaran online sebagai pusat informasi dan penerimaan calon santri.",
    features: [
      "Sistem pendaftaran online terintegrasi",
      "Manajemen data calon santri berbasis web",
      "Meningkatkan efisiensi penyampaian informasi",
    ],
    techBadges: ["Laravel", "MySQL"],
    github: "#",
    live: "https://www.addainuriyahdua.com/",
    featured: false,
    color: "#8B5CF6",
  },
];

export const EXPERIENCE = {
  professional: [
    {
      year: "Feb 2026 - Sekarang",
      title: "Mitra Teacher",
      company: "PT. Timedoor Academy",
      description:
        "Mengajar pemrograman dengan pendekatan adaptive class yang menyesuaikan materi dan metode pembelajaran berdasarkan kemampuan masing-masing siswa. Membimbing siswa dalam proyek sehingga meningkatkan pemahaman, keterlibatan, dan kemampuan problem solving secara optimal.",
      type: "professional",
    },
    {
      year: "Jun 2025 - Sekarang",
      title: "Tenaga Kependidikan & Guru Informatika",
      company: "SMAS Islamic Centre Demak",
      description:
        "Merancang, menyusun materi, dan menyampaikan pembelajaran Informatika yang interaktif dan aplikatif untuk siswa kelas X, XI, dan XII guna meningkatkan literasi digital dan kemampuan computational thinking mereka. Mengelola administrasi persekolahan serta mendukung operasional tata usaha sekolah secara efisien guna menciptakan lingkungan belajar-mengajar yang kondusif dan teratur.",
      type: "professional",
    },
    {
      year: "Jan 2025 - Apr 2025",
      title: "Web Developer Intern (Magang)",
      company: "PDAM Tirta Moedal Kota Semarang",
      description:
        "Mengembangkan sistem manajemen magang berbasis web untuk meningkatkan efisiensi pengelolaan data. Berkolaborasi dalam pengembangan fitur dan debugging untuk meningkatkan performa sistem.",
      type: "professional",
    },
  ],
  academic: [
    {
      year: "2023 - 2026",
      title: "Asisten Laboratorium Komputer",
      company: "Universitas PGRI Semarang",
      description:
        "Meningkatkan kesiapan operasional laboratorium komputer dengan memastikan perawatan dan perbaikan lebih dari 50+ unit perangkat melalui pengecekan rutin dan troubleshooting hardware/software. Mendukung proses akreditasi Program Studi Informatika dengan menyiapkan dan memverifikasi dokumen serta infrastruktur laboratorium. Membantu pelaksanaan praktikum Arsitektur & Organisasi Komputer dan Jaringan Komputer untuk kelas mahasiswa dengan pendampingan teknis dan asistensi langsung.",
      type: "academic",
    },
    {
      year: "2025",
      title: "Narasumber Workshop Web Development",
      company: "GDG Semarang",
      description:
        "Menyampaikan materi workshop tentang modern web development dengan Nuxt.js dan Laravel.",
      type: "academic",
    },
    {
      year: "2023",
      title: "Volunteer & Organizer",
      company: "Google Developer Group (GDG) Semarang",
      description:
        "Berkontribusi aktif dalam penyelenggaraan event teknologi dan community meetup.",
      type: "academic",
    },
  ],
};

export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Juara 1 — Lomba Web Development",
    description: "Kompetisi tingkat regional, 2024",
    level: "gold",
  },
  {
    icon: "🥈",
    title: "Juara 2 — Lomba Web Design",
    description: "Kompetisi tingkat provinsi, 2024",
    level: "silver",
  },
  {
    icon: "🏆",
    title: "LKS Web Technology — Tingkat Kota",
    description: "Lomba Kompetensi Siswa bidang Web Technology, 2023",
    level: "gold",
  },
  {
    icon: "🎓",
    title: "S.Kom — Universitas PGRI Semarang",
    description: "Sarjana Komputer, Program Studi Informatika, 2025",
    level: "education",
  },
];

export const CONTACT = {
  email: "dwifebriansyah130205@gmail.com",
  github: "https://github.com/febriansyahcc",
  linkedin: "https://www.linkedin.com/in/mochamad-dwi-febriansyah-086b6b312/",
  whatsapp: "https://wa.me/6281226047345",
};

export const NAV_LINKS = [
  { label: "Home", target: "#hero" },
  { label: "Tech Stack", target: "#techstack" },
  { label: "Projects", target: "#projects" },
  { label: "Experience", target: "#experience" },
  { label: "Achievements", target: "#achievements" },
  { label: "Contact", target: "#contact" },
];
