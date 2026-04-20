import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { mockCourses } from "../data/mockData";
import { ChevronLeft, CreditCard, ShieldCheck, Wallet, QrCode, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

const PAYMENT_METHODS = [
  { id: "qris", title: "QRIS", category: "E-Wallet & QR", icon: QrCode },
  { id: "gopay", title: "GoPay", category: "E-Wallet & QR", icon: Wallet },
  { id: "ovo", title: "OVO", category: "E-Wallet & QR", icon: Wallet },
  { id: "bca", title: "BCA Virtual Account", category: "Transfer Bank", icon: CreditCard },
  { id: "mandiri", title: "Mandiri Virtual Account", category: "Transfer Bank", icon: CreditCard },
  { id: "bni", title: "BNI Virtual Account", category: "Transfer Bank", icon: CreditCard },
  { id: "cc", title: "Kartu Kredit", category: "Lainnya", icon: CreditCard },
];

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = mockCourses.find((c) => c.id === id);
  const [selectedMethod, setSelectedMethod] = useState("qris");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const currentPrice = course.price;
  const adminFee = 4500;
  const totalPrice = currentPrice + adminFee;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // After success, navigate to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl border border-gray-200">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 mb-6">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pembayaran Berhasil!</h2>
          <p className="text-gray-500 mb-6">Terima kasih telah membeli {course.title}. Anda akan dialihkan ke dashboard.</p>
          <Loader2 className="mx-auto h-6 w-6 animate-spin text-indigo-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 min-h-[calc(100vh-70px)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to={`/courses/${course.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
            <ChevronLeft size={16} /> Kembali ke detail kursus
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Selesaikan Pembayaran</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Payment Methods */}
          <div className="md:col-span-2 space-y-6">
             <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pilih Metode Pembayaran</h3>
                
                {['E-Wallet & QR', 'Transfer Bank', 'Lainnya'].map((category) => (
                    <div key={category} className="mb-6 last:mb-0">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{category}</h4>
                        <div className="space-y-3">
                            {PAYMENT_METHODS.filter(m => m.category === category).map((method) => {
                                const Icon = method.icon;
                                const isSelected = selectedMethod === method.id;
                                return (
                                    <label 
                                        key={method.id} 
                                        className={cn(
                                            "flex items-center p-4 border rounded-xl cursor-pointer transition-all",
                                            isSelected ? "border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600" : "border-gray-200 hover:bg-gray-50"
                                        )}
                                    >
                                        <input 
                                            type="radio" 
                                            name="paymentMethod" 
                                            value={method.id}
                                            checked={isSelected}
                                            onChange={() => setSelectedMethod(method.id)}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 mr-4"
                                        />
                                        <div className="flex items-center gap-3 w-full">
                                            <div className={cn("p-2 rounded-lg", isSelected ? "bg-white text-indigo-600" : "bg-gray-100 text-gray-500")}>
                                                <Icon size={20} />
                                            </div>
                                            <span className="font-semibold text-gray-900">{method.title}</span>
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                ))}
             </div>
          </div>

          {/* Right: Order Summary */}
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Ringkasan Pesanan</h3>
                
                <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
                    <img src={course.thumbnail} alt={course.title} className="w-20 h-14 object-cover rounded-lg bg-gray-100" />
                    <div>
                        <h4 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{course.title}</h4>
                        <span className="text-xs text-indigo-600 font-semibold mt-1 inline-block">{course.level}</span>
                    </div>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Harga Normal</span>
                        <span className="text-gray-900 font-medium">{formatPrice(course.originalPrice || course.price)}</span>
                    </div>
                    {course.originalPrice && course.originalPrice > course.price && (
                        <div className="flex justify-between">
                            <span className="text-emerald-600">Diskon</span>
                            <span className="text-emerald-600 font-medium whitespace-nowrap">- {formatPrice(course.originalPrice - course.price)}</span>
                        </div>
                    )}
                    <div className="flex justify-between">
                        <span className="text-gray-500">Biaya Layanan</span>
                        <span className="text-gray-900 font-medium">{formatPrice(adminFee)}</span>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-4 pt-4 mb-6">
                    <div className="flex justify-between items-end">
                        <span className="text-base font-bold text-gray-900">Total Pembayaran</span>
                        <span className="text-2xl font-extrabold text-indigo-600 tracking-tight">{formatPrice(totalPrice)}</span>
                    </div>
                </div>

                <button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
                  {isProcessing ? "Memproses..." : "Bayar Sekarang"}
                </button>
                <div className="mt-4 text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-500" /> Transaksi aman & terenkripsi
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
