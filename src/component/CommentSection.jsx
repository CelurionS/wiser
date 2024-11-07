import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentSection = () => {
  const [showComments, setShowComments] = useState(false);

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
    <>
      {/* Konten artikel lainnya */}
      <div className="text-center mt-6">
        <button
          onClick={toggleComments}
          className="text-iconig font-semibold hover:underline flex items-center justify-center"
        >
          {showComments ? "Sembunyikan Komentar" : "Lihat Komentar"}
          <span className="ml-2">
            {showComments ? (
              <svg
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform rotate-0 duration-300"
              >
                <path
                  d="M0.330173 7.69408C0.541647 7.88996 0.828428 8 1.12745 8C1.42648 8 1.71326 7.88996 1.92473 7.69408L7.50681 2.52205L13.0889 7.69408C13.3016 7.88441 13.5864 7.98973 13.8821 7.98734C14.1778 7.98496 14.4606 7.87508 14.6697 7.68135C14.8788 7.48763 14.9974 7.22557 15 6.95161C15.0025 6.67765 14.8889 6.41372 14.6834 6.21666L8.30409 0.305919C8.09261 0.110039 7.80583 0 7.50681 0C7.20779 0 6.921 0.110039 6.70953 0.305919L0.330173 6.21666C0.118763 6.4126 0 6.67831 0 6.95537C0 7.23243 0.118763 7.49814 0.330173 7.69408Z"
                  fill="#17466E"
                />
              </svg>
            ) : (
              <svg
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform rotate-10 duration-300"
              >
                <path
                  d="M14.6752 0.30592C14.4637 0.11004 14.1769 0 13.8779 0C13.5789 0 13.2921 0.11004 13.0806 0.30592L7.49856 5.47795L1.91648 0.30592C1.7038 0.115591 1.41894 0.0102749 1.12326 0.0126557C0.827585 0.0150366 0.544745 0.124923 0.335662 0.318647C0.126578 0.512371 0.0079813 0.774434 0.0054121 1.04839C0.0028429 1.32235 0.116508 1.58628 0.321926 1.78334L6.70128 7.69408C6.91276 7.88996 7.19954 8 7.49856 8C7.79759 8 8.08437 7.88996 8.29584 7.69408L14.6752 1.78334C14.8866 1.5874 15.0054 1.32169 15.0054 1.04463C15.0054 0.767573 14.8866 0.501859 14.6752 0.30592Z"
                  fill="#17466E"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
      {/* Section Komentar dengan Animasi */}
      <div
        className={`comment-section mt-6 space-y-6 ${
          showComments ? "show" : ""
        }`}
      >
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-300 pb-4">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 3C11.251 2.99968 9.53242 3.45811 8.01591 4.32954C6.4994 5.20096 5.23797 6.4549 4.35753 7.96619C3.47709 9.47749 3.00844 11.1933 2.99835 12.9423C2.98825 14.6913 3.43707 16.4124 4.30001 17.9338C4.88328 17.1757 5.63305 16.562 6.49137 16.14C7.34969 15.718 8.29356 15.499 9.25001 15.5H16.75C17.7065 15.499 18.6503 15.718 19.5087 16.14C20.367 16.562 21.1167 17.1757 21.7 17.9338C22.5629 16.4124 23.0118 14.6913 23.0017 12.9423C22.9916 11.1933 22.5229 9.47749 21.6425 7.96619C20.7621 6.4549 19.5006 5.20096 17.9841 4.32954C16.4676 3.45811 14.7491 2.99968 13 3ZM22.9288 20.595C23.0854 20.3908 23.2354 20.1817 23.3788 19.9675C24.7646 17.9084 25.5033 15.482 25.5 13C25.5 6.09625 19.9038 0.5 13 0.5C6.09626 0.5 0.500013 6.09625 0.500013 13C0.496074 15.7459 1.40006 18.4162 3.07126 20.595L3.06501 20.6175L3.50876 21.1338C4.68112 22.5044 6.13674 23.6045 7.7753 24.3583C9.41386 25.1121 11.1964 25.5016 13 25.5C13.27 25.5 13.5383 25.4917 13.805 25.475C16.0605 25.3328 18.2346 24.5787 20.0938 23.2938C20.9829 22.6804 21.7888 21.9543 22.4913 21.1338L22.935 20.6175L22.9288 20.595ZM13 5.5C12.0055 5.5 11.0516 5.89509 10.3484 6.59835C9.6451 7.30161 9.25001 8.25544 9.25001 9.25C9.25001 10.2446 9.6451 11.1984 10.3484 11.9017C11.0516 12.6049 12.0055 13 13 13C13.9946 13 14.9484 12.6049 15.6517 11.9017C16.3549 11.1984 16.75 10.2446 16.75 9.25C16.75 8.25544 16.3549 7.30161 15.6517 6.59835C14.9484 5.89509 13.9946 5.5 13 5.5Z"
                    fill="black"
                  />
                </svg>
              </span>
              <div>
                <h4 className="font-semibold">{comment.name}</h4>
                <span className="text-sm text-gray-500">{comment.time}</span>
              </div>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentSection;
