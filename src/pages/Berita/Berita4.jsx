import React from "react";

import mainphoto from "../../assets/berita/4.1.png";
import secondaryPhoto1 from "../../assets/berita/1.2.png";
import "../../App.css"; // Untuk CSS custom transition
import BeritaCarousel from "../../component/BeritaCarousel";

const Berita4 = () => {
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
      Sarang Burung Walet, Emas Putih Asia Tenggara dengan Segudang Manfaat untuk Kesehatan dan Kecantikan
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
  Sarang burung walet, yang hanya ditemukan di Asia Tenggara, menjadi salah satu komoditas paling dicari di dunia karena diyakini memiliki banyak manfaat bagi kesehatan dan kecantikan. Burung walet ini hanya bisa hidup di daerah dengan curah hujan tinggi, seperti Indonesia, Thailand, Filipina, dan Vietnam, membuat wilayah-wilayah ini menjadi produsen utama sarang burung walet.
  </p>
  <br />
  <p>
  Sarang burung walet terbuat dari air liur burung yang aktif diproduksi menjelang fase bertelur. Cairan air liur tersebut secara alami mengental dan mengering menjadi struktur keras yang mirip bihun. Proses pembuatan sarang yang biasanya dibangun di langit-langit gua atau gedung tinggi ini memakan waktu hingga delapan minggu, yang membantu burung walet menghindari predator. Namun, daya tarik utama sarang burung walet terletak pada manfaat kesehatannya yang luar biasa.
  </p>
  <br />
  <p>
  Para ahli kesehatan percaya bahwa sarang burung walet memiliki sejumlah kandungan nutrisi yang bermanfaat. Salah satunya adalah kemampuannya dalam memperkuat imunitas tubuh. Berkat kandungan mineral dan antioksidan yang kaya, sarang burung walet mampu membantu tubuh melawan radikal bebas dan menjaga daya tahan tubuh tetap optimal.
  </p>
  <br />
  <p>
  Tak hanya itu, konsumsi sarang burung walet juga diketahui baik untuk kesehatan jantung. Kandungan tembaga yang ada di dalamnya mampu menurunkan kadar kolesterol dan tekanan darah, yang secara efektif dapat mencegah berbagai penyakit kardiovaskular.
  </p>
  <br />
  <p>
  Bagi penderita gangguan tulang, sarang burung walet juga memberikan manfaat besar. Kesehatan tulang dapat terbantu karena kandungan asam amino dan fenilalanin yang mampu mempercepat penyerapan vitamin D, penting untuk pemulihan tulang.
  </p>
  <br />
  <p>
  Sarang burung walet bahkan direkomendasikan untuk ibu hamil karena kandungan asam folatnya yang tinggi. Asam folat memainkan peran penting dalam perkembangan janin, menjadikannya pilihan yang baik untuk dikonsumsi selama masa kehamilan.
  </p>
  <br />
  <p>
  Selain untuk kesehatan, sarang burung walet juga banyak digunakan dalam dunia kecantikan. Produk perawatan kulit berbasis sarang burung walet dikenal mampu memudarkan kerutan dan flek hitam pada wajah. Proses peremajaan kulit ini efektif dalam mengurangi tanda-tanda penuaan, membuat kulit tampak lebih muda dan segar.
  </p>
  <br />
  <p>
  Tidak hanya itu, sarang burung walet juga diyakini dapat mencerahkan kulit. Kandungan salic acid di dalamnya membantu menjaga kelembapan kulit, membuatnya terlihat cerah dan glowing alami.
  </p>
  <br />
  <p>
  Dengan segudang manfaat yang dimilikinya, sarang burung walet telah menjelma menjadi komoditas berharga yang tidak hanya memberikan keuntungan ekonomi bagi masyarakat Asia Tenggara, tetapi juga memberikan manfaat besar bagi kesehatan dan kecantikan di seluruh dunia.
  </p>

  <p className="text-black font-bold mt-6">
    Referensi:
    <br />
    <a
      href="https://kids.grid.id/read/473753321/13-fakta-menarik-burung-walet-yang-hanya-bisa-ditemukan-di-asia-tenggara?page=all 
https://realfood.co.id/artikel/sejarah-sarang-burung-walet "
      target="_blank"
      rel="noopener noreferrer"
      className="text-iconig font-normal ml-1"
    >
      https://kids.grid.id/read/473753321/13-fakta-menarik-burung-walet-yang-hanya-bisa-ditemukan-di-asia-tenggara?page=all 
      https://realfood.co.id/artikel/sejarah-sarang-burung-walet 
    </a>
    <br />
    
  </p>
</div>

<BeritaCarousel/>


      
    </div>
  );
};

export default Berita4;
