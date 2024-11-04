import React from 'react';
import gambar from '../assets/gambar.jpg';
import wallet1 from '../assets/Wallet1.png';

const MateriPage = () => {
  const scrollToMateriSection = () => {
    const section = document.getElementById('materiSection');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Bagian Pembuka */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 p-8 w-full">
        {/* Teks dan Tombol */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800">Materi</h1>
          <p className="mt-4 text-lg text-gray-600">
            Temukan materi apa pun tentang Budidaya Sarang Burung Walet
          </p>
          <button
            onClick={scrollToMateriSection}
            className="mt-6 px-6 py-2 bg-blue-300 text-white font-semibold rounded-md shadow hover:bg-blue-400"
          >
            Mulai
          </button>
        </div>

        {/* Gambar Burung */}
        <img src={wallet1} alt="Burung Walet" className="w-64 h-80 rounded-lg object-cover shadow-lg" />
      </div>

      {/* Daftar Materi */}
      <div id="materiSection" className="flex flex-col items-center w-full bg-blue-50">
        {/* Header */}
        <div className="w-full bg-blue-200 p-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-700">Cari Materi Mu Disini</h1>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-lg mt-6">
          <input
            type="text"
            placeholder="Cari Materi Mu Di Sini"
            className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Materi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 max-w-5xl">
          {/* Kartu 1 */}
          <a
            href="#"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={wallet1} alt="Wallet1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">Pengenalan Burung Walet dan Habitatnya</h3>
              <p className="text-sm text-gray-500 mt-2">
                Membahas jenis-jenis burung walet yang sering dibudidayakan dan karakteristiknya, seperti walet sarang putih (Collocalia fuciphaga) yang menghasilkan sarang bernilai tinggi.
              </p>
            </div>
          </a>

          {/* Materi 2 */}
          <a
            href="#"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={wallet1} alt="Wallet2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">Pemilihan Lokasi Rumah Walet</h3>
              <p className="text-sm text-gray-500 mt-2">
                Memilih lokasi yang ideal untuk rumah walet, termasuk faktor seperti kedekatan dengan habitat alami, kelembapan, suhu, dan akses ke sumber makanan (serangga).
              </p>
            </div>
          </a>

          {/* Materi 3 */}
          <a
            href="#"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={wallet1} alt="Wallet3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">Desain dan Konstruksi Rumah Walet</h3>
              <p className="text-sm text-gray-500 mt-2">
                Mengatur tata letak rumah walet agar menyerupai habitat alaminya, dengan pencahayaan minim, ventilasi baik, dan sirkulasi udara yang mendukung kesehatan burung walet.
              </p>
            </div>
          </a>

          {/* Materi 4 */}
          <a
            href="#"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={wallet1} alt="Wallet4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">Pengaturan Suhu dan Kelembapan</h3>
              <p className="text-sm text-gray-500 mt-2">
                Teknologi dan metode untuk mengontrol suhu dan kelembapan di dalam rumah walet, yang sangat penting untuk kenyamanan burung dan keberhasilan panen sarang.
              </p>
            </div>
          </a>

          {/* Materi 5 */}
          <a
            href="#"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={wallet1} alt="Wallet5" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">Sistem Suara Pemanggil Walet</h3>
              <p className="text-sm text-gray-500 mt-2">
                Teknik penggunaan suara pemanggil burung walet (audio tweeter) untuk menarik burung masuk ke rumah walet, serta pemilihan jenis audio dan waktu pemutaran yang optimal.
              </p>
            </div>
          </a>

          {/* Materi 6 */}
          <a
            href="#"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={wallet1} alt="Wallet6" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">Pemeliharaan dan Perawatan Rumah Walet</h3>
              <p className="text-sm text-gray-500 mt-2">
                Prosedur untuk menjaga kebersihan rumah walet, mencegah serangan hama seperti tikus dan serangga, serta pemantauan rutin kondisi lingkungan di dalam rumah.
              </p>
            </div>
          </a>
        </div>

        {/* Pagination */}
        <div className="flex space-x-2 mt-4 mb-8">
          <button className="px-3 py-1 bg-blue-300 rounded-full text-white hover:bg-blue-400">1</button>
          <button className="px-3 py-1 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400">2</button>
        </div>
      </div>
    </div>
  );
};

export default MateriPage;
