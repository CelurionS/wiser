import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import berita1 from "../../assets/berita/1.1.png";
import berita2 from "../../assets/berita/2.1.png";
import berita3 from "../../assets/berita/3.1.png";
import berita4 from "../../assets/berita/4.1.png";
import berita5 from "../../assets/berita/5.1.png";
import berita6 from "../../assets/berita/6.1.png";
import berita7 from "../../assets/berita/7.1.png";
import berita8 from "../../assets/berita/8.1.png";
import berita9 from "../../assets/berita/9.1.png";
import berita10 from "../../assets/berita/10.1.png";
import berita11 from "../../assets/berita/11.1.png";
import berita12 from "../../assets/berita/12.1.png";
import berita13 from "../../assets/berita/13.1.png";
import berita14 from "../../assets/berita/14.1.png";

import "../../App.css"; // CSS custom 


// Data berita dengan custom `link`
const beritaData = [
  {
    id: 1,
    title: 'Pemanfaatan Teknologi Kecerdasan Buatan dalam Rumah Budidaya Walet',
    image: berita9,
    link: '/berita/9',
  },
  {
    id: 2,
    title: 'Sarang Burung Walet dalam Pengobatan Tradisional Tiongkok Bahan Alami dengan Segudang Manfaat',
    image: berita10,
    link: '/berita/10',
  },
  {
    id: 3,
    title: 'Menuju Sukses dengan Budidaya Sarang Burung Walet',
    image: berita11,
    link: '/berita/11',
  },
  {
    id: 4,
    title: 'Dewan Minta Pengusaha Walet Taat Pajak',
    image: berita12,
    link: '/berita/12',
  },
  {
    id: 5,
    title: 'Nilai Ekspor Sarang Burung Walet ke Tiongkok Alami Peningkatan',
    image: berita13,
    link: '/berita/13',
  },
  {
    id: 6,
    title: 'Bikin Resah Warga Gunung Mas, Komplotan Pencuri Sarang Walet Dibekuk Polisi',
    image: berita14,
    link: '/berita/14',
  },
  {
    id: 6,
    title: 'Bikin Resah Warga Gunung Mas, Komplotan Pencuri Sarang Walet Dibekuk Polisi',
    image: berita14,
    link: '/berita/14',
  },
  // Tambahkan data jika mau 
];

// Data berita dengan custom `link`
const beritaMain = {
  title: 'Sarang Burung Walet Jadi Andalan Ekspor Jateng Saat Pandemi',
  image: berita1,
  link: '/berita/1', // Link custom untuk gambar utama
};
const sideBeritaData = [
  {
    title: 'Inovasi Pencucian Sarang Burung Walet: Dosen UWKS Raih Penghargaan Indolivestock',
    image: berita2,
    link: '/berita/2',
  },
  {
    title: 'Potensi Ekonomi Sarang Burung Walet',
    image: berita3,
    link: '/berita/3',
  },
];

// Data untuk artikel utama dan samping dengan custom `link`
const largeArticles = [
  {
    title: 'Sarang Burung Walet, Emas Putih Asia Tenggara dengan Segudang Manfaat untuk Kesehatan dan Kecantikan',
    image: berita4,
    link: '/berita/4', // Link khusus untuk artikel besar 1
  },
  {
    title: 'Cuan Menjulang dari Budi Daya Sarang Burung Walet',
    image: berita5,
    link: '/berita/5', // Link khusus untuk artikel besar 2
  },
];

const smallArticles = [
  {
    title: 'Harganya Rp7 Juta per Kg, Sarang Burung Walet Indonesia',
    image: berita6,
    link: '/berita/6', // Link khusus untuk artikel kecil 1
    date: '20 Okt 2024',
    description:
      'Indonesia memiliki kekayaan alam yang melimpah, baik dari darat, laut, maupun udara. Salah satu sumber daya yang...',
  },
  {
    title: 'Event Burung Walet di Palopo, Sulawesi Selatan 2024',
    image: berita7,
    link: '/berita/7', // Link khusus untuk artikel kecil 2
    date: '20 Okt 2024',
    description:
      'Pada bulan Oktober 2024, Kota Palopo di Sulawesi Selatan menyelenggarakan serangkaian acara yang fokus pada...',
  },
  {
    title: 'Peluang dan Tantangan Peternakan Burung Walet di...',
    image: berita8,
    link: '/berita/8', // Link khusus untuk artikel kecil 3
    date: '20 Okt 2024',
    description:
      'Peternakan burung walet kini mulai merambah daerah perkotaan, didorong oleh tingginya permintaan global...',
  },
];

