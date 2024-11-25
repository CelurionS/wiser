import React from "react";

import mainphoto from "../../assets/berita/9.1.png";
import secondaryPhoto1 from "../../assets/berita/1.2.png";
import "../../App.css"; // Untuk CSS custom transition
import BeritaCarousel from "../../component/BeritaCarousel";

const Berita9 = () => {
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
      Pemanfaatan Teknologi Kecerdasan Buatan dalam Rumah Budidaya Walet
      </h2>
      <p className="text-center text-2xl text-[#999494] font-light mb-20">
        oleh Wiser / 20 Okt 2024
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
  Teknologi adalah suatu sistem yang dirancang oleh manusia dengan tujuan untuk mempermudah dan menghasilkan tingkat efisiensi dan efektifitas dengan memberikan dampak yang besar dengan meminimalkan tenaga manusia. 
  </p>
  <br />
  <p>
  Dilansir dari mediaindonesia.com, salah satu eksportir sarang burung walet di Indonesia, yaitu PT. Estra Indonesia bekerja sama dengan CV. Nore Inovasi mengembangkan berbagai teknologi terapan yang memfokuskan pada peningkatkan kualitas produksi sarang burung walet yang berkualitas tinggi sesuai dengan standar pengolahan bahan pangan internasional dengan memproses sarang burung walet tanpa adanya campruran bahan kimia.
  </p>
  <br />
  <p>
  Mereka menciptakan teknologi kecerdasan buatan (AI) yang dinamai Walet Smart untuk menjaga kualitas dan produktifitas burung walet dengan menggunakan berbagai teknologi untuk menjaga rumah budidaya tetap ideal bagi berkembangnya burung walet, dari mulai suhu udara,tingkat kelembaban, pencahayan, dan faktor-faktor lainnya. Dengan menggunakan sensor yang digabungkan dengan sistem AI, Walet Smart juga dapat menghitung jumlah populasi dan hasil petik yang mana dapat dikontrol secara online.
  </p>

  <p className="text-black font-bold mt-6">
    Referensi:
    <br />
    <a
      href="https://rm.id/baca-berita/ekonomi-bisnis/172576/pt-esta-indonesia-resmikan-rumah-budidaya-walet-smart-pertama-di-dunia"
      target="_blank"
      rel="noopener noreferrer"
      className="text-iconig font-normal ml-1"
    >
      https://rm.id/baca-berita/ekonomi-bisnis/172576/pt-esta-indonesia-resmikan-rumah-budidaya-walet-smart-pertama-di-dunia 
  
    </a>
    <br />
    <a
      href="https://ekonomi.republika.co.id/berita/ruyx2k490/canggih-eksportir-sarang-burung-walet-ini-pakai-teknologi-ai"
      target="_blank"
      rel="noopener noreferrer"
      className="text-iconig font-normal ml-1"
    >
      https://ekonomi.republika.co.id/berita/ruyx2k490/canggih-eksportir-sarang-burung-walet-ini-pakai-teknologi-ai  
    </a>
  </p>
</div>

<BeritaCarousel/>


      
    </div>
  );
};

export default Berita9;