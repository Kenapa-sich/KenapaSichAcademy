import { Link } from "react-router-dom";
import { ArrowRight, Brain, Lightbulb, Target } from "lucide-react";
import CourseCard from "../components/CourseCard";
import { mockCourses, mockTestimonials } from "../data/mockData";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Main Promo Banner */}
      <section className="relative w-full overflow-hidden bg-indigo-900 border-b border-indigo-950">
        <div className="absolute inset-0 top-0 left-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="Students studying collaboratively" 
            className="w-full h-full object-cover origin-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-900/80 to-transparent"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold tracking-wider uppercase text-[10px] sm:text-xs rounded border border-emerald-500/30">
                Pendaftaran Telah Dibuka
              </span>
              <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold tracking-wider uppercase text-[10px] sm:text-xs rounded border border-indigo-500/30">
                Diskon 50%
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Bootcamp Master UTBK & SNBT
            </h2>
            <p className="text-indigo-200 text-base sm:text-lg md:max-w-2xl leading-relaxed">
              Persiapkan dirimu menghadapi tes seleksi masuk PTN dengan metode <span className="font-semibold text-white">#LogikaTanpaHafalan</span> bersama tutor terbaik Kenapa Sich Academy. Jangan sampai kehabisan kuota!
            </p>
          </div>
          <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
            <Link 
              to="/courses/utbk-master" 
              className="inline-flex justify-center items-center rounded-xl bg-emerald-500 px-8 py-4 sm:py-5 text-sm sm:text-base font-extrabold text-white transition-transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
            >
              Ambil Promo Sekarang <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24 border-b border-gray-200">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.1]">
              Belajar Matematika <br className="hidden sm:block"/>
              <span className="text-indigo-600">Tanpa Hafalan.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
              Pahami logika, bukan sekadar rumus. Ubah cara berpikirmu untuk menyelesaikan masalah matematika serumit apa pun dengan cara yang sederhana.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/free"
                className="rounded-lg bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-opacity-90 shadow-sm"
              >
                Mulai Belajar Gratis
              </Link>
              <Link
                to="/courses"
                className="rounded-lg border-2 border-gray-200 px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100 shadow-sm"
              >
                Lihat Katalog
              </Link>
            </div>
            
            <div className="mt-16 border-t border-gray-200 pt-6 w-full">
               <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Telah dipercaya oleh 15,000+ member YouTube</div>
               <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-400 grayscale opacity-70">
                 <span>UTBK 2024</span>
                 <span>OSN MATEMATIKA</span>
                 <span>KAMPUS MERDEKA</span>
               </div>
            </div>
          </div>

          <div className="w-full">
            {/* Dashboard Preview Recreated from Sleek Design */}
            <div className="rounded-3xl border border-gray-200 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
               <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <div className="font-bold text-lg text-gray-900">Dashboard Belajar Saya</div>
                  <div className="text-sm text-gray-500">Progress Total: <strong className="text-gray-900">72%</strong></div>
               </div>
               <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                     <span className="inline-block rounded px-2 py-1 text-[10px] font-bold uppercase text-indigo-600 bg-indigo-50 mb-3 tracking-wider">Fundamental</span>
                     <h3 className="font-semibold text-base text-gray-900 leading-tight mb-2">Logika Matematika & Himpunan</h3>
                     <p className="text-xs text-gray-500">12 dari 18 Modul Selesai</p>
                     <div className="mt-3 h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[66%] rounded-full"></div>
                     </div>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                     <span className="inline-block rounded px-2 py-1 text-[10px] font-bold uppercase text-indigo-600 bg-indigo-50 mb-3 tracking-wider">UTBK Expert</span>
                     <h3 className="font-semibold text-base text-gray-900 leading-tight mb-2">Aljabar & Kalkulus Cepat</h3>
                     <p className="text-xs text-gray-500">5 dari 20 Modul Selesai</p>
                     <div className="mt-3 h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                        <div className="h-full bg-indigo-600 w-[25%] rounded-full"></div>
                     </div>
                  </div>
                  
                  <div className="sm:col-span-2 rounded-2xl bg-gray-800 p-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                     <div>
                        <span className="inline-block rounded px-2 py-1 text-[10px] font-bold uppercase text-white bg-white/10 mb-2 tracking-wider">Video Terbaru</span>
                        <h3 className="font-semibold text-base text-white">Strategi 'No-Formula' Geometri</h3>
                     </div>
                     <Link to="/courses" className="rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 shrink-0">
                        Tonton Sekarang
                     </Link>
                  </div>
               </div>
               
               <div className="px-6 pb-6">
                  <div className="flex justify-between items-center rounded-xl bg-gray-100 p-4">
                     <div>
                        <div className="text-xs text-gray-500 mb-0.5">Minggu ini</div>
                        <div className="font-bold text-gray-900">+4 Jam Fokus Belajar</div>
                     </div>
                     <div className="text-right">
                        <div className="text-xs text-gray-500 mb-0.5">Daily Streak</div>
                        <div className="font-bold text-amber-500">🔥 14 Hari</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Method Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Metode Belajar Kami</h2>
            <p className="mt-4 text-lg text-gray-600">
              Kenapa puluhan ribu penonton di <a href="https://www.youtube.com/@Kenapasich212" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">YouTube Kenapa Sich Academy</a> merasa tercerahkan setelah menonton video kami?
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <Brain size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Pattern Recognition</h3>
              <p className="mt-2 text-gray-600">Berhenti menghafal tipe soal. Kenali polanya, dan kamu bisa menyelesaikan variasi soal apa pun.</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Lightbulb size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Analogi Sederhana</h3>
              <p className="mt-2 text-gray-600">Konsep abstrak seperti Aljabar dan Kalkulus dijelaskan menggunakan bahasa dan cerita sehari-hari.</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Target size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Problem Solving</h3>
              <p className="mt-2 text-gray-600">Tingkatkan skor UTBK/OSN mu dengan strategi eliminasi dan estimasi tanpa menghitung panjang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Preview Video */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">Preview Platform</h2>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Intip Dashboard Belajar Kami</h3>
            <p className="mt-4 text-lg text-gray-400">
              Lihat sekilas pengalaman belajar interaktif yang akan kamu dapatkan di dalam Kenapa Sich Academy.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl bg-gray-800 p-2 shadow-2xl ring-1 ring-white/10 sm:p-4 integration-video-container">
              <div className="aspect-video overflow-hidden rounded-xl bg-gray-900 border border-gray-800/50">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=1000"
                >
                  {/* Gunakan link video simulasi untuk preview website */}
                  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="mt-8 text-center flex flex-col items-center justify-center gap-3">
              <div className="text-sm text-gray-500 italic mb-2">*(Demonstrasi Fitur Platform)*</div>
              <a 
                href="https://www.youtube.com/@Kenapasich212" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                Atau Kunjungi Channel YouTube Kami <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kursus Populer</h2>
              <p className="mt-2 text-gray-600">Mulai dari fondasi logika dasar hingga persiapan UTBK.</p>
            </div>
            <Link to="/courses" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
              Lihat semua <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mockCourses.slice(0, 3).map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Kata Mereka</h2>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {mockTestimonials.map(t => (
              <div key={t.id} className="rounded-2xl bg-indigo-50 p-8 text-indigo-900 ring-1 ring-indigo-100">
                <p className="text-lg italic leading-relaxed">"{t.text}"</p>
                <div className="mt-6">
                  <div className="font-semibold text-indigo-950">{t.name}</div>
                  <div className="text-sm text-indigo-700">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