const DashboardBerita = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(beritaData.length / itemsPerPage);
  const navigate = useNavigate();

  // Mendapatkan data berita untuk halaman saat ini
  const currentItems = beritaData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

   // Fungsi untuk mengarahkan ke halaman detail berita
   const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Search Bar */}
      <div className="mb-16 flex justify-center mt-24">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-3 flex items-center text-border">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2239 10.1538C17.2239 8.375 16.584 6.85337 15.3044 5.58894C14.0248 4.32452 12.4849 3.69231 10.6846 3.69231C8.88439 3.69231 7.34446 4.32452 6.06484 5.58894C4.78521 6.85337 4.1454 8.375 4.1454 10.1538C4.1454 11.9327 4.78521 13.4543 6.06484 14.7188C7.34446 15.9832 8.88439 16.6154 10.6846 16.6154C12.4849 16.6154 14.0248 15.9832 15.3044 14.7188C16.584 13.4543 17.2239 11.9327 17.2239 10.1538ZM24.6973 22.1538C24.6973 22.6538 24.5124 23.0865 24.1426 23.4519C23.7728 23.8173 23.3349 24 22.8289 24C22.3034 24 21.8655 23.8173 21.5152 23.4519L16.5086 18.5192C14.7668 19.7115 12.8254 20.3077 10.6846 20.3077C9.2931 20.3077 7.96238 20.0409 6.69249 19.5072C5.42259 18.9736 4.32785 18.2524 3.40827 17.3438C2.48869 16.4351 1.75887 15.3534 1.2188 14.0986C0.678727 12.8438 0.408691 11.5288 0.408691 10.1538C0.408691 8.77885 0.678727 7.46394 1.2188 6.20913C1.75887 4.95433 2.48869 3.8726 3.40827 2.96394C4.32785 2.05529 5.42259 1.33413 6.69249 0.800481C7.96238 0.266827 9.2931 0 10.6846 0C12.0762 0 13.4069 0.266827 14.6768 0.800481C15.9467 1.33413 17.0414 2.05529 17.961 2.96394C18.8806 3.8726 19.6104 4.95433 20.1505 6.20913C20.6905 7.46394 20.9606 8.77885 20.9606 10.1538C20.9606 12.2692 20.3572 14.1875 19.1506 15.9087L24.1572 20.8558C24.5172 21.2115 24.6973 21.6442 24.6973 22.1538Z"
                fill="#246AA4"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Cari Berita"
            className="w-full pl-10 pr-4 py-2 rounded-md border-2 text-border border-border focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>


      {/* Title */}
      <h1 className="text-[70px] font-extrabold text-center mb-16">Berita</h1>
      

      <div className="flex flex-col lg:flex-row gap-12 mb-16">
      {/* Main Image */}
      <div
        className="relative w-full lg:w-2/3 cursor-pointer"
        onClick={() => navigate(beritaMain.link)}
      >
        <img
          src={beritaMain.image}
          alt="Main Berita"
          className="rounded-lg shadow-md w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/[0.04] from-11% via-[#5F5F5F]/[0.52] via-30% to-[#323131]/[1.0] to-96% rounded-lg"></div>
        <div className="absolute bottom-4 left-4 right-4 p-4 z-20">
          <h2 className="text-white text-2xl font-semibold">{beritaMain.title}</h2>
        </div>
      </div>

      {/* Side Images */}
      <div className="flex flex-col w-full lg:w-1/3 gap-4">
        {sideBeritaData.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/[0.04] from-11% via-[#5F5F5F]/[0.52] via-30% to-[#323131]/[1.0] to-96% rounded-lg"></div>
            <div className="absolute bottom-2 left-2 right-2 p-2 z-20">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>

{/* Title */}
<div className="flex items-center justify-center mb-8">
  <h2 className="text-4xl font-bold">Berita Terbaru</h2>
  <hr className="flex-grow ml-4 border-t-4 border-black" />
</div>


<div className="flex flex-row gap-7 items-center mb-20">
      {/* Left Side - Two Large Articles */}
      <div className="col-span-2 space-y-6">
        {largeArticles.map((item, index) => (
          <div
            key={index}
            className="relative w-[540px] h-[302px] cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/[0.04] via-[#5F5F5F]/[0.52] to-[#323131]/[1.0] rounded-lg"></div>
            <div className="absolute bottom-3 left-3 p-4">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - List of Smaller Articles */}
      <div className="space-y-14">
        {smallArticles.map((item, index) => (
          <div
            key={index}
            className="flex gap-6 items-center cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[253px] h-[163px] object-cover rounded-lg shadow-md"
            />
            <div className="text-balance">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-xl text-black mt-3">oleh Wiser / {item.date}</p>
              <p className="text-[16px] text-black mt-2 text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


{/* Grid Berita */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
      {currentItems.map((item) => (
        <div
          key={item.id}
          onClick={() => handleNavigate(item.link)}
          className="relative w-auto h-[350px] rounded-lg shadow-md overflow-hidden cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Overlay dengan gradasi khusus */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/[0.04] via-[#5F5F5F]/[0.52] to-[#323131]/[1.0] rounded-lg"></div>
          <div className="absolute bottom-1 left-0 p-6">
            <h3 className="text-white font-semibold text-[20px]">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>

{/* Pagination */}
<div className="flex justify-center items-center mt-10 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-full text-gray-700 font-semibold hover:bg-gray-300 "
        >
          {"<"}
        </button>

        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page + 1)}
            className={`px-3 py-1 rounded-full ${
              currentPage === page + 1 ? "bg-customBlue " : "text-gray-700"
            } font-semibold hover:bg-blue-400`}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-full text-gray-700 font-semibold hover:bg-gray-300 "
        >
          {">"}
        </button>
      </div>


      
    </div>
  );
};

export default DashboardBerita;
