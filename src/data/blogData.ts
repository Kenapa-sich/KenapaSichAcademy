export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraphs for simplicity
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "berhenti-menghafal-rumus",
    title: "Mengapa Kamu Harus Berhenti Menghafal Rumus Mulai Sekarang",
    excerpt: "Hafalan rumus hanya akan bertahan sampai ujian selesai. Pelajari bagaimana 'First Principles Thinking' bisa menyelamatkan nilai matematikamu.",
    content: [
      "Pernahkah kamu merasa sudah hafal mati sebuah rumus, tapi saat ujian keluar soal yang sedikit diplesetkan, kamu tiba-tiba blank? Ini adalah masalah klasik sistem pendidikan kita.",
      "Di sekolah, kita sering diajarkan untuk menghafal: 'Kalau soalnya seperti ini, pakai rumus A. Kalau seperti itu, pakai rumus B'. Padahal, matematika sejatinya adalah bahasa logika, bukan ensiklopedia rumus.",
      "First Principles Thinking atau berpikir dari prinsip dasar adalah metode yang sering digunakan oleh Elon Musk. Alih-alih menerima sesuatu begitu saja, kita membedahnya sampai ke bagian paling dasar.",
      "Dalam matematika, itu berarti memahami BAGAIMANA dan MENGAPA sebuah rumus bisa terbentuk. Misalnya, rumus luas segitiga (1/2 x alas x tinggi) bukanlah turun dari langit. Ia berasal dari luas persegi panjang yang dibagi dua menyilang.",
      "Mulai sekarang, setiap kali kamu bertemu rumus baru, tanyakan: 'Darimana asalnya?'. Dengan begitu, saat kamu lupa rumus di ujian, logikamu bisa menurunkannya kembali."
    ],
    author: "Hary Kusnadi",
    date: "12 Okt 2025",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    category: "Mindset Belajar"
  },
  {
    id: "menaklukkan-soal-utbk",
    title: "Rahasia Menaklukkan Soal Penalaran Matematika UTBK",
    excerpt: "Soal UTBK SNBT tak lagi butuh hafalan kalkulus tingkat dewa. Mereka mengetes seberapa baik analisismu terhadap masalah nyata. Ini strateginya.",
    content: [
      "Perubahan format seleksi PTN baru-baru ini telah mengubah peta permainan. Tes Kemampuan Akademik (TKA) yang sarat rumus dihapus, digantikan oleh Penalaran Matematika.",
      "Artinya, kamu tidak akan ditanya 'Berapa integral dari fungsi x?'. Kamu akan disuguhi grafik subsidi bahan bakar, atau tabel kasus pandemi, lalu diminta menganalisis estimasi dampaknya.",
      "Kunci pertama adalah: Jangan langsung hitung! Baca pertanyaan paling akhir terlebih dahulu. Banyak jebakan 'data sampah' di narasi soal yang sebenarnya tidak perlu dihitung.",
      "Kedua, biasakan melakukan estimasi. Jawaban pilihan ganda seringkali memiliki gap yang jauh. Daripada menghitung 18.75% dari 2,130, lebih baik bulatkan menjadi 20% dari 2000 untuk mencari pendekatan terdekat.",
      "Latihlah literasi angkamu. Matematika kini adalah tentang kemampuan bertahan hidup memroses data, bukan sekadar kecepatan menghitung robotik."
    ],
    author: "Hary Kusnadi",
    date: "28 Sep 2025",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    category: "Persiapan Ujian"
  },
  {
    id: "visualisasi-aljabar",
    title: "Aljabar Bukanlah Kumpulan Huruf Mati, Mari Visualisasikan",
    excerpt: "Memahami x dan y bukan sebagai teks panjang yang menakutkan, melainkan sebagai objek fisik berdimensi di dunia nyata.",
    content: [
      "Banyak siswa mulai membenci matematika sejak huruf abjad dicampur dengan angka. Tiba-tiba saja, matematika tidak lagi tentang 'berapakah buah apel Budi?', melainkan '2x + 3y = 12'.",
      "Masalahnya, otak kita berevolusi di sabana Afrika untuk mengenali ruang, bukan simbol dua dimensi di atas kertas. Kita harus membajak fungsi otak ini untuk belajar aljabar.",
      "Bayangkan variabel x, y, dan z bukan sebagai huruf. Bayangkan x adalah sebuah garis (1 dimensi). Bayangkan x kuadrat adalah sebuah persegi lantai (2 dimensi). Bayangkan x pangkat b adalah sebuah kotak kubus (3 dimensi).",
      "Ketika kamu diminta menjumlahkan x kuadrat dan x bujursangkar, mungkinkah kamu menjumlahkan luas lantai dengan panjang penggaris? Tentu tidak! Itulah mengapa x^2 + x tidak bisa digabungkan menjadi 2x^2.",
      "Pendekatan visual analogi spasial ini akan membuat materi sekasar polinomial menjadi seperti bermain bongkar-pasang balok lego."
    ],
    author: "Tim Akademik",
    date: "15 Sep 2025",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    category: "Konsep Dasar"
  }
];
