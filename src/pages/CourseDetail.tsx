import { useParams, Link } from "react-router-dom";
import { mockCourses } from "../data/mockData";
import { CheckCircle2, PlayCircle, BookOpen, FileText, Download } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return <div className="p-12 text-center text-xl text-gray-900">Kursus tidak ditemukan.</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleDownloadPdf = (lessonTitle: string) => {
    // Simulate a PDF download
    const element = document.createElement("a");
    const file = new Blob([`Dummy PDF content for ${lessonTitle}`], {type: 'application/pdf'});
    element.href = URL.createObjectURL(file);
    element.download = `${lessonTitle.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-white">
      {/* Detail Hero Banner */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
              {course.title}
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              {course.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Main Content: Info & Modules */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Apa yang akan kamu dapatkan?</h2>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {course.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">Materi Kursus</h2>
              <div className="mt-6 space-y-6">
                {course.modules.length > 0 ? course.modules.map(module => (
                  <div key={module.id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <BookOpen size={18} className="text-indigo-600" />
                        {module.title}
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {module.lessons.map(lesson => (
                        <div key={lesson.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3">
                            {lesson.type === 'video' && <PlayCircle size={18} className="text-gray-400" />}
                            {lesson.type === 'exercise' && <FileText size={18} className="text-gray-400" />}
                            {lesson.type === 'summary' && <BookOpen size={18} className="text-gray-400" />}
                            <span className="text-sm font-medium text-gray-700">{lesson.title}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            {lesson.type === 'summary' && (
                              <button
                                onClick={() => handleDownloadPdf(lesson.title)}
                                className="p-1.5 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                                title="Download PDF Ringkasan"
                              >
                                <Download size={16} />
                              </button>
                            )}
                            <span className="text-xs text-gray-500">{lesson.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )) : (
                  <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
                    Modul sedang dalam tahap penyusunan.
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Sticky Pricing / Checkout Card */}
          <div className="relative">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl ring-1 ring-black/5">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 mb-6">
                 <img src={course.thumbnail} alt="Thumbnail preview" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  {course.originalPrice && course.originalPrice > course.price && (
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-gray-400 line-through">{formatPrice(course.originalPrice)}</span>
                      <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">
                        Hemat {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                  <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{formatPrice(course.price)}</span>
                </div>
                
                <Link
                  to={`/checkout/${course.id}`} 
                  className="block w-full rounded-xl bg-indigo-600 px-4 py-4 text-center text-lg font-bold text-white shadow-sm transition-colors hover:bg-opacity-90 focus:ring-4 focus:ring-indigo-100"
                >
                  Daftar Sekarang
                </Link>
                <p className="text-center text-xs text-gray-500">
                  Pembayaran aman. Akses seumur hidup. Garansi kepuasan 7 hari.
                </p>
              </div>
              
              <hr className="my-6 border-gray-200" />
              
              <div className="space-y-3">
                 <h4 className="font-semibold text-gray-900">Kursus ini mencakup:</h4>
                 <ul className="space-y-2 text-sm text-gray-600">
                   <li className="flex items-center gap-2"><PlayCircle size={16} className="text-gray-400" /> {course.modules.reduce((acc, m) => acc + m.lessons.filter(l => l.type === 'video').length, 0)} Video Edukasi</li>
                   <li className="flex items-center gap-2"><FileText size={16} className="text-gray-400" /> Latihan Soal & Pembahasan</li>
                   <li className="flex items-center gap-2"><BookOpen size={16} className="text-gray-400" /> Akses PDF Ringkasan</li>
                 </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
