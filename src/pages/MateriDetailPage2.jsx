import React from 'react';
import { useNavigate } from 'react-router-dom';

import Mwallet3 from '../assets/Mwallet3.png';
import M2dWallet1 from '../assets/M2dWallet1.png';
import M2dWallet2 from '../assets/M2dWallet2.png';
import M2dWallet3 from '../assets/M2dWallet3.png';


const MateriDetailPage2 = () => {
  const navigate = useNavigate();

  const handleMateriClick = (pageUrl) => {
    navigate(pageUrl);
    console.log(`Navigasi ke: ${pageUrl}`);
  };

  const cardsData = [
    { 
      image: M2dWallet1, 
      title: 'Pemilihan Lokasi Rumah Walet', 
      description: 'Tips Pemilihan Lokasi Untuk Membangun Rumah Burung WaletDesc: Video ini membahas tips memilih lokasi ideal untuk rumah burung walet, mulai dari keberadaan kehidupan burung walet di area tersebut hingga ketersediaan lokasi pakan yang dekat...',
      Duration: '9 menit', 
      pageUrl: '/MateriVidPage2' 
    },
    { 
      image: M2dWallet2, 
      title: 'Ciri-Ciri Lokasi', 
      description: 'Temukan ciri-ciri lokasi yang ideal untuk perkembangan populasi burung walet. Dalam Video ini membahas tanda-tanda khusus dari area yang cocok untuk budidaya burung walet', 
      Duration: '2 menit',
      pageUrl: '/MateriVidPage2a' 
    },
    { 
      image: M2dWallet3, 
      title: 'Kriteria Lokasi Yang Cocok Dibangun Rumah Burung Walet Produktif', 
      description: 'Memilih lokasi yang tepat sangat penting untuk membangun rumah burung walet yang produktif. Kriteria utama mencakup ketersediaan...', 
      Duration: '5 menit',
      pageUrl: '/MateriVidPage2b' 
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-16 font-railway">
      {/* Search Input with 50px Top Margin */}
      <div className="w-full max-w-lg mt-12 flex items-center px-4" style={{ marginTop: '50px' }}>
        <input 
          type="text"
          placeholder="Cari Materi"
          className="w-full px-4 py-2 border-2 border-[#609AC1] bg-white text-[#609AC1] rounded-l-lg shadow-sm focus:outline-none focus:border-blue-400 font-railway" 
        />
      </div>

      {/* Page Title */}
      <div className="text-center w-full p-9">
        <h1 className="text-5xl font-bold text-black font-railway">Materi</h1>
        <img 
          src={Mwallet3} 
          alt="Burung Walet" 
          className="w-[500px] h-60 rounded-lg object-cover shadow-lg mt-6 mx-auto" 
        />
      </div>

      {/* Section Header */}
      <div className="text-center w-full p-9">
        <h2 className="text-3xl font-semibold text-black font-railway">Pemilihan Lokasi Rumah Walet</h2>
      </div>

      {/* Video Section Header */}
      <div className="w-full max-w-5xl mx-auto bg-[#609AC1] py-5 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 font-railway">3 Materi Video</h2>
      </div>

      {/* Video Cards */}
      <div className="w-full max-w-5xl mx-auto p-8 grid grid-cols-1 gap-8 mb-[150px]">
        {cardsData.map((card, index) => (
          <div
          key={index}
          className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white flex flex-col md:flex-row"
          onClick={() => handleMateriClick(card.pageUrl)}
        >
          <img src={card.image} alt={card.title} className="w-full md:w-1/3 h-60 object-cover" />
        
          {/* Teks langsung */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 font-railway">{card.title}</h3>
            <p className="mt-2 text-black font-railway">{card.description}</p>
            <p className="mt-1 text-black text-sm font-railway">Oleh WISER</p>
            <p className="text-black text-sm font-railway">{card.Duration}</p>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default MateriDetailPage2;
