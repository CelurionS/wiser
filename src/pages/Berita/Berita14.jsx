import React from "react";

import mainphoto from "../../assets/berita/14.1.png";
import secondaryPhoto1 from "../../assets/berita/1.2.png";
import "../../App.css"; // Untuk CSS custom transition
import BeritaCarousel from "../../component/BeritaCarousel";

const Berita14 = () => {
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
      Bikin Resah Warga Gunung Mas, Komplotan Pencuri Sarang Walet Dibekuk Polisi
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
  Empat terduga pelaku pencurian sarang burung walet berhasil ditangkap oleh jajaran Kepolisian Sektor (Polsek) Kahayan Hulu Utara (Kahut), Gunung Mas, Kalteng, Selasa (03/09/24). Komplotan tersebut berhasil mencuri sarang walet milik korban Esrawino, yang terletak di Kelurahan Tumbang Miri, Kecamatan Kahayan Hulu Utara.
  </p>
  <br />
  <p>
  “Empat pelaku yang kami tangkap yakni R (19), MS (23), A (22) dan S (20),” ucap Kapolres Gumas AKBP Theodorus Priyo Santosa melalui Kapolsek Kahut Ipda Muklisin, Rabu (04/09/2024). Aksi pencurian itu terjadi pada Jumat (16/08/2024) lalu. Saat itu, korban yang baru pulang dari Kelurahan Tumbang Marikoi, Kecamatan Damang Batu mengecek kamera CCTV melalui gawai miliknya, namun CCTV yang terpasang di dalam bangunan sarang burung walet dalam keadaan mati atau offline. “Merasa ada yang tidak beres, korban mendatangi gedung sarang walet miliknya. Di sekitar bangunan, ditemukan dinding bangunan walet yang sudah dijebol orang yang tidak dikenal,” ujarnya. 
  </p>
  <br />
  <p>
  
Selanjutnya, korban masuk ke dalam gedung untuk mengambil memori CCTV dan mengecek sarang burung walet-nya. Namun ternyata sudah dipanen oleh para pelaku. “Atas kejadian tersebut, korban mengalami kerugian materil sebesar Rp10.400.000, dan melaporkannya ke Mapolsek Kahut,” jelasnya. Setelah menerima laporan korban, personel Polsek Kahut langsung bergerak untuk menangkap para pelaku pada Sabtu (31/08/2024) malam pukul 23.30 WIB. “Selain keempat pelaku, kami juga mengamankan barang bukti berupa sarang burung walet seberat 1,4 kilogram, satu pahat terbuat dari besi yang dipakai untuk memanen walet dan satu bilah pisau,” terangnya. Saat ini, lanjut dia, keempat pelaku telah diamankan dan dilimpahkan ke Satreskrim Polres Gumas untuk menjalani pemeriksaan. Kasus ini masih didalami untuk mengungkap motif dan kemungkinan adanya pelaku lain. “Keempat pelaku ini akan dijerat dengan pasal 363 Ayat 1 ke-4e dan ke-5e KUHPidana Junto Pasal 362 KUHPidana dengan ancaman hukuman lebih dari lima tahun penjara,” tegasnya tersebut, korban mengalami kerugian materil sebesar Rp10.400.000, dan melaporkannya ke Mapolsek Kahut,” jelasnya.
  </p>
  

  <p className="text-black font-bold mt-6">
    Referensi:
    <br />
    <a
      href="https://www.radarsampit.com/berita/bikin-resah-warga-gunung-mas-komplotan-pencuri-sarang-walet-dibekuk-polisi.html"
      target="_blank"
      rel="noopener noreferrer"
      className="text-iconig font-normal ml-1"
    >
      https://www.radarsampit.com/berita/bikin-resah-warga-gunung-mas-komplotan-pencuri-sarang-walet-dibekuk-polisi.html
    </a>
    <br />
  </p>
</div>

<BeritaCarousel/>


      
    </div>
  );
};

export default Berita14;
