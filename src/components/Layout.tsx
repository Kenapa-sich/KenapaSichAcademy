import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Hide footer on the learning interface to maximize height
  const isLearnPage = location.pathname.includes("/learn/");

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!isLearnPage && <Footer />}
    </div>
  );
}
