import React, { useState } from "react";

import mainphoto from "../assets/blog-article/4.1.png";
import secondaryPhoto1 from "../assets/blog-article/3.2.png";
import "../App.css"; // Untuk CSS custom transition
import { useRef } from "react";
import { Transition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import CommentSection from "../component/CommentSection";

const BlogArticle4 = () => {
  const [showComments, setShowComments] = useState(false);
  const commentsRef = useRef(null);
  const navigate = useNavigate();

  const comments = [
    {
      id: 1,
      name: "Aura Kostelani",
      time: "5 jam yang lalu",
      text: "Burung walet umumnya ditemukan di wilayah Asia Tenggara, termasuk Indonesia, Malaysia, Thailand, dan Vietnam. Mereka cenderung memilih habitat yang lembab dan dekat dengan sumber air, seperti gua-gua di tebing pantai, danau, serta bangunan tua yang tidak terganggu oleh aktivitas manusia.",
    },
    {
      id: 2,
      name: "Muhammad Rayhan",
      time: "7 jam yang lalu",
      text: "Sarang burung walet kaya akan protein, asam amino, dan berbagai mineral penting yang dianggap dapat meningkatkan sistem kekebalan tubuh, memperbaiki jaringan kulit, dan meningkatkan kesehatan secara keseluruhan.",
    },
    {
      id: 3,
      name: "Bang Yassar Nur Fajri",
      time: "12 jam yang lalu",
      text: "Di habitat alaminya, burung walet membuat sarang di gua-gua yang gelap dan lembab. Kondisi ini sangat mendukung pertumbuhan sarang yang kuat dan berkualitas tinggi. Gua-gua ini biasanya memiliki suhu yang konstan dan kelembapan tinggi, faktor-faktor yang penting untuk proses pembentukan sarang.",
    },
  ];

  const toggleComments = () => {
    setShowComments(!showComments);
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
            placeholder="Cari Blog Artikel"
            className="w-full pl-10 pr-4 py-2 rounded-md border-2 text-border border-border focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-border"
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-[70px] font-extrabold text-center mb-8 ">
        Blog Artikel
      </h1>
      <h2 className="text-[40px] font-semibold text-center text-black mb-8">
        Walet:Burung Kecil dengan Nilai Ekonomi Tinggi
      </h2>
      <p className="text-center text-2xl text-[#999494] font-light mb-20">
        oleh Wiser / 23 Okt 2024
      </p>

      {/* Main Image */}
      <div className="flex justify-center mb-10">
        <img
          src={mainphoto}
          alt="Main Blog"
          className="rounded-lg shadow-md w-full  h-auto object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-fit text-xl text-justify mb-16 mt-20 text-black leading-relaxed">
        <p>
          Walet adalah jenis burung kecil yang dikenal luas karena sarangnya
          yang memiliki nilai ekonomi tinggi. Sarang burung walet terbuat dari
          air liur burung tersebut dan dianggap sebagai salah satu bahan makanan
          yang paling mahal di dunia, terutama di negara-negara Asia. Burung
          walet bukan hanya menarik dari segi ekonomi, tetapi juga memiliki
          beberapa aspek biologis dan ekologi yang menarik untuk dipelajari.
          Artikel ini akan mengupas tuntas berbagai aspek tentang burung walet,
          mulai dari habitat, perilaku, hingga nilai ekonominya.
        </p>
        <br />
        <p>
          Burung walet umumnya ditemukan di wilayah Asia Tenggara, termasuk
          Indonesia, Malaysia, Thailand, dan Vietnam, dengan preferensi habitat
          di daerah yang lembab dan dekat dengan sumber air. Mereka seringkali
          memilih gua-gua di tebing pantai, danau, atau bahkan bangunan tua yang
          tidak terganggu oleh aktivitas manusia. Di habitat alaminya, burung
          walet membangun sarang di gua-gua yang gelap dan lembab, yang
          menyediakan suhu konstan dan kelembapan tinggi, faktor yang sangat
          mendukung proses pembentukan sarang yang kuat dan berkualitas tinggi.
          Seiring dengan meningkatnya permintaan akan sarang burung walet,
          banyak peternak mulai membangun habitat buatan berupa rumah walet yang
          dirancang untuk meniru kondisi gua alami. Rumah walet ini bertujuan
          menciptakan lingkungan optimal bagi burung walet untuk berkembang biak
          dan membuat sarang.
        </p>
        <br />
        <p>
          Selain tempat tinggalnya, perilaku dan kebiasaan burung walet juga
          sangat menarik untuk dipelajari. Burung ini dikenal karena kemampuan
          terbangnya yang luar biasa, menghabiskan sebagian besar hidup mereka
          di udara untuk mencari makanan berupa serangga kecil yang mereka
          tangkap saat terbang. Sebagian besar spesies burung walet adalah
          migran, berpindah dari satu tempat ke tempat lain mengikuti
          ketersediaan makanan dan kondisi cuaca, terutama pada pergantian
          musim. Dalam hal reproduksi, burung walet memiliki kebiasaan unik
          dalam membuat sarang dari air liur mereka yang mengandung protein
          tinggi. Sarang ini sangat lengket, dan setelah selesai, betina akan
          bertelur di dalamnya, biasanya hanya dua hingga tiga butir dalam satu
          siklus reproduksi.
        </p>
        <br />
        <p>
          Sarang burung walet memiliki nilai ekonomi yang sangat tinggi,
          terutama di pasar Asia, karena tidak hanya digunakan dalam berbagai
          hidangan gourmet tetapi juga dianggap memiliki khasiat kesehatan yang
          luar biasa. Sarang ini kaya akan protein, asam amino, dan berbagai
          mineral penting yang dapat meningkatkan sistem kekebalan tubuh,
          memperbaiki jaringan kulit, dan meningkatkan kesehatan secara
          keseluruhan. Di China, sarang burung walet telah digunakan dalam
          pengobatan tradisional selama berabad-abad, menjadikannya komoditas
          yang sangat dihargai. Pasar utama untuk sarang burung walet adalah
          China, Hong Kong, dan Taiwan, di mana harga sarang walet premium bisa
          mencapai ribuan dolar per kilogram, tergantung pada kualitasnya.
          Permintaan yang tinggi ini mendorong banyak peternak di Asia Tenggara
          untuk berinvestasi dalam bisnis rumah walet.
        </p>
        <br />
        <p>
          Meskipun bisnis sarang burung walet sangat menguntungkan, ada beberapa
          tantangan yang perlu dihadapi, terutama terkait dengan masalah
          lingkungan. Eksploitasi berlebihan terhadap burung walet dan sarangnya
          dapat mengganggu keseimbangan ekosistem, terutama jika pengambilan
          sarang dilakukan tanpa memperhatikan siklus reproduksi burung. Selain
          itu, pembangunan rumah walet di daerah yang sebelumnya tidak dihuni
          oleh burung walet dapat menyebabkan perubahan habitat dan mengganggu
          spesies lokal lainnya. Penggunaan bahan kimia dan pestisida di sekitar
          rumah walet juga bisa membahayakan kesehatan burung dan lingkungan
          sekitarnya.
        </p>
        <br />
        <p>
          Untuk mengatasi tantangan ini, berbagai upaya konservasi telah
          dilakukan, seperti pengelolaan berkelanjutan dan pendidikan
          masyarakat. Peternak dianjurkan untuk mempraktikkan pengelolaan yang
          bijaksana, termasuk hanya mengambil sarang pada waktu yang tepat agar
          burung walet tetap dapat berkembang biak dengan baik. Beberapa negara
          juga telah menetapkan regulasi ketat mengenai perdagangan sarang
          burung walet untuk memastikan praktik ini tidak merusak ekosistem.
          Selain itu, peningkatan kesadaran tentang pentingnya konservasi burung
          walet dan habitatnya sangat diperlukan. Program pendidikan dan
          kampanye konservasi dapat membantu masyarakat memahami cara menjaga
          keseimbangan ekosistem sambil tetap memanfaatkan sumber daya alam
          dengan bijak.
        </p>
        <br />
        <p>
          Kesimpulannya, burung walet bukan hanya makhluk yang luar biasa dengan
          nilai ekonomi yang tinggi, tetapi juga memiliki peran ekologis yang
          penting. Oleh karena itu, penting untuk mengelola sumber daya ini
          secara berkelanjutan agar dapat menikmati manfaat dari sarang burung
          walet tanpa mengorbankan kelestarian alam. Dengan pengelolaan yang
          bijak dan upaya konservasi yang tepat, kita dapat memastikan
          keberlanjutan populasi burung walet dan kesehatan lingkungan di masa
          depan.
        </p>

        <p className="text-black font-bold mt-6">
          Referensi
          <br />
          <a
            href="https://an-nur.ac.id/walet-burung-kecil-dengan-nilai-ekonomi-tinggi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-iconig font-normal ml-1"
          >
            Walet: Burung Kecil dengan Nilai Ekonomi Tinggi – Universitas Islam
            An Nur Lampung
          </a>
        </p>
      </div>

      <div className="flex justify-between items-center my-16">
        {/* Rectangle Background for Previous Article */}
        <div className="relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-customBlue rounded-lg"
            style={{ transform: "translateY(-50%)", height: "10px" }}
          ></div>
          <button
            onClick={() => navigate("/blogartikel3")}
            className="relative flex items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-100 border border-gray-200"
          >
            <span className="mr-4 ">
              <svg
                width="16"
                height="25"
                viewBox="0 0 16 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3882 23.6748C15.7799 23.3365 16 22.8776 16 22.3992C16 21.9208 15.7799 21.4619 15.3882 21.1236L5.04411 12.1922L15.3882 3.2609C15.7688 2.92061 15.9794 2.46484 15.9747 1.99175C15.9699 1.51867 15.7502 1.06613 15.3627 0.731592C14.9753 0.397059 14.4511 0.207305 13.9032 0.203194C13.3553 0.199083 12.8274 0.380946 12.4333 0.709616L0.611838 10.9166C0.220078 11.2549 0 11.7138 0 12.1922C0 12.6707 0.220078 13.1295 0.611838 13.4679L12.4333 23.6748C12.8252 24.0131 13.3566 24.2031 13.9107 24.2031C14.4649 24.2031 14.9963 24.0131 15.3882 23.6748Z"
                  fill="#246AA4"
                />
              </svg>
            </span>
            <div className="flex flex-col text-right gap-1.5">
              <span className="font-semibold text-sm text-black">
                Artikel Sebelumnya
              </span>
              <span className="text-xs font-bold text-black">
                Pemanfaatan Teknologi Kecerdasan...
              </span>
            </div>
          </button>
        </div>

        {/* Rectangle Background for Next Article */}
        <div className="relative">
          <div
            className="absolute top-0 right-0 w-full h-full bg-customBlue rounded-lg"
            style={{ transform: "translateY(-50%)", height: "10px" }}
          ></div>
          <button
            onClick={() => navigate("/blogartikel5")}
            className="relative flex items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-100 border border-gray-200"
          >
            <div className="flex flex-col text-left gap-1.5">
              <span className="font-semibold text-sm text-black">
                Artikel Selanjutnya
              </span>
              <span className="text-xs font-bold text-black">
                Jenis Parfum Aroma Walet yang...
              </span>
            </div>
            <span className="ml-4">
              <svg
                width="16"
                height="25"
                viewBox="0 0 16 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.611837 0.551714C0.220078 0.890072 0 1.34892 0 1.82736C0 2.3058 0.220078 2.76465 0.611837 3.10301L10.9559 12.0343L0.611837 20.9657C0.23118 21.306 0.0205498 21.7617 0.0253115 22.2348C0.0300732 22.7079 0.249846 23.1604 0.637295 23.495C1.02474 23.8295 1.54887 24.0193 2.09678 24.0234C2.6447 24.0275 3.17256 23.8456 3.56668 23.5169L15.3882 13.31C15.7799 12.9716 16 12.5128 16 12.0343C16 11.5559 15.7799 11.097 15.3882 10.7587L3.56668 0.551714C3.17481 0.213459 2.64338 0.0234375 2.08926 0.0234375C1.53515 0.0234375 1.00372 0.213459 0.611837 0.551714Z"
                  fill="#246AA4"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Comment Section */}
      <div className="container my-20 p-6 bg-bgdropdown rounded-lg shadow-md lg:w-[1200px] mx-auto">
        <h3 className="text-4xl font-semibold mb-4 text-center text-black">
          Komentar yuk!
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-black font-semibold mb-1">
              Nama :
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-border"
              placeholder="Nama"
            />
          </div>
          <div>
            <label className="block text-black font-semibold mb-1">
              Email :
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-border"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-border"
              placeholder="Tulis disini..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="px-11 py-2 bg-iconig text-white rounded-md shadow font-bold hover:bg-border"
            >
              Kirim
            </button>
          </div>
        </form>
              
        <CommentSection/>
      </div>
    </div>
  );
};

export default BlogArticle4;
