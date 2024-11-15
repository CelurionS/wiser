import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Replace with the path to your logo
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-customBlue text-white w-full fixed z-50">
      <div className="flex items-center justify-between py-0 px-0 md:px-8">
        
        {/* Logo - Left Side */}
        <div className="flex items-center space-x-2 mr-auto">
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </div>

        {/* Navigation Links - Right Side */}
        <div className="flex items-center space-x-6">
          <a 
            href="#" 
            className={`font-raleway font-semibold text-xl ${activeLink === 'beranda' ? 'text-click underline font-extrabold' : 'text-fontblue'}`}
            onClick={() => handleLinkClick('beranda')}
          >
            Beranda
          </a>
          <a 
            href="#" 
            className={`font-raleway font-semibold text-xl ${activeLink === 'konsultasi' ? 'text-click underline font-extrabold' : 'text-fontblue'}`}
            onClick={() => handleLinkClick('konsultasi')}
          >
            Konsultasi
          </a>

          {/* Edukasi with Dropdown Menu */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton
              className={`font-raleway font-semibold text-xl inline-flex items-center justify-between ${activeLink === 'edukasi' ? 'text-click underline font-extrabold' : 'text-fontblue'} px-3 py-2`}
            >
              Edukasi
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-click" />
            </MenuButton>

            <MenuItems
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-bgdropdown transition-all duration-300 ease-out transform"
            >
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => handleLinkClick('materi')}
                      className={`block text-center text-lg font-semibold text-click ${active ? 'bg-gray-100' : ''} px-4 py-3`}
                    >
                      Materi
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => handleLinkClick('blog')}
                      className={`block text-center text-lg font-semibold text-click ${active ? 'bg-gray-100' : ''} px-4 py-3`}
                    >
                      Blog Artikel
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => handleLinkClick('berita')}
                      className={`block text-center font-semibold text-lg text-click ${active ? 'bg-gray-100' : ''} px-4 py-3`}
                    >
                      Berita
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <a 
            href="#" 
            className={`font-raleway font-semibold text-xl ${activeLink === 'about' ? 'text-click underline font-extrabold' : 'text-fontblue'}`}
            onClick={() => handleLinkClick('about')}
          >
            Tentang Kami
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
