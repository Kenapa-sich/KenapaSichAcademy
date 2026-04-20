import { Link } from "react-router-dom";
import { BookOpen, Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold tracking-tight text-white">
                KenapaSich<span className="text-indigo-400">Academy</span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-gray-400">
              Mengubah cara belajar matematika di Indonesia. Pahami logika, bukan sekadar hafalan rumus.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.youtube.com/@Kenapasich212" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-white transition-colors">Semua Kursus</Link></li>
              <li><Link to="/free" className="hover:text-white transition-colors">Materi Gratis</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Artikel & Blog</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portofolio Kreator</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} KenapaSichAcademy. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
