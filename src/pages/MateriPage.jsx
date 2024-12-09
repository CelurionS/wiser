import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mwallet1 from '../assets/Mwallet1.png';
import Mwallet2 from '../assets/Mwallet2.png';
import Mwallet3 from '../assets/Mwallet3.png';
import Mwallet4 from '../assets/Mwallet4.png';
import Mwallet5 from '../assets/Mwallet5.png';
import Mwallet6 from '../assets/Mwallet6.png';
import Mwallet7 from '../assets/Mwallet7.png';

const MateriPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) { 
      setCurrentPage(page);
      const pageUrl = page === 1 ? '/MateriPage' : '/MateriPage2';
      navigate(pageUrl);
    }
  };

  const handleMateriClick = (pageUrl) => {
    navigate(pageUrl);
  };

  const cardsData = [
    { image: Mwallet2, title: 'Pengenalan Burung Walet dan Habitatnya', description: 'Membahas jenis-jenis burung walet yang sering dibudidayakan dan karakteristiknya, seperti walet sarang putih (Collocalia fuciphaga) yang menghasilkan sarang bernilai tinggi.', pageUrl: '/MateriDetailPage1' },

    { image: Mwallet3, title: 'Pemilihan Lokasi Rumah Walet', description: 'Memilih lokasi yang ideal untuk rumah walet, termasuk faktor seperti kedekatan dengan habitat alami, kelembapan, suhu, dan akses ke sumber makanan (serangga).', pageUrl: '/MateriDetailPage2' },

    { image: Mwallet4, title: 'Desain dan Konstruksi Rumah Walet', description: 'Mengatur tata letak rumah walet agar menyerupai habitat alaminya, dengan pencahayaan minim, ventilasi baik, dan sirkulasi udara yang mendukung kesehatan burung walet.', pageUrl: '/MateriDetailPage3' },

    { image: Mwallet5, title: 'Pengaturan Suhu dan Kelembapan', description: 'Teknologi dan metode untuk mengontrol suhu dan kelembapan di dalam rumah walet, yang sangat penting untuk kenyamanan burung dan keberhasilan panen sarang.', pageUrl: '/MateriDetailPage4' },
    
    { image: Mwallet6, title: 'Sistem Suara Pemanggil Walet', description: 'Teknik penggunaan suara pemanggil burung walet (audio tweeter) untuk menarik burung masuk ke rumah walet, serta pemilihan jenis audio dan waktu pemutaran yang optimal.', pageUrl: '/MateriDetailPage5' },

    { image: Mwallet7, title: 'Pemeliharaan dan Perawatan Rumah Walet', description: 'Prosedur untuk menjaga kebersihan rumah walet, mencegah serangan hama seperti tikus dan serangga, serta pemantauan rutin kondisi lingkungan di dalam rumah.', pageUrl: '/MateriDetailPage6' }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Bagian Pembuka */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 p-10 w-full" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-black">Materi</h1>
          <p className="mt-4 text-lg text-black">
            Temukan materi apa pun tentang Budidaya Sarang Burung Walet
          </p>
          <button
            onClick={() => document.getElementById('materiSection')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 px-6 py-3 bg-[#246AA4] text-white font-semibold rounded-md shadow hover:bg-blue-400"
          >
            Mulai
          </button>
        </div>
        <img src={Mwallet1} alt="Burung Walet" className="w-64 h-80 rounded-lg object-cover shadow-lg" />
      </div>

      {/* Daftar Materi */}
      <div id="materiSection" className="flex flex-col items-center w-full bg-white">
        {/* Header & Input Pencarian */}
        <div className="w-full bg-[#609AC1] py-12 text-center flex flex-col items-center" style={{ marginBottom: '50px' }}>
          <h1 className="text-2xl font-semibold text-black" style={{ marginBottom: '25px' }}>Cari Materi Mu Di Sini</h1>

          {/* Input Pencarian */}
          <div className="w-full max-w-lg mt-6 flex items-center" style={{ marginBottom: '35px' }}>
            <input
              type="text"
              placeholder="Cari Materi"
              className="w-full px-4 py-2 border-2 border-[#609AC1] bg-[#DCE8F3] text-[#609AC1] rounded-l-lg shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* Materi */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 max-w-5xl"
          style={{ columnGap: '70px', rowGap: '92px' }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative cursor-pointer bg-blue-100 rounded-lg overflow-hidden shadow-lg"
              onClick={() => handleMateriClick(card.pageUrl)}
            >
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                <p className="text-sm text-black mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-4 mb-8" style={{ marginBottom: '150px', marginTop:'80px' }}>
          <button
            className="px-3 py-1 text-black hover:bg-[#609AC1] font-[Raleway]"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 font-[Raleway] ${
                currentPage === index + 1
                  ? "bg-[#609AC1] text-white rounded-full"
                  : "text-black"
              } hover:bg-blue-400`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 text-black hover:bg-[#609AC1] font-[Raleway]"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MateriPage;
