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
    { name: "PHP", color: "#777BB4" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Python", color: "#3776AB" },
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "SQL", color: "#336791" },
  ],
  frameworks: [
    { name: "Laravel", color: "#FF2D20" },
    { name: "React.js", color: "#61DAFB" },
    { name: "Nuxt.js", color: "#00DC82" },
    { name: "Vue.js", color: "#4FC08D" },
    { name: "Next.js", color: "#000000" },
    { name: "Express.js", color: "#000000" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Bootstrap", color: "#7952B3" },
  ],
  tools: [
    { name: "MySQL", color: "#4479A1" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Git", color: "#F05032" },
    { name: "Docker", color: "#2496ED" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Postman", color: "#FF6C37" },
    { name: "VS Code", color: "#007ACC" },
    { name: "Linux", color: "#FCC624" },
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
      year: "2025",
      title: "Full-Stack Web Developer",
      company: "Timedoor Academy",
      description:
        "Mengembangkan aplikasi web menggunakan Laravel dan React.js untuk klien edukasi teknologi.",
      type: "professional",
    },
    {
      year: "2024",
      title: "Web Developer Intern",
      company: "PDAM Tirta Moedal Semarang",
      description:
        "Membangun Sistem Informasi Magang terintegrasi dengan SSO dan TTE untuk digitalisasi proses magang.",
      type: "professional",
    },
    {
      year: "2023",
      title: "IT Support & Web Developer",
      company: "SMAS Islamic Centre",
      description:
        "Mengelola infrastruktur IT sekolah dan mengembangkan website profil sekolah.",
      type: "professional",
    },
  ],
  academic: [
    {
      year: "2025",
      title: "Narasumber Workshop Web Development",
      company: "GDG Semarang",
      description:
        "Menyampaikan materi workshop tentang modern web development dengan Nuxt.js dan Laravel.",
      type: "academic",
    },
    {
      year: "2024",
      title: "Asisten Laboratorium Komputer",
      company: "Universitas PGRI Semarang",
      description:
        "Membimbing praktikum mata kuliah Pemrograman Web dan Database.",
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
