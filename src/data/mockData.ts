export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  type: "video" | "exercise" | "summary";
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  level: "Dasar" | "Menengah" | "Lanjut" | "Semua Level";
  price: number;
  originalPrice?: number;
  thumbnail: string;
  modules: Module[];
  benefits: string[];
}

export const mockCourses: Course[] = [
  {
    id: "logika-dasar",
    title: "Logika Matematika dari Nol",
    shortDescription: "Pahami dasar cara berpikir sistematis tanpa menghafal rumus. Cocok untuk perbaikan fondasi.",
    description: "Kursus ini dirancang khusus untuk mengubah cara kamu memandang matematika. Alih-alih menghafal seribu rumus, kamu akan belajar 1 pola pikir dasar yang bisa menyelesaikan banyak masalah. Sangat direkomendasikan jika kamu sering merasa 'nge-blank' saat melihat variasi soal baru.",
    level: "Dasar",
    price: 149000,
    originalPrice: 299000,
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600&h=400",
    benefits: [
      "Bukan sekadar materi, tapi cara berpikir",
      "Strategi pemecahan soal tak terduga",
      "Membangun fundamental untuk UTBK/CPNS",
      "Akses seumur hidup & update materi"
    ],
    modules: [
      {
        id: "m1",
        title: "Fondasi Logika & Mindset",
        lessons: [
          { id: "l1_1", title: "Berhenti Menghafal Rumus", duration: "12:00", type: "video" },
          { id: "l1_2", title: "Mengenal Pola (Pattern Recognition)", duration: "15:30", type: "video" },
          { id: "l1_3", title: "Mengapa Kita Sering Nge-blank?", duration: "08:45", type: "video" },
          { id: "l1_4", title: "Membangun Intuisi Angka", duration: "10:20", type: "video" },
          { id: "l1_5", title: "Ringkasan: Mindset Baru", duration: "Min. 5 mins", type: "summary" }
        ]
      },
      {
        id: "m2",
        title: "Operasi Dasar & Metafora",
        lessons: [
          { id: "l2_1", title: "Visualisasi Aljabar Tiga Dimensi", duration: "20:00", type: "video" },
          { id: "l2_2", title: "Variabel Bukanlah Huruf Mati", duration: "14:15", type: "video" },
          { id: "l2_3", title: "Seni Memindahkan Ruas Kiri Kanan", duration: "18:00", type: "video" },
          { id: "l2_4", title: "Latihan Konsep Aljabar Visual", duration: "15 Soal", type: "exercise" }
        ]
      },
      {
        id: "m3",
        title: "Silogisme & Penarikan Kesimpulan",
        lessons: [
          { id: "l3_1", title: "Dasar Implikasi & Biimplikasi", duration: "16:40", type: "video" },
          { id: "l3_2", title: "Modus Ponens & Modus Tollens Tanpa Rumus", duration: "22:10", type: "video" },
          { id: "l3_3", title: "Awas Kejebak: Fallacy (Kesesatan Berpikir)", duration: "19:05", type: "video" },
          { id: "l3_4", title: "Latihan Soal Kesimpulan", duration: "20 Soal", type: "exercise" }
        ]
      },
      {
        id: "m4",
        title: "Himpunan & Diagram Venn Cepat",
        lessons: [
          { id: "l4_1", title: "Logika Irisan & Gabungan", duration: "15:00", type: "video" },
          { id: "l4_2", title: "Menyelesaikan Soal Cerita Himpunan", duration: "25:30", type: "video" },
          { id: "l4_3", title: "Post-Test: Fundamental Logika", duration: "30 Soal", type: "exercise" }
        ]
      }
    ]
  },
  {
    id: "utbk-master",
    title: "Master UTBK SNBT - Penalaran Matematika",
    shortDescription: "Tembus PTN Impian dengan skor Pengetahuan Kuantitatif & Penalaran Matematika maksimal.",
    description: "Persiapkan dirimu untuk ujian masuk PTN tanpa stres. Kami membongkar rahasia soal-soal UTBK yang sering menjebak peserta yang hanya mengandalkan hafalan. Diajarkan cara eliminasi jawaban dan hitung estimasi.",
    level: "Menengah",
    price: 349000,
    originalPrice: 599000,
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=400",
    benefits: [
      "Bedah tuntas pola soal UTBK asli tahun-tahun lalu",
      "Metode hitung cepat & eliminasi jawaban salah",
      "Bank Soal Tryout Eksklusif sistem IRT",
      "Grup diskusi intensif hingga hari-H"
    ],
    modules: [
      {
        id: "u1",
        title: "Penalaran Umum (Kuantitatif)",
        lessons: [
          { id: "u1_1", title: "Pola Bilangan & Deret Ekstrem", duration: "18:20", type: "video" },
          { id: "u1_2", title: "Kecukupan Data (Pernyataan 1 & 2)", duration: "28:15", type: "video" },
          { id: "u1_3", title: "Hacks: Menjawab Soal Kecukupan Data Tanpa Menghitung", duration: "15:40", type: "video" },
          { id: "u1_4", title: "Kuis: Kecukupan Data", duration: "20 Soal", type: "exercise" }
        ]
      },
      {
        id: "u2",
        title: "Penalaran Matematika (Soal Cerita)",
        lessons: [
          { id: "u2_1", title: "Menerjemahkan Cerita ke Model Matematika", duration: "25:00", type: "video" },
          { id: "u2_2", title: "Bunga Majemuk & Pertumbuhan/Peluruhan", duration: "30:20", type: "video" },
          { id: "u2_3", title: "Optimalisasi (Nilai Maksimum & Minimum)", duration: "22:10", type: "video" },
          { id: "u2_4", title: "Latihan Intensif Soal Cerita PM", duration: "25 Soal", type: "exercise" }
        ]
      },
      {
        id: "u3",
        title: "Statistika & Peluang (Sering Keluar!)",
        lessons: [
          { id: "u3_1", title: "Membaca Grafik, Tabel, & Kurva", duration: "19:00", type: "video" },
          { id: "u3_2", title: "Statistika Deskriptif (Rataan Gabungan & Simpangan)", duration: "24:30", type: "video" },
          { id: "u3_3", title: "Aturan Pencacahan & Peluang Diskrit", duration: "35:00", type: "video" },
          { id: "u3_4", title: "PDF Rangkuman Rumus Statistika", duration: "Min. 10 mins", type: "summary" }
        ]
      },
      {
        id: "u4",
        title: "Tryout Final & Tactical Review",
        lessons: [
          { id: "u4_1", title: "Tryout Simulasi SNBT (Blok PM & PK)", duration: "45 Soal", type: "exercise" },
          { id: "u4_2", title: "Pembahasan Video Soal Sulit (HOTS)", duration: "45:00", type: "video" },
          { id: "u4_3", title: "Manajemen Waktu Saat Ujian", duration: "15:00", type: "video" }
        ]
      }
    ]
  },
  {
    id: "osn-prep",
    title: "Olympian - Persiapan OSN Matematika SMA",
    shortDescription: "Persiapan intensif olimpiade tingkat Kabupaten/Kota hingga Nasional berbasis teori mendalam.",
    description: "Tingkatkan kemampuan berpikir kritis dan kreatifmu menuju medali OSN. Materi mendalam disusun menggunakan referensi standar kurikulum IMO. Sangat bertumpu pada logika pembuktian, bukan hafalan rumus sekolah.",
    level: "Lanjut",
    price: 799000,
    originalPrice: 1200000,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600&h=400",
    benefits: [
      "Pembahasan set soal OSK, OSP, OSN 5 tahun terakhir",
      "Teknik penulisan pembuktian yang disukai juri",
      "Strategi panen poin parsial essay",
      "Modul komprehensif 4 pilar OSN"
    ],
    modules: [
      {
        id: "o1",
        title: "Teori Bilangan (Number Theory)",
        lessons: [
          { id: "o1_1", title: "Sifat Keterbagian & Algoritma Pembagian", duration: "30:00", type: "video" },
          { id: "o1_2", title: "Aritmatika Modular & Kongruensi", duration: "42:15", type: "video" },
          { id: "o1_3", title: "Teorema Fermat, Euler & Wilson", duration: "38:40", type: "video" },
          { id: "o1_4", title: "Persamaan Diophantine Linear & Non-Linear", duration: "45:00", type: "video" },
          { id: "o1_5", title: "Problem Set: Teori Bilangan", duration: "10 Essay", type: "exercise" }
        ]
      },
      {
        id: "o2",
        title: "Kombinatorika (Combinatorics)",
        lessons: [
          { id: "o2_1", title: "Prinsip Inklusi-Eksklusi Lanjut", duration: "25:30", type: "video" },
          { id: "o2_2", title: "Pigeonhole Principle (Prinsip Sarang Burung Merpati)", duration: "32:00", type: "video" },
          { id: "o2_3", title: "Relasi Rekurensi & Deret Berpembangkit", duration: "50:10", type: "video" },
          { id: "o2_4", title: "Kombinatorika Geometri", duration: "28:45", type: "video" },
          { id: "o2_5", title: "Problem Set: Kombinatorika", duration: "10 Essay", type: "exercise" }
        ]
      },
      {
        id: "o3",
        title: "Aljabar Lanjut (Advanced Algebra)",
        lessons: [
          { id: "o3_1", title: "Polinomial & Teorema Vieta", duration: "35:20", type: "video" },
          { id: "o3_2", title: "Ketaksamaan Klasik (AM-GM, Cauchy-Schwarz)", duration: "48:00", type: "video" },
          { id: "o3_3", title: "Persamaan Fungsional (Fungsi-Fungsi Aneh)", duration: "40:15", type: "video" },
          { id: "o3_4", title: "Problem Set: Aljabar", duration: "10 Essay", type: "exercise" }
        ]
      },
      {
        id: "o4",
        title: "Geometri Olimpiade (Geometry)",
        lessons: [
          { id: "o4_1", title: "Sifat Segitiga Lanjut & Kesebangunan Khusus", duration: "34:00", type: "video" },
          { id: "o4_2", title: "Teorema Ceva & Menelaus", duration: "25:30", type: "video" },
          { id: "o4_3", title: "Kuadrilateral Siklik & Sifat Lingkaran", duration: "41:10", type: "video" },
          { id: "o4_4", title: "Transformasi Geometri (Rotasi & Homoteti)", duration: "30:25", type: "video" },
          { id: "o4_5", title: "Problem Set: Geometri", duration: "10 Essay", type: "exercise" }
        ]
      }
    ]
  },
  {
    id: "cpns-tiu",
    title: "Master TIU CPNS / Kedinasan",
    shortDescription: "Trik menaklukkan Tes Inteligensi Umum CPNS/Sekolah Kedinasan dalam hitungan detik.",
    description: "Modul ini secara spesifik membedah pola Tes Inteligensi Umum (TIU) dan Tes Potensi Akademik (TPA). Kecepatan adalah kunci di tes ini, kami akan membedah 'mental math' dan tebakan cerdas.",
    level: "Menengah",
    price: 199000,
    originalPrice: 350000,
    thumbnail: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=600&h=400",
    benefits: [
      "Trik hitung cepat pecahan & persentase",
      "Template logika silogisme anti-salah",
      "Strategi skip soal buang waktu",
      "Bonus 5 Tryout Sistem CAT SKD"
    ],
    modules: [
      {
        id: "c1",
        title: "Kemampuan Numerik",
        lessons: [
          { id: "c1_1", title: "Deret Angka: Pola Terjebak & Fibonacci Variasi", duration: "22:00", type: "video" },
          { id: "c1_2", title: "Aritmatika Sosial Cepat", duration: "25:10", type: "video" },
          { id: "c1_3", title: "Perbandingan Senilai & Berbalik Nilai", duration: "19:40", type: "video" },
          { id: "c1_4", title: "Latihan Numerik", duration: "35 Soal", type: "exercise" }
        ]
      },
      {
        id: "c2",
        title: "Kemampuan Figural",
        lessons: [
          { id: "c2_1", title: "Analogi Gambar & Rotasi Spasial", duration: "15:00", type: "video" },
          { id: "c2_2", title: "Ketidaksamaan Gambar (Mencari si Beda)", duration: "12:30", type: "video" },
          { id: "c2_3", title: "Serial Gambar 9 Kotak (Matrix)", duration: "18:00", type: "video" },
          { id: "c2_4", title: "Latihan Kecepatan Figural", duration: "20 Soal", type: "exercise" }
        ]
      }
    ]
  },
  {
    id: "kalkulus-dasar",
    title: "Kalkulus 101 - Bertahan Hidup di Semester 1",
    shortDescription: "Panduan kalkulus dasar untuk mahasiswa tingkat pertama tanpa bahasa buku yang kaku.",
    description: "Kalkulus sering jadi momok bagi maba. Kursus ini menjelaskan pengertian sebenarnya dari limit, turunan, dan integral secara visual sehingga kamu tidak sekadar menghafal aturan Rantai atau Parsial.",
    level: "Lanjut",
    price: 249000,
    originalPrice: 400000,
    thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=600&h=400",
    benefits: [
      "Intuisi visual kalkulus (animasi grafik)",
      "Pembahasan soal UAS Univ ternama",
      "Metode anti-lupa aturan turunan/integral",
      "Ringkasan cheat sheet PDF"
    ],
    modules: [
      {
        id: "k1",
        title: "Batu Pijakan: Limit & Kontinuitas",
        lessons: [
          { id: "k1_1", title: "Sebenarnya, Apa itu Limit? (Visual Approach)", duration: "20:00", type: "video" },
          { id: "k1_2", title: "Limit Menuju Tak Hingga & Aturan L'Hopital", duration: "24:15", type: "video" },
          { id: "k1_3", title: "Kapan Suatu Fungsi Disebut Kontinu?", duration: "15:30", type: "video" }
        ]
      },
      {
        id: "k2",
        title: "Mesin Kemiringan: Diferensial (Turunan)",
        lessons: [
          { id: "k2_1", title: "Konsep Garis Singgung & Laju Perubahan Sesaat", duration: "22:10", type: "video" },
          { id: "k2_2", title: "Aturan Rantai (Chain Rule) Paling Logis", duration: "18:45", type: "video" },
          { id: "k2_3", title: "Turunan Implisit & Fungsi Eksponensial", duration: "25:00", type: "video" },
          { id: "k2_4", title: "Latihan Soal Ujian Diferensial", duration: "20 Soal", type: "exercise" }
        ]
      },
      {
        id: "k3",
        title: "Mesin Luasan: Integral",
        lessons: [
          { id: "k3_1", title: "Paradoks Zeno & Definisi Integral Riemann", duration: "26:00", type: "video" },
          { id: "k3_2", title: "Teorema Fundamental Kalkulus", duration: "19:20", type: "video" },
          { id: "k3_3", title: "Teknik Integrasi Substitusi & Parsial", duration: "35:10", type: "video" },
          { id: "k3_4", title: "Luas Area & Volume Benda Putar", duration: "10 Soal", type: "exercise" }
        ]
      }
    ]
  }
];

export const mockTestimonials = [
  { id: 1, name: "Budi P.", role: "Siswa SMA kelas 12", text: "Selama ini saya kira saya bodoh matematika. Ternyata saya cuma salah cara belajarnya. UTBK Expert sangat mengubah cara pandang saya, simulasi logika himpunan dan peluannya luar biasa!" },
  { id: 2, name: "Siti Rahma", role: "Maba ITS Lolos SNBT", text: "Video Master UTBK sangat membuka wawasan. Soal Penalaran Matematika jadi terasa seperti main teka-teki logika saja. Bisa jawab tanpa coret-coret panjang!" },
  { id: 3, name: "Deni Surya", role: "Peserta CPNS", text: "Kursus TIU nya daging semua. Triks tebakan silogisme sangat bermanfaat menghemat waktu tes SKD kemarin." },
  { id: 4, name: "Farah Diba", role: "Peraih Perak OSN Tingkat Provinsi", text: "Baru di sini saya belajar Teori Bilangan OSN tanpa merasa 'ditinju' oleh bahasa dewa buku teks. Pembahasannya runut dan berdasar first-principles."}
];
