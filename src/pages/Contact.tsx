import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { cn } from "../lib/utils";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24 min-h-[calc(100vh-70px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-balance mb-6">
            Hubungi Kami
          </h1>
          <p className="text-lg text-gray-500">
            Punya pertanyaan mengenai materi, kendala teknis, atau penawaran kerjasama B2B? Tim representatif pengajar kami siap membantu Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info (Cards) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex bg-indigo-50 w-12 h-12 rounded-lg items-center justify-center text-indigo-600 mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp / Telepon</h3>
              <p className="text-gray-500 mb-4 text-sm">Respon cepat di jam kerja (Senin - Sabtu, 09.00 - 17.00 WIB)</p>
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-700 block">+62 812-3456-7890</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex bg-emerald-50 w-12 h-12 rounded-lg items-center justify-center text-emerald-600 mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Dukungan</h3>
              <p className="text-gray-500 mb-4 text-sm">Sertakan invoice atau bukti screenshoot jika mengalami error.</p>
              <a href="mailto:support@kenapasich.com" className="font-semibold text-indigo-600 hover:text-indigo-700 block">support@kenapasich.com</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex bg-rose-50 w-12 h-12 rounded-lg items-center justify-center text-rose-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Studio Rekaman</h3>
              <p className="text-gray-500 text-sm">
                Gedung Merah Putih Lt. 3, Jl. Kebon Jeruk No. 12<br/>
                Jakarta Barat, Indonesia 11530
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <Send className="text-emerald-600 h-8 w-8 ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pesan Berhasil Terkirim!</h3>
                  <p className="text-gray-500 max-w-md mx-auto">Terima kasih banyak telah menghubungi kami. Tim kami akan segera menindaklanjuti pesan Anda 1x24 jam melalui alamat email atau kontak yang Anda tinggalkan.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    Kirim pesan lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 focus:bg-white transition-colors"
                        placeholder="Cth: Budi Santoso"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Utama (Aktif)</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 focus:bg-white transition-colors"
                        placeholder="budi@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subjek</label>
                    <select
                      id="subject"
                      required
                      className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 focus:bg-white transition-colors"
                    >
                      <option value="">-- Pilih Kategori Kendala --</option>
                      <option value="pertanyaan_kursus">Pertanyaan Materi Kursus</option>
                      <option value="kendala_pembayaran">Masalah Tagihan & Pembayaran</option>
                      <option value="akun">Kesulitan Login / Akun</option>
                      <option value="kerjasama">Kerjasama & Skala Enterprise B2B</option>
                      <option value="lainnya">Lain-lain</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan Detail</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 focus:bg-white transition-colors resize-none"
                      placeholder="Jelaskan kebutuhan Anda atau cantumkan ID Invoice (jika terkait masalah tagihan)..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-indigo-600 px-4 py-4 text-center text-base font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2"
                  >
                    Kirim Pesan Sekarang <Send size={18} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
