import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { mockCourses } from "../data/mockData";
import { PlayCircle, FileText, CheckCircle2, Menu, ChevronLeft, Trophy } from "lucide-react";
import { cn } from "../lib/utils";

export default function Learn() {
  const { courseId } = useParams();
  const course = mockCourses.find(c => c.id === courseId);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLessonId, setActiveLessonId] = useState(
    course?.modules[0]?.lessons[0]?.id || ""
  );
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    if (!courseId) return [];
    try {
      const saved = localStorage.getItem(`completedLessons_${courseId}`);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    if (courseId) {
      localStorage.setItem(`completedLessons_${courseId}`, JSON.stringify(completedLessons));
    }
  }, [completedLessons, courseId]);

  if (!course) {
    return <Navigate to="/dashboard" />;
  }

  const allLessons = course.modules.flatMap(m => m.lessons);
  const totalLessons = allLessons.length;
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0;

  const activeLesson = allLessons.find(l => l.id === activeLessonId);
  const currentIndex = allLessons.findIndex(l => l.id === activeLessonId);

  const handleNextLesson = () => {
    if (!completedLessons.includes(activeLessonId)) {
      setCompletedLessons([...completedLessons, activeLessonId]);
    }
    if (currentIndex < allLessons.length - 1) {
      setActiveLessonId(allLessons[currentIndex + 1].id);
    }
  };

  const handlePrevLesson = () => {
    if (currentIndex > 0) {
      setActiveLessonId(allLessons[currentIndex - 1].id);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-white">
      
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-80 transform border-r border-gray-200 bg-gray-50 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 overflow-y-auto pt-16 lg:pt-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-200 bg-white">
          <Link to="/dashboard" className="text-sm font-medium text-indigo-600 flex items-center gap-1 hover:underline mb-2">
            <ChevronLeft size={16} /> Kembali ke Dashboard
          </Link>
          <h2 className="font-bold text-gray-900">{course.title}</h2>
        </div>
        
        <div className="p-4 space-y-6">
          {course.modules.map((module, i) => (
            <div key={module.id}>
              <h3 className="mb-3 text-sm font-bold text-gray-900 uppercase tracking-wider">
                Modul {i + 1}: {module.title}
              </h3>
              <div className="space-y-1">
                {module.lessons.map(lesson => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isActive = activeLessonId === lesson.id;
                  
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => {
                        setActiveLessonId(lesson.id);
                        setSidebarOpen(false);
                      }}
                      className={cn(
                        "w-full text-left flex items-start gap-3 rounded-lg p-3 text-sm transition-colors",
                        isActive 
                          ? "bg-indigo-100 text-indigo-900 font-medium"
                          : "hover:bg-gray-100 text-gray-700"
                      )}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isCompleted ? (
                          <CheckCircle2 size={16} className="text-emerald-500" />
                        ) : isActive ? (
                          <PlayCircle size={16} className="text-indigo-600" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                        )}
                      </div>
                      <span>{lesson.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto">
        
        {/* Learn Top Navbar & Progress */}
        <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-8 shadow-sm">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 lg:hidden hover:text-indigo-600 transition-colors"
            >
              <Menu size={20} />
            </button>
            <h2 className="hidden lg:block font-bold text-gray-800 line-clamp-1 border-l-2 border-indigo-500 pl-3">Materi Belajar</h2>
          </div>
          
          {/* Progress Bar Container */}
          <div className="flex items-center gap-4 w-full max-w-sm ml-4 lg:ml-0">
            <div className="flex-1">
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1.5">
                <span className="flex items-center gap-1.5 uppercase tracking-wider text-indigo-600"><Trophy size={12} /> Progres Kursus</span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100 ring-1 ring-inset ring-gray-200">
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-700 ease-out",
                    progressPercentage === 100 ? "bg-emerald-500" : "bg-indigo-500"
                  )}
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            <div className="text-xs font-medium text-gray-500 hidden sm:block whitespace-nowrap bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
              {completedLessons.length} / {totalLessons} Selesai
            </div>
          </div>
        </div>

        <div className="w-full flex-1 bg-gray-50">
          {/* Mock Video Player Area */}
          <div className="aspect-video w-full max-w-5xl mx-auto bg-gray-900 border-b border-gray-800 flex items-center justify-center relative shadow-sm">
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
             
             {activeLesson?.type === 'video' ? (
                <div className="relative z-10 flex flex-col items-center text-white">
                  <PlayCircle size={64} className="mb-4 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer transition-all duration-300 text-indigo-400" />
                  <p className="font-semibold text-lg text-gray-200">Putar Video: {activeLesson.title}</p>
                </div>
             ) : (
                <div className="relative z-10 flex flex-col items-center text-white">
                  <FileText size={48} className="mb-4 opacity-80 text-emerald-400" />
                  <p className="font-semibold text-gray-200">{activeLesson?.title}</p>
                </div>
             )}
          </div>
          
          <div className="mx-auto max-w-4xl p-6 lg:p-10 space-y-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
              {activeLesson?.title}
            </h1>
            
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm prose prose-indigo max-w-none text-gray-600">
              <h3 className="text-gray-900">Ringkasan Pembelajaran</h3>
              <p>Materi pembelajaran untuk bagian ini akan menjelaskan konsep secara mendalam. Di sini kami tidak berfokus pada rumus cepat, melainkan pada <strong>mengapa</strong> hal ini bisa terjadi dan <strong>logika</strong> di baliknya.</p>
              <ul>
                 <li>Analisis masalah dari sudut pandang yang berbeda.</li>
                 <li>Membangun metafora untuk konsep abstrak.</li>
                 <li>Menerapkan pola pada variasi soal.</li>
              </ul>
            </div>
            
            <div className="flex justify-between items-center pt-6 pb-12">
               <button 
                  onClick={handlePrevLesson}
                  disabled={currentIndex === 0}
                  className="text-gray-600 hover:text-indigo-600 font-semibold text-sm flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  <ChevronLeft size={16} /> Sebelumnya
               </button>
               
               <button 
                  onClick={handleNextLesson}
                  className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-md active:scale-95 flex items-center gap-2"
               >
                  {completedLessons.includes(activeLessonId) ? "Lanjut ke Materi Berikutnya" : "Tandai Selesai & Lanjut"}
                  {progressPercentage === 100 && currentIndex === allLessons.length - 1 && " 🎉"}
               </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
