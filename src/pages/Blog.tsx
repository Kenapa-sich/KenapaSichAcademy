import { Link } from "react-router-dom";
import { mockBlogPosts } from "../data/blogData";
import { CalendarDays, User, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Blog Header */}
      <div className="bg-indigo-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Artikel & Insight</h1>
          <p className="mt-4 text-xl text-indigo-200 max-w-2xl mx-auto">
            Temukan cara baru memandang matematika, tips belajar ampuh, dan pembaruan seputar edukasi.
          </p>
        </div>
      </div>

      {/* Blog List Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {mockBlogPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <Link to={`/blog/${post.id}`} className="w-full aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500 flex items-center gap-1"><CalendarDays size={14} /> {post.date}</span>
                  <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600 hover:bg-indigo-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative mt-4">
                  <h3 className="text-xl font-bold leading-6 text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100 w-full">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                    <User size={16} className="text-gray-400" /> {post.author}
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-sm font-semibold text-indigo-600 flex items-center gap-1 hover:text-indigo-700">
                    Baca <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
