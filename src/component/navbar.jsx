// src/component/Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Replace with the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-lg">Your Company</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-lg font-semibold hover:text-gray-300">Home</a>
          <a href="#" className="text-lg font-semibold hover:text-gray-300">About</a>
          <a href="#" className="text-lg font-semibold hover:text-gray-300">Services</a>
          <a href="#" className="text-lg font-semibold hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
