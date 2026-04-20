import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Bagaimana metode belajar di Kenapa Sich Academy berbeda dari tempat les lain?",
    answer: "Kami tidak fokus pada hafalan rumus cepat atau 'cara sakti'. Kami menggunakan First-Principles Thinking untuk membangun pemahaman konsep yang mendasar dan visualisasi logika. Jika kamu paham 'mengapa' sebuah rumus bekerja, kamu bisa memecahkan soal variasi apa pun tanpa perlu menghafal."
  },
  {
    question: "Berapa lama saya bisa mengakses kursus yang sudah dibeli?",
    answer: "Sekali pembayaran, kamu mendapatkan akses seumur hidup (lifetime access) ke materi kelas, dokumen PDF, dan latihan soal. Semua pembaruan materi yang kami rilis di masa mendatang untuk kelas tersebut juga 100% gratis."
  },
  {
    question: "Apakah sistemnya berlangganan (subscription) bulanan?",
    answer: "Tidak. Kenapa Sich Academy menggunakan sistem pembayaran satu kali putus (One-Time Payment). Kamu tidak akan dibebani tagihan langganan tak terduga setiap bulannya."
  },
  {
    question: "Metode pembayaran apa saja yang disediakan?",
    answer: "Kamu bisa membayar menggunakan Transfer Bank Virtual Account (BCA, BNI, Mandiri, BRI), ragam E-Wallet (QRIS, GoPay, OVO, ShopeePay), dan Kartu Kredit dengan integrasi yang sepenuhnya otomatis dan aman."
  },
  {
    question: "Apakah materi ini cocok dari nol? Apa bisa untuk persiapan UTBK/OSN?",
    answer: "Sangat cocok. Khususnya kelas 'Logika Matematika dari Nol' dirancang bagi siswa yang merasa fondasi basiknya rapuh. Berangkat dari sana, struktur silabus kami diformulasikan spesifik hingga level sangat lanjut yang dipakai di SNBT dan Olimpiade Sains Nasional."
  }
];

export default function About() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <div className="bg-indigo-900 py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Cerita Kami</h1>
        <p className="mt-4 text-xl text-indigo-200 max-w-2xl mx-auto">Mengubah cara belajar matematika di Indonesia, satu pola pikir pada satu waktu.</p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="prose prose-lg prose-indigo mx-auto text-gray-600">
          <p className="font-medium text-gray-900 text-xl leading-relaxed">
            Berawal dari <a href="https://www.youtube.com/@Kenapasich212" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">channel YouTube Kenapa Sich Academy</a>, kami menyadari satu hal yang miris: <strong>Banyak siswa Indonesia menganggap dirinya bodoh matematika, padahal mereka hanya diajarkan dengan cara yang salah.</strong>
          </p>
          
          <p>
            Di sekolah, kita sering dijejali ratusan rumus. <br/>"Hafalkan rumus ini untuk soal tipe A, hapalkan rumus itu untuk tipe B." <br/>Hasilnya? Ketika soal diubah sedikit saja saat ujian UTBK atau OSN, semua <em>nge-blank</em>.
          </p>
          
          <div className="my-12 rounded-2xl bg-indigo-50 p-8 border border-indigo-100 flex items-start gap-6">
            <div className="rounded-xl bg-white p-3 text-indigo-600 shadow-sm shrink-0">
               <BookOpen size={24} />
            </div>
            <div>
               <h3 className="mt-0 font-bold text-gray-900 text-xl">Misi Kami</h3>
               <p className="mb-0 text-gray-700">Membangun ekosistem belajar matematika yang berfokus pada penalaran, bukan perhitungan buta. Kami ingin mencetak generasi problem solver.</p>
            </div>
          </div>
          
          <h2>Kenapa Metode Kami Berbeda?</h2>
          <p>
            Kami membongkar ilusi bahwa matematika itu sekadar menghitung angka. Di Kenapa Sich Academy, kita belajar konsep menggunakan:
          </p>
          <ul>
            <li><strong>Metafora & Cerita:</strong> Mengubah x dan y menjadi hal yang lebih nyata dipahami otak manusia.</li>
            <li><strong>Pattern Recognition:</strong> Belajar melihat "kerangka" di balik soal yang terlihat rumit.</li>
            <li><strong>First-Principles Thinking:</strong> Membedah rumus sampai ke akar definisinya, sehingga tidak perlu dihafalkan.</li>
          </ul>

          <p>
            Bergabunglah dengan ribuan siswa lainnya yang sudah membuktikan bahwa matematika itu sebenarnya menyenangkan jika dipahami dengan benar.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-10">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={isOpen ? "rounded-2xl border-2 border-indigo-500 bg-white shadow-md overflow-hidden transition-all duration-200" : "rounded-2xl border border-gray-200 bg-white hover:border-indigo-300 overflow-hidden transition-all duration-200"}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <span className="shrink-0 rounded-full p-1 bg-gray-50 text-gray-400 group-hover:text-indigo-600">
                      {isOpen ? <ChevronUp size={20} className="text-indigo-600" /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
