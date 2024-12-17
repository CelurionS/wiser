// src/pages/NotFoundPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-5xl font-bold text-black">404</h1>
      <p className="text-xl text-gray-500">Halaman Tidak Ditemukan</p>
      <button
        onClick={handleGoHome}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFoundPage;
