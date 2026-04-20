export default function Privacy() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-balance mb-8">
          Kebijakan Privasi
        </h1>
        <div className="prose prose-indigo max-w-none text-gray-600 space-y-6">
          <p>Terakhir diperbarui: April 2026</p>
          
          <p>
            <strong>Kenapa Sich Academy</strong> menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan menjaga informasi Anda saat mengunjungi situs web kami.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami dapat mengumpulkan data berikut yang Anda berikan secara langsung saat berinteraksi dengan kami:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Data Identitas:</strong> Nama depan, nama belakang, nama pengguna.</li>
            <li><strong>Data Kontak:</strong> Alamat email, nomor telepon (opsional).</li>
            <li><strong>Data Transaksi:</strong> Rincian tentang pembayaran yang Anda lakukan. (Kami menggunakan pihak ketiga/payment gateway dan tidak pernah menyimpan nomor kartu kredit/debit Anda).</li>
            <li><strong>Data Penggunaan:</strong> Informasi sejalan seputar progres belajar Anda di dalam dashboard (video yang sudah ditonton, kuis).</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>Meningkatkan dan mempersonalisasi pengalaman belajar Anda:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Untuk mendaftarkan Anda sebagai akun / pelanggan baru.</li>
            <li>Untuk memproses pesanan dan kelangsungan platform.</li>
            <li>Untuk dapat menghubungi Anda perihal pembaruan sistem dan penambahan materi kursus baru.</li>
            <li>Untuk menilai kredibilitas sertifikat pelatihan.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Keamanan Data</h2>
          <p>
            Kami telah menerapkan langkah-langkah keamanan yang tepat untuk mencegah data pribadi Anda hilang secara tidak sengaja, digunakan, atau diakses dengan cara yang tidak sah, diubah, atau diungkapkan. Akses ke data pribadi Anda dienkripsi serta dibatasi hanya untuk staf dan atau vendor pihak ketiga yang membutuhkannya untuk alasan fungsional yang sah.
          </p>

        </div>
      </div>
    </div>
  );
}
