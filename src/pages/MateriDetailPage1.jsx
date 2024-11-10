import React from 'react';
import { useNavigate } from 'react-router-dom';

import Mwallet2 from '../assets/Mwallet2.png';
import MdWallet1 from '../assets/MdWallet1.png';
import MdWallet2 from '../assets/MdWallet2.png';
import MdWallet3 from '../assets/MdWallet3.png';
import MdWallet4 from '../assets/MdWallet4.png';


const MateriDetailPage1 = () => {
  const navigate = useNavigate();

  const handleMateriClick = (pageUrl) => {
    navigate(pageUrl);
  };

  const cardsData = [
    { 
      image: MdWallet1, 
      title: 'Jenis-jenis Burung Walet', 
      description: 'Burung walet yang sering dibudidayakan adalah walet sarang putih (Collocalia fuciphaga) karena sarangnya bernilai tinggi. Ada juga jenis walet sarang hitam dan walet lainnya.',
      Duration: '2 menit',
      pageUrl: '/MateriVidPage1' 
    },
    { 
      image: MdWallet2, 
      title: 'Pemilihan Lokasi Rumah Walet', 
      description: 'Burung walet hidup di gua gelap dan lembab, dekat sumber air seperti sungai dan laut. Mereka dapat tinggal di bangunan buatan yang meniru gua dengan suhu dan kelembapan yang ideal.', 
      pageUrl: '/MateriVidPage1' 
    },
    { 
      image: MdWallet3, 
      title: 'Desain dan Konstruksi Rumah Walet', 
      description: 'Burung walet makan serangga, membangun sarang dari air liurnya, berkembang biak di sarang tersebut, dan terus mengulangi siklus hidupnya sepanjang tahun.', 
      pageUrl: '/MateriVidPage1' 
    },
    { 
      image: MdWallet4, 
      title: 'Pengaturan Suhu dan Kelembapan', 
      description: 'Struktur fisik burung walet seperti sayap, paruh, dan ekor yang mendukung kemampuan terbang cepat dan bermanuver. Termasuk juga kebiasaan terbang, makan, serta perilaku sosial dalam koloni.', 
      pageUrl: '/MateriVidPage1' 
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
          src={Mwallet2} 
          alt="Burung Walet" 
          className="w-[500px] h-60 rounded-lg object-cover shadow-lg mt-6 mx-auto" 
        />
      </div>

      {/* Section Header */}
      <div className="text-center w-full p-9">
        <h2 className="text-3xl font-semibold text-black font-railway">Pengenalan Burung Walet dan Habitatnya</h2>
      </div>

      {/* Video Section Header */}
      <div className="w-full max-w-5xl mx-auto bg-[#609AC1] py-5 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 font-railway">4 Materi Video</h2>
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

export default MateriDetailPage1;
