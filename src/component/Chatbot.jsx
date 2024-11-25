import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChatbotIcon from "../assets/Chatbot/ChatbotIcon.png";
import ChatbotIcon2 from "../assets/Chatbot/ChatbotIcon2.png";
import ToChatbot from "../assets/Chatbot/ToChatbot.png";
import CloseIcon from "../assets/Chatbot/CloseIcon.png";
import UserIcon from "../assets/Chatbot/UserIcon.png";

import "../assets/Chatbot/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbotPopup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.01 }} // Sedikit lebih cepat
            className="relative w-[540px] h-[870px] bg-border shadow-lg rounded-lg  mb-4 flex flex-col"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
          >
            {/* Konten Chatbot */}
            <div className="text-center bg-transparent p-4 rounded-t-lg relative flex flex-col items-center justify-center">
              {/* Ikon Chatbot di tengah atas */}
              <img
                src={ChatbotIcon2}
                alt="Chatbot Logo"
                className="w-10 h-10 mb-2"
              />

              {/* Judul WALET AI di dalam badge putih */}
              <div className="bg-white text-black font-bold px-4 py-1 rounded-full shadow-md mb-1">
                WALET AI
              </div>

              {/* Teks deskripsi di bawah judul */}
              <p className="text-white">Ada Pertanyaan? Yuk cari tahu!</p>

              {/* Close Icon di pojok kanan atas */}
              <div className="absolute top-2 right-2 cursor-pointer">
                <img
                  src={ToChatbot}
                  alt="menuju chatbot"
                  onClick={toggleChatbot}
                  className="w-6 h-6"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-scroll hide-scrollbar p-8 space-y-4 bg-white rounded-t-[100px]">
              {/* Pesan dari Walet AI */}
              <div className="flex items-start space-x-3 mt-12">
                <img src={ChatbotIcon2} alt="Chatbot Logo" className="w-8 h-8" />
                <div className="bg-customBlue p-3  max-w-[70%] rounded-b-xl rounded-r-xl">
                  <p className="text-black font-medium">
                    Halo sobat Walet AI!!!
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <img src={ChatbotIcon2} alt="Chatbot Logo" className="w-8 h-8" />
                <div className="bg-customBlue p-3 max-w-[70%] rounded-b-xl rounded-r-xl">
                  <p className="text-black font-medium">
                    Ada yang bisa saya bantu?
                  </p>
                </div>
              </div>

              {/* Pesan dari Pengguna */}
              <div className="flex items-center justify-end space-x-3">
                <div className="bg-[#DCE8F3] p-3 max-w-[70%] text-right rounded-b-xl rounded-l-xl">
                  <p className="font-medium">
                    Bagaimana cara memilih lokasi yang ideal untuk membangun
                    rumah burung walet?
                  </p>
                </div>
                <img src={UserIcon} alt="User Icon" className="w-7 h-7" />
              </div>

              {/* Pesan panjang dari Walet AI dengan poin-poin */}
              <div className="flex items-start space-x-3 ">
                <img src={ChatbotIcon2} alt="Chatbot Logo" className="w-8 h-8" />
                <div className="bg-customBlue p-4  max-w-[70%] rounded-b-xl rounded-r-xl font-medium">
                  <p>
                    Untuk memilih lokasi yang ideal untuk membangun rumah burung
                    walet, ada beberapa faktor penting yang perlu diperhatikan
                    agar lingkungan mendukung pertumbuhan dan produktivitas
                    burung walet. Berikut adalah langkah-langkahnya:
                  </p>
                  <ol className="list-decimal pl-4 space-y-2 mt-2">
                    <li>
                      <strong>Dekat dengan Habitat Alami Burung Walet</strong>
                      <br />
                      Lokasi ideal sebaiknya berada di dekat habitat alami
                      burung walet, seperti pesisir pantai, sungai, atau lahan
                      basah. Ini karena burung walet sering tinggal di daerah
                      yang dekat dengan sumber makanan seperti serangga yang
                      banyak ditemukan di area ini.
                    </li>
                    <li>
                      <strong>Ketersediaan Makanan</strong>
                      <br />
                      Pilih lokasi yang kaya akan sumber makanan alami, terutama
                      serangga kecil yang menjadi makanan utama burung walet.
                      Area pedesaan yang masih asri dengan pepohonan, sawah, dan
                      lingkungan alami lainnya sangat ideal.
                    </li>
                  </ol>
                  <p className="text-black font-semibold mt-2">
                    selengkapnya...
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 bg-[#D6E1EE]  ">
              <input
                type="text"
                placeholder="Tulis pertanyaanmu ke sini..."
                className="flex-1 p-5 ml-5 bg-transparent text-iconig placeholder-iconig outline-none font-medium"
              />
              <button className="mr-5">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.1353 1.58402L10.1353 12.584M21.1353 1.58402L14.1353 21.584L10.1353 12.584M21.1353 1.58402L1.13525 8.58402L10.1353 12.584"
                    stroke="#246AA4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wrapper untuk Chatbot Icon / Close Icon */}
      <div
        className="rounded-full overflow-hidden cursor-pointer transition-transform transform hover:scale-110"
        style={{ width: "80px", height: "80px" }}
        onClick={toggleChatbot}
      >
        <AnimatePresence>
          {!isOpen ? (
            <motion.img
              key="chatbotIcon"
              src={ChatbotIcon}
              alt="Chatbot Icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="w-full h-full"
            />
          ) : (
            <motion.img
              key="closeIcon"
              src={CloseIcon}
              alt="Close Icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="w-full h-full"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Chatbot;
