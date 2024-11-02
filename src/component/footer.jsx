// src/component/Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Replace with the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-customBlue text-white py-2"> {/* Reduced vertical padding */}
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6"> {/* Reduced horizontal padding */}
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-16" /> {/* Adjusted logo size */}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-10"> {/* Adjust the spacing as necessary */}
          <a href="#" className="text-Raleway font-semibold text-fontblue text-xl">Beranda</a>
          <a href="#" className="text-Raleway font-semibold text-fontblue text-lg">Konsultasi</a>
          <a href="#" className="text-Raleway font-semibold text-fontblue text-lg">Edukasi</a>
          <a href="#" className="text-Raleway font-semibold text-fontblue text-lg">Tentang Kami</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
