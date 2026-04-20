import { Link } from "react-router-dom";
import { mockCourses } from "../data/mockData";
import { PlayCircle, Trophy, BookOpen } from "lucide-react";

export default function Dashboard() {
  // Mock owned courses (first 2)
  const myCourses = mockCourses.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Halo, Siswa! 👋</h1>
          <p className="text-gray-600">Lanjutkan belajarmu hari ini.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
           <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
             <div className="flex items-center gap-4">
               <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
                 <BookOpen size={24} />
               </div>
               <div>
                  <p className="text-sm font-medium text-gray-500">Kursus Dimiliki</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
               </div>
             </div>
           </div>
           
           <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
             <div className="flex items-center gap-4">
               <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
                 <Trophy size={24} />
               </div>
               <div>
                  <p className="text-sm font-medium text-gray-500">Poin Belajar</p>
                  <p className="text-2xl font-bold text-gray-900">350</p>
               </div>
             </div>
           </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-6">Kursus Saya</h2>
        
        <div className="space-y-6">
          {myCourses.map(course => (
            <div key={course.id} className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
              <div className="h-32 w-full sm:w-48 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                 <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-3">
                 <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                 <div className="w-full max-w-sm rounded-full bg-gray-200 h-2">
                   <div className="bg-indigo-600 h-2 rounded-full" style={{ width: course.id === 'logika-dasar' ? '40%' : '10%' }}></div>
                 </div>
                 <p className="text-sm text-gray-500">{course.id === 'logika-dasar' ? '2 dari 5 Modul Selesai' : '0 dari 1 Modul Selesai'}</p>
              </div>
              <Link
                to={`/learn/${course.id}`} 
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100"
              >
                <PlayCircle size={18} />
                Lanjutkan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
