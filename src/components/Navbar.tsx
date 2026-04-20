import { Link, useLocation } from "react-router-dom";
import { BookOpen, LogOut, Menu, User, X, Youtube } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const location = useLocation();
  const isLoggedIn = location.pathname.includes('/dashboard') || location.pathname.includes('/learn'); // Simple mock auth

  const links = [
    { name: "Home", path: "/" },
    { name: "Kursus", path: "/courses" },
    { name: "Materi Gratis", path: "/free" },
    { name: "Blog", path: "/blog" },
    { name: "Portofolio", path: "/portfolio" },
    { name: "Tentang", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Promotional Banner */}
      {showPromo && (
        <div className="relative flex items-center justify-center bg-indigo-50 border-b border-indigo-100 px-4 py-2 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-medium text-indigo-900 sm:text-sm">
            <span className="font-bold tracking-wide mr-1 mt-0.5 inline-block text-indigo-600">🎉 PROMO SPESIAL:</span> 
            Diskon hingga 50% untuk kelas UTBK Expert!{" "}
            <Link to="/courses" className="underline font-bold ml-1 text-indigo-700 hover:text-indigo-900 transition-colors">
              Lihat Promo
            </Link>
          </p>
          <button
            type="button"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-indigo-400 hover:bg-indigo-100 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setShowPromo(false)}
            aria-label="Tutup banner promo"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600 hidden sm:block" />
          <Link to="/" className="text-[1.3rem] font-extrabold tracking-tight text-gray-900">
            KenapaSich<span className="text-indigo-600">Academy</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[0.9rem] font-medium transition-colors hover:text-indigo-600",
                  location.pathname === link.path ? "text-indigo-600" : "text-gray-500"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pl-4">
            <a 
              href="https://www.youtube.com/@Kenapasich212" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-red-500 transition-colors"
              title="YouTube Kenapa Sich Academy"
            >
              <Youtube size={22} />
            </a>
            
            <div className="w-px h-6 bg-gray-200"></div>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-[0.9rem] font-semibold text-gray-500 hover:text-indigo-600 flex items-center gap-2">
                  <User size={16} /> Dashboard
                </Link>
                <Link to="/" className="text-[0.9rem] font-medium text-gray-400 hover:text-red-500 flex items-center gap-2">
                  <LogOut size={16} />
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-[0.9rem] font-semibold text-gray-500 hover:text-indigo-600">
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="rounded-lg bg-indigo-600 px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-opacity-90"
                >
                  Daftar Segera
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col space-y-1 px-4 pb-4 pt-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.youtube.com/@Kenapasich212"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
            >
              <Youtube size={18} /> YouTube Channel
            </a>

            <div className="my-2 border-t border-gray-200"></div>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Dashboard</Link>
                <Link to="/" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-50">Keluar</Link>
              </>
            ) : (
              <>
                 <Link to="/login" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Masuk</Link>
                 <Link to="/register" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50">Daftar</Link>
              </>
            )}
          </div>
        </div>
      )}
      </nav>
    </header>
  );
}
