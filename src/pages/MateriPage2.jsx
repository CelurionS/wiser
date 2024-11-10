import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import M2wallet1 from '../assets/M2wallet1.png';
import M2wallet2 from '../assets/M2wallet2.png';
import M2wallet3 from '../assets/M2wallet3.png';
import M2wallet4 from '../assets/M2wallet4.png';
import M2wallet5 from '../assets/M2wallet5.png';
import M2wallet6 from '../assets/M2wallet6.png';

const MateriPage2 = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(2);
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
    { image: M2wallet1, title: 'Siklus Hidup dan Perkembangbiakan Burung Walet', description: 'Penjelasan tentang pola makan, perkembangbiakan, dan perilaku burung walet saat bersarang, yang penting untuk memahami kapan waktu terbaik untuk panen.', videoUrl: 'https://www.youtube.com/embed/OE140zsQ08I' },
    { image: M2wallet2, title: 'Teknik Panen Sarang Burung Walet', description: 'Cara memanen sarang dengan benar agar tidak mengganggu siklus reproduksi burung dan menjaga kualitas sarang yang dihasilkan.', videoUrl: 'https://www.youtube.com/watch?v=rK_d5g3pBb8' },
    { image: M2wallet3, title: 'Pengolahan Sarang Burung Walet', description: 'Langkah-langkah membersihkan dan mengolah sarang walet agar siap dipasarkan, termasuk teknik pengeringan dan pengepakan yang baik.', videoUrl: 'https://www.youtube.com/watch?v=wfCcs0vLysk' },
    { image: M2wallet4, title: 'Pemasaran Sarang Burung Walet', description: 'Strategi menjual sarang walet, dari pasar lokal hingga ekspor internasional, serta memahami standar kualitas dan sertifikasi yang dibutuhkan untuk perdagangan.', videoUrl: 'https://www.youtube.com/watch?v=pyi0ZfuIIvo' },
    { image: M2wallet5, title: 'Penggunaan Teknologi dalam Budidaya Walet', description: 'Pemanfaatan teknologi IoT (Internet of Things) untuk memantau kelembapan, suhu, dan kondisi lingkungan rumah walet secara otomatis.', videoUrl: 'https://www.youtube.com/watch?v=RUi54JTgL5s' },
    { image: M2wallet6, title: 'Konservasi dan Keberlanjutan', description: 'Bagaimana menjaga keberlanjutan budidaya sarang walet tanpa merusak populasi burung dan ekosistem di sekitarnya, termasuk teknik panen yang bertanggung jawab.', videoUrl: 'https://www.youtube.com/watch?v=6YZlFdTIdzM' },
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
        <img src={M2wallet1} alt="Burung Walet" className="w-64 h-80 rounded-lg object-cover shadow-lg" />
      </div>

      {/* Daftar Materi */}
      <div id="materiSection" className="flex flex-col items-center w-full bg-white">
        <div className="w-full bg-[#609AC1] py-12 text-center flex flex-col items-center" style={{ marginBottom: '50px' }}>
          <h1 className="text-2xl font-semibold text-black" style={{ marginBottom: '25px' }}>Cari Materi Mu Di Sini</h1>
          <div className="w-full max-w-lg mt-6 flex items-center" style={{ marginBottom: '35px' }}>
            <input
              type="text"
              placeholder="Cari Materi"
              className="w-full px-4 py-2 border-2 border-[#609AC1] bg-[#DCE8F3] text-[#609AC1] rounded-l-lg shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 max-w-5xl"
          style={{ columnGap: '70px', rowGap: '92px' }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative cursor-pointer bg-blue-100 rounded-lg overflow-hidden shadow-lg"
              onClick={() => handleMateriClick(card.videoUrl)}
            >
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                <p className="text-sm text-black mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

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

export default MateriPage2;
