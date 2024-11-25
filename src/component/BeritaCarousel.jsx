import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi
import "../App.css"; // Untuk CSS custom transition
import carousel1 from "../assets/carousel/1.1.png";
import carousel2 from "../assets/carousel/1.2.png";
import carousel3 from "../assets/carousel/1.3.png";

const BeritaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Menginisialisasi navigasi

  const articles = [
    {
      id: 1,
      title: 'Nilai Ekspor Sarang Burung Walet ke Tiongkok Alami Peningkatan',
      content: 'BADAN Karantina Indonesia berkomitmen untuk mendukung dan memfasilitasi ekspor sarang burung walet Indonesia ke Tiongkok. Komitmen itu diwujudkan melalui serangkaian langkah strategis yang diambil dalam kunjungan kerjanya ke Tiongkok dan kunjungan delegasi Barantin ke Yanzhiwu Ecological Industrial Park di Tongan District, Xiamen, Tiongkok pada 10 Juni 2024.Yanzhiwu adalah perusahaan penjual produk sarang burung walet terbesar di Tiongkok yang terdepan...',
      image: carousel1,
      link: '/berita/13', 
    },
    {
      id: 2,
      title: 'Cuan Menjulang dari Budi Daya Sarang Burung Walet',
      content: 'Indonesia dikenal sebagai negara yang kaya akan sumber daya alam, baik dari darat, laut, maupun udara. Nah, salah satu kekayaan alam yang menjadi sorotan dunia adalah sarang burung walet. Indonesia merupakan produsen utama sarang burung walet di dunia. Sarang burung walet punya nilai ekonomi yang cukup tinggi, utamanya di pasar internasional. Negara-negara seperti China, Hong Kong, Singapura, Vietnam dan Malaysia merupakan pembeli utama sarang burung walet dari Indonesia...',
      image: carousel2,
      link: '/berita/5', // Link ke halaman artikel 2
    },
    {
      id: 3,
      title: 'Sarang Burung Walet dalam Pengobatan Tradisional Tiongkok: Bahan Alami dengan Segudang Manfaat',
      content: 'Sarang burung walet telah lama dikenal sebagai salah satu bahan paling berharga dalam pengobatan tradisional Tiongkok. Sejak zaman Dinasti Ming, sarang ini digunakan sebagai tonik kesehatan yang diyakini dapat memperpanjang umur, meningkatkan vitalitas, dan memperkuat sistem kekebalan tubuh. Manfaatnya yang kaya membuat sarang burung walet tidak hanya diminati di Tiongkok, tetapi juga di negara...',
      image: carousel3,
      link: '/berita/10', // Link ke halaman artikel 3
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 3000); // Pindah setiap 3 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, [articles.length]);

  // Fungsi untuk menangani klik artikel dan navigasi ke halaman yang sesuai
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container mx-auto px-6 py-8 mb-12">
      <h2 className="text-[40px] font-regular text-center mb-12">Berita Lainnya</h2>
      <div className="relative flex overflow-hidden w-auto mx-auto leading-relaxed">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="min-w-full p-4 bg-white rounded-lg flex flex-col md:flex-row items-center cursor-pointer"
              onClick={() => handleClick(article.link)} // Menambahkan onClick untuk navigasi
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-auto h-96 object-cover rounded-lg"
              />
              <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                <h3 className="text-2xl font-extrabold text-fontblue text-justify">
                  {article.title}
                </h3>
                <br />
                <p className="text-fontblue font-medium mt-2 text-[18px] text-justify">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeritaCarousel;
