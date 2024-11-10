import React from "react";

import mainphoto from "../../assets/berita/1.1.png";
import secondaryPhoto1 from "../../assets/berita/1.2.png";
import "../../App.css"; // Untuk CSS custom transition
import BeritaCarousel from "../../component/BeritaCarousel";

const Berita1 = () => {
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
      <h1 className="text-[70px] font-extrabold text-center mb-8 ">
        Berita
      </h1>
      <h2 className="text-[40px] font-semibold text-center text-black mb-8">
      Sarang Burung Walet Jadi Andalan Ekspor Jateng Saat Pandemi
      </h2>
      <p className="text-center text-2xl text-[#999494] font-light mb-20">
        oleh Wiser / 19 Okt 2024
      </p>

      {/* Main Image */}
      <div className="flex justify-center mb-10">
        <img
          src={mainphoto}
          alt="Main Berita"
          className="rounded-lg shadow-md w-full  h-auto object-cover"
        />
      </div>

      {/* Article Content */}
<div className="prose prose-lg max-w-fit mx-auto text-xl text-justify mb-16 mt-20 text-black leading-relaxed border-b-[3px] pb-[40px] border-border">
  <p>
    Aktivitas ekspor sarang burung walet dari Jawa Tengah (Jateng) mengalami peningkatan yang cukup signifikan selama masa pandemi Covid-19. Kepala Balai Karantina Pertanian Kelas IA Semarang, Parlin Robert Sitanggang, mengatakan sarang burung walet dalam dua tahun terakhir menjadi hasil peternakan unggulan bagi Jateng. Hal itu terbukti dari nilai ekspor sarang burung walet di Jateng yang pada 2020 lalu mencapai Rp1,4 triliun. “Selama 2020 kemarin kita mampu mengekspor 64 ton sarang walet. Itu nilai transaksinya mencapai Rp1,4 triliun."
  </p>

  {/* Secondary Images and Text */}
  <div className="flex flex-col md:flex-row gap-8 my-8 items-center lg:justify-between md:max-w-fit mx-auto">
    <p className="text-black w-8/12  ">
      Karena ibaratnya emas putih. Nilai jualnya sangat tinggi. Untuk itulah, kegiatan ekspornya kita kebut terus,” ujar Parlin kepada wartawan di Semarang, Kamis (21/1/2021). Parlin menambahkan produk sarang burung walet di Jateng selama ini banyak dihasilkan peternak dari Kabupaten Magelang, Demak, Kota Semarang, dan Rembang. Sedang proses produksi selama ini mengandalkan pabrik yang ada di Kota Semarang. Produk tersebut, lanjut Parlin, selama ini banyak diekspor ke berbagai negara di Asia dan Amerika seperti Taiwan, Tiongkok, Australia, Hongkong, Kanada, Thailand, hingga Amerika Serikat. “Ada empat eksportir di Semarang yang rutin mengirim produknya ke Amerika Serikat. Kalau ke Tiongkok pasarnya sekarang cukup ketat. Kalau di Vietnam, Australia, Kanada, dan Taiwan aturannya agak longgar,” imbuh Parlin.
    </p>

    <img
      src={secondaryPhoto1}
      alt="Secondary"
      className=" shadow-md w-[380px]  h-[340px] object-cover"
    />
  </div>

  <p className="font-semibold mt-8 leading-relaxed">Memiliki Sederet Manfaat</p>
  
  <p>
    Sarang burung walet selama ini memang banyak diminati di pasaran, karena dipercaya memiliki sederet manfaat bagi kesehatan dan kecantikan tubuh. Target nilai ekspor di Jateng pada 2021 ini, Parlin mengaku pada tahun ini menargetkan hingga Rp4,3 triliun. Angka ini naik dibanding 2020 lalu yang mencapai Rp4,1 triliun. “Kalau tahun kemarin kita bisa mencetak nilai ekspor mencapai Rp4,1 triliun, tahun ini harus meningkat. Kita targetkan Rp4,3 triliun. Meski pun situasi saat ini masih pandemi,” tuturnya.
  </p>

  <p className="text-black font-bold mt-6">
    Referensi:
    <br />
    <a
      href="https://regional.espos.id/sarang-burung-walet-jadi-andalan-ekspor-jateng-saat-pandemi-1103486"
      target="_blank"
      rel="noopener noreferrer"
      className="text-iconig font-normal ml-1"
    >
      Sarang Burung Walet Jadi Andalan Ekspor Jateng Saat Pandemi - Espos.id | Espos Indonesia dari Solo untuk Indonesia 
    </a>
  </p>
</div>

<BeritaCarousel/>


      
    </div>
  );
};

export default Berita1;
