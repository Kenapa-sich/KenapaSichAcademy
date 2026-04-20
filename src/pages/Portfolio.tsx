import { Youtube, Instagram, Mail, Award, MonitorPlay, Users, Sparkles, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="bg-white pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 pt-24 pb-32">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-gray-900 to-gray-900"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl mb-6">
            <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400" 
              alt="Hary Kusnadi" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Hary Kusnadi</h1>
          <p className="text-xl md:text-2xl font-medium text-indigo-300 mb-6">
            Edu-Creator & Founder Kenapa Sich Academy
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.youtube.com/@Kenapasich212" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-red-500 hover:text-white">
              <Youtube size={18} /> YouTube
            </a>
            <a href="https://www.instagram.com/harykusnadi22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-pink-600 hover:text-white">
              <Instagram size={18} /> Instagram
            </a>
            <a href="mailto:contact@kenapasich.com" className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-indigo-500 hover:text-white">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-gray-100 divide-x divide-gray-100">
            <div className="px-4">
              <div className="flex justify-center text-red-500 mb-3"><MonitorPlay size={28} /></div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15K+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Subscribers</div>
            </div>
            <div className="px-4">
              <div className="flex justify-center text-indigo-500 mb-3"><Award size={28} /></div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2.5M+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Total Views</div>
            </div>
            <div className="px-4">
              <div className="flex justify-center text-emerald-500 mb-3"><Users size={28} /></div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Siswa Aktif</div>
            </div>
            <div className="px-4">
              <div className="flex justify-center text-amber-500 mb-3"><Sparkles size={28} /></div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Video Edukasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Philosophy */}
      <section className="py-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mengapa Saya Membangun Kenapa Sich?</h2>
            <div className="prose prose-indigo text-gray-600">
              <p>
                Semuanya berawal dari satu pertanyaan sederhana: <em>Kenapa sih belajar itu membosankan?</em>
              </p>
              <p>
                Saya menyadari bahwa selama ini kita disuguhi cara belajar yang salah. Matematika dan sains diajarkan layaknya kamus yang harus dihafal, bukan sebagai alat untuk menyelesaikan masalah dalam kehidupan nyata.
              </p>
              <p>
                Melalui channel YouTube <strong>Kenapa Sich?</strong> saya mulai mengubah konsep-konsep abstrak menjadi animasi visual dan perumpamaan sehari-hari. Mulai dari psikologi manusia, sains populer, hingga trik memecahkan rekor nilai UTBK tanpa perlu menghafal ratusan rumus.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex gap-4 items-start">
              <div className="bg-white p-3 rounded-xl text-indigo-600 shadow-sm shrink-0">
                <BrainCircuit size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Scientific Storytelling</h3>
                <p className="text-sm text-gray-600">Terlatih dalam meramu penjelasan visual untuk menyederhanakan cara kerja dunia yang rumit.</p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex gap-4 items-start">
              <div className="bg-white p-3 rounded-xl text-indigo-600 shadow-sm shrink-0">
                <Youtube size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Content Production</h3>
                <p className="text-sm text-gray-600">Memproduksi script, voice-over, dan animasi edukasi yang dinikmati jutaan pelajar seluruh Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Work */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Karya Terpopuler</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Beberapa cuplikan video dokumenter dan edukasi terbaik yang berhasil mengubah paradigma berpikir puluhan ribu siswa secara total.</p>
          
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 mb-8 max-w-4xl mx-auto border-4 border-white">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=PUbK8PmsGZ7c7oTtb59BvVwQ&index=1"
              title="Kenapa Sich Channel Portfolio" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-opacity-90 hover:-translate-y-1 shadow-lg"
          >
            Lihat Platform Kelas Saya <Sparkles size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
