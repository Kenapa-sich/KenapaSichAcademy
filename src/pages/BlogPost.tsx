import { useParams, Link } from "react-router-dom";
import { mockBlogPosts } from "../data/blogData";
import { CalendarDays, User, ArrowLeft, Tag, MessageSquare } from "lucide-react";
import { useState } from "react";

interface Comment {
  id: string;
  name: string;
  email: string;
  text: string;
  date: string;
}

export default function BlogPost() {
  const { id } = useParams();
  const post = mockBlogPosts.find(p => p.id === id);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: "", email: "", text: "" });

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Artikel tidak ditemukan.</h2>
        <Link to="/blog" className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 font-medium">
          &larr; Kembali ke Blog
        </Link>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name || !newComment.email || !newComment.text) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      name: newComment.name,
      email: newComment.email,
      text: newComment.text,
      date: new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date())
    };

    setComments([...comments, comment]);
    setNewComment({ name: "", email: "", text: "" });
  };

  return (
    <div className="bg-white pb-24">
      {/* Blog Article Header */}
      <div className="bg-gray-50 py-16 sm:py-20 border-b border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-gray-500 mb-6">
            <span className="flex items-center gap-1 text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full"><Tag size={16} /> {post.category}</span>
            <span className="flex items-center gap-1"><CalendarDays size={16} /> {post.date}</span>
            <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-balance leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl bg-gray-100 mb-12 shadow-lg">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="prose prose-lg prose-indigo mx-auto text-gray-600">
          <p className="lead text-xl font-medium text-gray-900">
            {post.excerpt}
          </p>
          
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        
        {/* Comments Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-8">
            <MessageSquare className="text-indigo-600" /> 
            Diskusi & Komentar ({comments.length})
          </h3>
          
          <form onSubmit={handleCommentSubmit} className="mb-12 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Tinggalkan Komentar</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={newComment.name}
                  onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-shadow"
                  placeholder="Budi Santoso"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email (tidak akan dipublikasikan)</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={newComment.email}
                  onChange={(e) => setNewComment({...newComment, email: e.target.value})}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-shadow"
                  placeholder="budi@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">Isi Komentar</label>
              <textarea
                id="comment"
                required
                rows={4}
                value={newComment.text}
                onChange={(e) => setNewComment({...newComment, text: e.target.value})}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-shadow resize-y"
                placeholder="Tuliskan pendapat atau pertanyaanmu di sini..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-opacity-90 shadow-sm"
            >
              Kirim Komentar
            </button>
          </form>

          <div className="space-y-8">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-gray-900">{comment.name}</h5>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm whitespace-pre-wrap">{comment.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                Belum ada komentar. Jadilah yang pertama memberikan pendapat!
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            <ArrowLeft size={20} /> Kembali ke Kumpulan Artikel
          </Link>
        </div>
      </div>
    </div>
  );
}
