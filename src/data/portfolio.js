// ============================================
// PORTFOLIO DATA — Mochamad Dwi Febriansyah
// Edit data di sini, tampilan otomatis berubah
// ============================================

export const HERO_DATA = {
  name: "Mochamad Dwi Febriansyah",
  title: "S.Kom",
  role: "Full-Stack Developer",
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
    title: "Sistem Informasi Magang — PDAM Tirta Moedal",
    description:
      "Sistem manajemen magang terintegrasi untuk PDAM Tirta Moedal Kota Semarang dengan fitur pendaftaran online, monitoring progress, dan pelaporan digital.",
    features: [
      "Single Sign-On (SSO) untuk multi-role authentication",
      "Tanda Tangan Elektronik (TTE) pada dokumen magang",
      "Dashboard real-time monitoring progress peserta",
    ],
    techBadges: ["Laravel", "MySQL", "Bootstrap", "SSO", "TTE"],
    github: "https://github.com/dwifebriansyah/sistem-magang-pdam",
    live: "#",
    featured: true,
    color: "#2563EB",
  },
  {
    id: 2,
    title: "Web Ticketing — DevFest Semarang 2025",
    description:
      "Platform penjualan tiket untuk event DevFest Semarang 2025 yang diselenggarakan oleh Google Developer Group (GDG) Semarang.",
    features: [
      "Payment Gateway Midtrans untuk pembayaran online",
      "QR Code e-ticket dengan validasi real-time",
      "Admin dashboard untuk manajemen event & peserta",
    ],
    techBadges: ["Nuxt.js", "Laravel", "Midtrans", "PostgreSQL"],
    github: "https://github.com/dwifebriansyah/devfest-ticketing",
    live: "#",
    featured: true,
    color: "#FACC15",
  },
  {
    id: 3,
    title: "E-Learning Management System",
    description:
      "Platform pembelajaran daring dengan fitur kelas virtual, quiz interaktif, dan tracking progress belajar mahasiswa.",
    features: [
      "Video streaming & materi pembelajaran terstruktur",
      "Quiz engine dengan auto-grading",
      "Progress tracking & laporan nilai",
    ],
    techBadges: ["React.js", "Express.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    featured: false,
    color: "#22C55E",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description:
      "Sistem manajemen inventaris barang dengan fitur pencatatan stok, pelaporan, dan notifikasi stok minimum.",
    features: [
      "CRUD inventaris dengan barcode scanner",
      "Laporan stok otomatis format PDF & Excel",
      "Notifikasi real-time stok minimum",
    ],
    techBadges: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
    github: "#",
    live: "#",
    featured: false,
    color: "#EC4899",
  },
  {
    id: 5,
    title: "Personal Blog & CMS",
    description:
      "Blog pribadi dengan content management system custom, mendukung markdown editor dan SEO optimization.",
    features: [
      "Markdown editor dengan live preview",
      "SEO-friendly routing & meta tags",
      "Responsive design dengan dark mode",
    ],
    techBadges: ["Next.js", "Tailwind CSS", "PostgreSQL", "MDX"],
    github: "#",
    live: "#",
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
  email: "dwifebriansyah.dev@gmail.com",
  github: "https://github.com/dwifebriansyah",
  linkedin: "https://linkedin.com/in/dwifebriansyah",
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
