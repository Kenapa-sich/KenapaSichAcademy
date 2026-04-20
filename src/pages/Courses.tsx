import CourseCard from "../components/CourseCard";
import { mockCourses } from "../data/mockData";

export default function Courses() {
  return (
    <div className="bg-gray-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
            Bangun Pola Pikir Matematika Melalui Kursus Ini
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pilih kursus yang sesuai dengan level dan tujuanmu. Jangan lewatkan kelas fondasi jika kamu ingin meriset ulang cara berpikirmu.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
