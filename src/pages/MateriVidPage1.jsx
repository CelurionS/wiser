import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Mwallet1 from '../assets/Mwallet1.png';
import MdWallet2 from '../assets/MdWallet2.png';
import MdWallet3 from '../assets/MdWallet3.png';
import MdWallet4 from '../assets/MdWallet4.png';
import Mwallet3 from '../assets/Mwallet3.png';
import Mwallet4 from '../assets/Mwallet4.png';
import Mwallet5 from '../assets/Mwallet5.png';

const MateriVidPage1 = () => {
  const navigate = useNavigate(); // Initialize navigate for routing
  const [mainVideo, setMainVideo] = useState({
    title: 'Jenis-jenis Burung Wallet',
    videoUrl: 'https://www.youtube.com/embed/kfdfx33sgOA',
    description: 'Burung walet memiliki beberapa jenis yang berbeda, namun yang paling sering dibudidayakan adalah Collocalia fuciphaga (walet sarang putih) karena menghasilkan sarang yang bernilai tinggi di pasar. Jenis lainnya termasuk Collocalia maxima (walet sarang hitam) dan Collocalia esculenta. Masing-masing spesies memiliki perbedaan dalam bentuk sarang dan habitat, tetapi burung walet sarang putih adalah yang paling dicari karena sarangnya lebih bersih dan lebih mudah diproses.',
    Duration: '10 menit',
    image: Mwallet1,
  });

  const otherVideos = [
    {
      image: MdWallet2,
      title: 'Pemilihan Lokasi Rumah Walet',
      description: 'Burung walet hidup di gua gelap dan lembab, dekat sumber air seperti sungai dan laut. Mereka dapat tinggal di bangunan buatan yang meniru gua dengan suhu dan kelembapan yang ideal.',
      videoUrl: 'https://www.youtube.com/embed/LrNOCVhg9c8',
      Duration: '5 menit',
    },
    {
      image: MdWallet3,
      title: 'Desain dan Konstruksi Rumah Walet',
      description: 'Burung walet makan serangga, membangun sarang dari air liurnya, berkembang biak di sarang tersebut, dan terus mengulangi siklus hidupnya sepanjang tahun.',
      videoUrl: 'https://www.youtube.com/embed/5GU10PSmGAc',
      Duration: '3 menit',
    },
    {
      image: MdWallet4,
      title: 'Pengaturan Suhu dan Kelembapan',
      description: 'Struktur fisik burung walet seperti sayap, paruh, dan ekor yang mendukung kemampuan terbang cepat dan bermanuver. Termasuk juga kebiasaan terbang, makan, serta perilaku sosial dalam koloni.',
      videoUrl: 'https://www.youtube.com/embed/6WTU9mZDWaU',
      Duration: '4 menit',
    },
  ];

  const cardsData = [
    {
      title: 'Pemilihan Lokasi Penangkaran Walet',
      description: 'Memilih lokasi yang ideal untuk rumah walet, termasuk faktor seperti kedekatan dengan habitat alami, kelembapan, suhu, dan akses ke sumber makanan (serangga).',
      image: Mwallet3,
      pageUrl: '/MateriPage',
    },
    {
      title: 'Desain dan Konstruksi Rumah Walet',
      description: 'Mengatur tata letak rumah walet agar menyerupai habitat alaminya, dengan pencahayaan minim, ventilasi baik, dan sirkulasi udara yang mendukung kesehatan burung walet.',
      image: Mwallet4,
      pageUrl: '/MateriPage2',
    },
    {
      title: 'Pengaturan Suhu dan Kelembapan',
      description: 'Teknologi dan metode untuk mengontrol suhu dan kelembapan di dalam rumah walet, yang sangat penting untuk kenyamanan burung dan keberhasilan panen sarang.',
      image: Mwallet5,
      pageUrl: '/MateriPage2',
    },
  ];

  const [imageMoved, setImageMoved] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoClick = (video) => {
    setMainVideo(video);
    setImageMoved(true);
    setVideoPlaying(false);
  };

  const handlePlayClick = () => {
    setVideoPlaying(true);
  };

  // Define handleMateriClick for navigation on card click
  const handleMateriClick = (pageUrl) => {
    navigate(pageUrl);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl mt-20">
      <div className="w-full mt-6 flex justify-center items-center z-10 relative" style={{ marginTop: '50px' }}>
        <input
          type="text"
          placeholder="Cari Materi"
          className="w-full sm:w-96 px-6 py-3 border-2 border-[#609AC1] bg-white text-[#609AC1] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 font-railway"
          style={{ marginBottom: '80px' }}
        />
      </div>

      {/* Main Video Section */}
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center font-railway" style={{ marginBottom: '80px' }}>
          Materi
        </h1>

        <div className="mt-6 w-full max-w-4xl flex justify-center mx-auto">
          <div className={`relative ${imageMoved ? 'mt-24' : ''} transition-all duration-500`}>
            <iframe 
              width="700"  
              height="390" 
              src={mainVideo.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {imageMoved && !videoPlaying && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-4 cursor-pointer"
                onClick={handlePlayClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-8 h-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.293 5.293a1 1 0 011.414 0L10 7.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Container for description */}
        <div className="mt-8 w-full max-w-3xl p-6 rounded-lg shadow-lg mx-auto" style={{ marginTop: '80px' }}>
          <h2 className="text-xl font-semibold text-left font-railway">{mainVideo.title}</h2>
          <p className="mt-4 text-black text-left font-railway">{mainVideo.description}</p>
          <p className="mt-1 text-black text-sm font-railway">Oleh WISER</p>
          <p className="text-black text-sm font-semibold font-railway">{mainVideo.Duration}</p>
        </div>
      </div>

      {/* Other Videos Section */}
      <div className="mb-8" style={{ marginTop: '80px' }}>
        <h2 className="text-2xl font-semibold mb-4 font-railway">Selanjutnya</h2>
        <div className="grid grid-cols-1 gap-6">
          {otherVideos.map((video, index) => (
            <div
              key={index}
              onClick={() => handleVideoClick(video)}
              className="cursor-pointer bg-white rounded shadow hover:shadow-lg transition-shadow p-4 flex flex-col md:flex-row items-center"
              style={{ marginBottom: '80px' }}
            >
              <div className="flex flex-col md:flex-row items-center w-full">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-[415px] h-[223px] object-cover rounded-t-lg mx-auto"
                />
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <h3 className="text-lg font-semibold font-railway">{video.title}</h3>
                  <p className="text-black text-sm mt-2 font-railway">{video.description}</p>
                  <p className="mt-1 text-black text-sm font-railway">Oleh WISER</p>
                  <p className="text-black text-sm font-semibold font-railway">{video.Duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Materi Lainnya Section */}
      <div className="border-t-4 border-[#DCE8F3] w-full mb-6" style={{ marginBottom: '80px' }}></div>
      <h2 className="text-2xl font-semibold text-center mb-4 font-railway">Materi Lainnya</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-5xl mx-auto" style={{ marginBottom: '80px' }}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative cursor-pointer bg-[#DCE8F3] rounded-lg overflow-hidden shadow-lg p-6"
            onClick={() => handleMateriClick(card.pageUrl)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-[258px] h-[180px] object-cover mx-auto mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black font-railway">{card.title}</h3>
              <p className="text-sm text-black mt-2 font-railway">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '150px' }}></div>
    </div>
  );
};

export default MateriVidPage1;
