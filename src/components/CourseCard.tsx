import { Link } from "react-router-dom";
import { Course } from "../data/mockData";
import { BookOpen, Clock, SignalHigh } from "lucide-react";

export default function CourseCard({ course }: { course: Course }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getTotalDuration = () => {
    let totalMinutes = 0;
    let hasTime = false;

    course.modules.forEach(module => {
      module.lessons.forEach(lesson => {
        if (!lesson.duration) return;
        const dur = lesson.duration.toLowerCase();
        if (dur.includes(':')) {
           const [m, s] = dur.split(':').map(Number);
           if (!isNaN(m)) {
             totalMinutes += m + (isNaN(s) ? 0 : s / 60);
             hasTime = true;
           }
        } else if (dur.includes('min')) {
           const match = dur.match(/\d+/);
           if (match) {
             totalMinutes += parseInt(match[0], 10);
             hasTime = true;
           }
        }
      });
    });

    if (!hasTime) return 'N/A';
    
    const h = Math.floor(totalMinutes / 60);
    const m = Math.round(totalMinutes % 60);
    if (h > 0) return m > 0 ? `${h}j ${m}m` : `${h}j`;
    return `${m}m`;
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
      <div className="relative aspect-video overflow-hidden border-b border-gray-100">
        <img
          src={course.thumbnail}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 shadow-sm border border-gray-100">
          {course.level}
        </div>
        {course.originalPrice && course.originalPrice > course.price && (
          <div className="absolute top-3 right-3 rounded-full bg-rose-500 text-white shadow-md px-2.5 py-1 text-[11px] font-extrabold tracking-wide z-10">
            HEMAT {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
          </div>
        )}
      </div>
      
      <div className="flex flex-1 flex-col p-5 bg-gray-50/50">
        <h3 className="text-[1.1rem] font-bold leading-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="mt-2 text-[0.9rem] text-gray-500 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>
        
        <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-[0.8rem] text-gray-500">
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-indigo-500 shrink-0" />
            <span>{course.modules.length} Modul</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-amber-500 shrink-0" />
            <span>{getTotalDuration()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <SignalHigh size={14} className="text-emerald-500 shrink-0" />
            <span>{course.level}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-6 flex items-center justify-between">
          <div>
            {course.originalPrice && course.originalPrice > course.price && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-400 line-through">
                  {formatPrice(course.originalPrice)}
                </span>
                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  Hemat {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                </span>
              </div>
            )}
            <span className="text-lg font-bold text-gray-900 block leading-none">
              {formatPrice(course.price)}
            </span>
          </div>
          <Link
            to={`/courses/${course.id}`}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-[0.85rem] font-semibold text-white transition-colors hover:bg-opacity-90"
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
