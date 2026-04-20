import { FileText, Play, Download } from "lucide-react";

export default function FreeResources() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
            Materi Gratis (Lead Magnet)
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Dapatkan cuplikan teknik "Anti-Ngeblank" kami dan PDF rangkuman cara berpikir sistematis yang telah membantu ratusan siswa UTBK.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
           {/* Form Section */}
           <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl ring-1 ring-gray-900/5 order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Akses Masterclass Gratis 🚀</h2>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}>
                 <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Panggilan</label>
                    <input type="text" id="name" required className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50 text-gray-900 placeholder:text-gray-400" placeholder="Budi" />
                 </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email Aktif</label>
                    <input type="email" id="email" required className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50 text-gray-900 placeholder:text-gray-400" placeholder="budi@example.com" />
                 </div>
                 <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-indigo-700">
                    Kirim PDF & Akses Video Sekarang
                 </button>
                 <p className="text-xs text-center text-gray-500">Kami menjaga privasi data Anda. Tidak ada spam.</p>
              </form>
           </div>
           
           {/* What you get */}
           <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-xl font-bold text-gray-900">Apa isi paket gratis ini?</h3>
              
              <div className="flex gap-4">
                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <Play size={24} />
                 </div>
                 <div>
                    <h4 className="font-semibold text-gray-900">Mini Class: "Mental Model Matematika"</h4>
                    <p className="text-sm text-gray-600 mt-1">Video eksklusif 30 menit yang belum pernah di-upload di YouTube. 1 framework dasar yang harus di-install di otak sebelum menyentuh soal.</p>
                 </div>
              </div>
              
              <div className="flex gap-4">
                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <FileText size={24} />
                 </div>
                 <div>
                    <h4 className="font-semibold text-gray-900">PDF Roadmap UTBK</h4>
                    <p className="text-sm text-gray-600 mt-1">Urutan bab apa saja yang harus dipelajari dari awal, dijamin tidak membuat pusing.</p>
                 </div>
              </div>
              
              <div className="flex gap-4">
                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <Download size={24} />
                 </div>
                 <div>
                    <h4 className="font-semibold text-gray-900">Kumpulan Soal Menjebak & Solusinya</h4>
                    <p className="text-sm text-gray-600 mt-1">10 soal sering muncul, beserta kerangka berpikir solusinya tanpa rumus cepat yang menyesatkan.</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
