import React, { useState } from "react";
import ArticleCard from "../component/ArticleCard";
import mainphoto from "../assets/photo-article/main.png"
import photo1 from "../assets/photo-article/1.png"
import photo2 from "../assets/photo-article/2.png"
import photo3 from "../assets/photo-article/3.png"
import photo4 from "../assets/photo-article/4.png"
import photo5 from "../assets/photo-article/5.png"
import photo6 from "../assets/photo-article/6.png"

const articles = [
  // Ganti dengan data artikel Anda, masing-masing artikel memiliki id, gambar, judul, deskripsi, dan link ke halaman artikel.
  {
    id: 1,
    image: photo1,
    title: "Kandungan Nitrit pada Sarang Burung Walet dan Dampaknya terhadap Kesehatan",
    description:
      "Sarang burung walet dihasilkan oleh empat spesies utama (Collocalia fuciphaga, Collocalia germanis, Collocalia maxima, dan Collocalia unicolour) melalui air liur yang diproduksi oleh kelenjar di bawah lidah. ",
    link: "/blogartikel",
  },
  {
    id: 2,
    image: photo2,
    title: "Potensi Budidaya Sarang Burung Walet di Indonesia",
    description:
      "Indonesia dikenal sebagai salah satu negara penghasil sarang burung walet terbesar di dunia. Produk ini memiliki nilai ekonomi tinggi, terutama di pasar internasional seperti China dan negara-negara Asia lainnya",
    link: "/blogartikel2",
  },
  {
    id: 3,
    image: photo3,
    title: "Pemanfaatan Teknologi Kecerdasan Buatan dalam Rumah Budidaya Walet",
    description:
      "Teknologi adalah suatu sistem yang dirancang oleh manusia dengan tujuan untuk mempermudah dan menghasilkan tingkat efisiensi dan efektifitas dengan memberikan dampak yang besar.",
    link: "/blogartikel3",
  },
  {
    id: 4,
    image: photo4,
    title: "Walet:Burung Kecil dengan Nilai Ekonomi Tinggi",
    description:
      "Walet adalah jenis burung kecil yang dikenal luas karena sarangnya yang memiliki nilai ekonomi tinggi. Sarang burung walet terbuat dari air liur burung tersebut. ",
    link: "/blogartikel4",
  },
  {
    id: 5,
    image: photo5,
    title: "Jenis Parfum Aroma Walet Yang Digunakan Peternak Walet",
    description:
      "Indonesia dikenal sebagai salah satu negara penghasil sarang burung walet terbesar di dunia. Produk ini memiliki nilai ekonomi tinggi, terutama di pasar internasional seperti China dan negara-negara Asia lainnya. ",
    link: "/blogartikel5",
  },
  {
    id: 6,
    image: photo6,
    title: "Penghambat Perkembangan Rumah Burung Walet",
    description:
      "Dalam usaha budidaya sarang burung walet tidak sedikit peternak walet yang mengeluhkan bahwa gedungnya kurang optimal.",
    link: "/blogartikel6",
  },
  {
    id: 3,
    image: photo3,
    title: "Pemanfaatan Teknologi Kecerdasan Buatan dalam Rumah Budidaya Walet",
    description:
      "Teknologi adalah suatu sistem yang dirancang oleh manusia dengan tujuan untuk mempermudah dan menghasilkan tingkat efisiensi dan efektifitas dengan memberikan dampak yang besar.",
    link: "/article/3",
  },
  {
    id: 4,
    image: photo4,
    title: "Walet:Burung Kecil dengan Nilai Ekonomi Tinggi",
    description:
      "Walet adalah jenis burung kecil yang dikenal luas karena sarangnya yang memiliki nilai ekonomi tinggi. Sarang burung walet terbuat dari air liur burung tersebut. ",
    link: "/article/4",
  },
  {
    id: 5,
    image: photo5,
    title: "Jenis Parfum Aroma Walet Yang Digunakan Peternak Walet",
    description:
      "Indonesia dikenal sebagai salah satu negara penghasil sarang burung walet terbesar di dunia. Produk ini memiliki nilai ekonomi tinggi, terutama di pasar internasional seperti China dan negara-negara Asia lainnya. ",
    link: "/article/5",
  },
  {
    id: 6,
    image: photo6,
    title: "Penghambat Perkembangan Rumah Burung Walet",
    description:
      "Dalam usaha budidaya sarang burung walet tidak sedikit peternak walet yang mengeluhkan bahwa gedungnya kurang optimal.",
    link: "/article/6",
  },
  // Tambahkan artikel lainnya di sini
];

const ArticleDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Logika pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
<div className=" mb-16 flex justify-center mt-10 pt-12">
  <div className="relative w-full max-w-md">
    {/* Icon Search */}
    <span className="absolute inset-y-0 left-3 flex items-center text-border">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2239 10.1538C17.2239 8.375 16.584 6.85337 15.3044 5.58894C14.0248 4.32452 12.4849 3.69231 10.6846 3.69231C8.88439 3.69231 7.34446 4.32452 6.06484 5.58894C4.78521 6.85337 4.1454 8.375 4.1454 10.1538C4.1454 11.9327 4.78521 13.4543 6.06484 14.7188C7.34446 15.9832 8.88439 16.6154 10.6846 16.6154C12.4849 16.6154 14.0248 15.9832 15.3044 14.7188C16.584 13.4543 17.2239 11.9327 17.2239 10.1538ZM24.6973 22.1538C24.6973 22.6538 24.5124 23.0865 24.1426 23.4519C23.7728 23.8173 23.3349 24 22.8289 24C22.3034 24 21.8655 23.8173 21.5152 23.4519L16.5086 18.5192C14.7668 19.7115 12.8254 20.3077 10.6846 20.3077C9.2931 20.3077 7.96238 20.0409 6.69249 19.5072C5.42259 18.9736 4.32785 18.2524 3.40827 17.3438C2.48869 16.4351 1.75887 15.3534 1.2188 14.0986C0.678727 12.8438 0.408691 11.5288 0.408691 10.1538C0.408691 8.77885 0.678727 7.46394 1.2188 6.20913C1.75887 4.95433 2.48869 3.8726 3.40827 2.96394C4.32785 2.05529 5.42259 1.33413 6.69249 0.800481C7.96238 0.266827 9.2931 0 10.6846 0C12.0762 0 13.4069 0.266827 14.6768 0.800481C15.9467 1.33413 17.0414 2.05529 17.961 2.96394C18.8806 3.8726 19.6104 4.95433 20.1505 6.20913C20.6905 7.46394 20.9606 8.77885 20.9606 10.1538C20.9606 12.2692 20.3572 14.1875 19.1506 15.9087L24.1572 20.8558C24.5172 21.2115 24.6973 21.6442 24.6973 22.1538Z" fill="#246AA4"/>
</svg>

    </span>
    
    {/* Input Field */}
    <input
      type="text"
      placeholder="Cari Blog Artikel"
      className="w-full pl-10 pr-4 py-2 rounded-[7px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>
</div>


      {/* Header */}
      <h1 className="text-[70px] font-extrabold text-center mb-8 ">Blog Artikel</h1>

      {/* Gambar Banner */}
      <div className="flex justify-center mb-20">
        <img
          src={mainphoto}
          alt="Main Banner"
          className="rounded-lg shadow-md w-full max-w-4xl h-auto object-cover"
        />
      </div>

      {/* Container utama untuk kartu artikel */}
<div className="container mx-auto px-4">
  {/* Kartu Artikel */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto justify-items-center">
    {currentArticles.map((article) => (
      <ArticleCard
        key={article.id}
        image={article.image}
        title={article.title}
        description={article.description}
        link={article.link}
      />
    ))}
  </div>
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
              currentPage === page + 1 ? "bg-customBlue text-click" : " text-gray-700"
            } font-semibold hover:bg-blue-400`}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 my-6 rounded-full text-gray-700 font-semibold hover:bg-gray-300 "
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ArticleDashboard;
