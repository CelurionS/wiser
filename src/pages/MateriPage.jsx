import React, { useState } from 'react';
import gambar from '../assets/gambar.jpg';

const MateriPage = () => {
  const [showMateriList, setShowMateriList] = useState(false);

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
            onClick={() => setShowMateriList(true)}
            className="mt-6 px-6 py-2 bg-blue-300 text-white font-semibold rounded-md shadow hover:bg-blue-400"
          >
            Mulai
          </button>
        </div>

        {/* Gambar Burung */}
        <img src={gambar} alt="Burung Walet" className="w-64 h-80 rounded-lg object-cover shadow-lg" />
      </div>

      {/* Daftar Materi */}
      {showMateriList && (
        <div className="flex flex-col items-center w-full bg-blue-50">
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

          {/* Materi Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 max-w-5xl">
            {/* Kartu Materi 1 */}
            <a
              href="#"
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={gambar} alt="Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Pengenalan Burung Walet dan Habitatnya</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Membahas jenis-jenis burung walet yang sering dibudidayakan dan karakteristiknya, seperti walet sarang putih (Collocalia fuciphaga) yang menghasilkan sarang bernilai tinggi.
                </p>
              </div>
            </a>

            {/* Kartu Materi 2 */}
            <a
              href="#"
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={gambar} alt="Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Teknik Pembudidayaan Sarang Burung Walet</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Langkah-langkah dalam membangun dan memelihara rumah walet yang ideal agar burung walet nyaman dan produktif.
                </p>
              </div>
            </a>

            {/* Kartu Materi 3 */}
            <a
              href="#"
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={gambar} alt="Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Perawatan dan Pemeliharaan Rumah Walet</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Tips dan trik dalam merawat rumah walet agar tetap bersih, aman, dan mendukung pertumbuhan burung walet.
                </p>
              </div>
            </a>

            {/* Kartu Materi 4 */}
            <a
              href="#"
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={gambar} alt="Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Penyakit Umum pada Burung Walet</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Informasi tentang penyakit umum yang menyerang burung walet serta cara pencegahannya.
                </p>
              </div>
            </a>

            {/* Kartu Materi 5 */}
            <a
              href="#"
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={gambar} alt="Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Proses Panen dan Pengolahan Sarang Walet</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Cara melakukan panen sarang walet yang benar dan bagaimana mengolahnya agar siap dipasarkan.
                </p>
              </div>
            </a>

            {/* Kartu Materi 6 */}
            <a
              href="#"
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={gambar} alt="Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Pasar dan Nilai Ekonomi Sarang Walet</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Pembahasan mengenai permintaan pasar sarang walet serta nilai ekonominya di pasaran internasional.
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
      )}
    </div>
  );
};

export default MateriPage;
