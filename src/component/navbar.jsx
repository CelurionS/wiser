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
    <nav className="bg-customBlue text-white w-full h-24 fixed z-50">
      <div className="flex items-center justify-between py-0 px-0 md:px-8">
        
        {/* Logo - Left Side */}
         <div className="flex items-center space-x-2 mr-auto ml-16 mt-4">
          <img src={logo} alt="Logo" className="h-[70px] w-[70px]" />
         </div>

        {/* Navigation Links - Right Side */}
        <div className="flex items-center space-x-6 gap-8 mr-40 mt-5">
          <a 
            href="/" 
            className={`font-raleway font-semibold text-xl ${activeLink === 'beranda' ? 'text-white underline font-extrabold' : 'text-fontblue'}`}
            onClick={() => handleLinkClick('beranda')}
          >
            Beranda
          </a>
          <a 
            href="/konsultasi" 
            className={`font-raleway font-semibold text-xl ${activeLink === 'konsultasi' ? 'text-white underline font-extrabold' : 'text-fontblue'}`}
            onClick={() => handleLinkClick('konsultasi')}
          >
            Konsultasi
          </a>

          {/* Edukasi with Dropdown Menu */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton
              as="a" // Make the button a link so it can navigate
              href="/edukasi" // Set the href for navigation
              className={`font-raleway font-semibold text-xl inline-flex items-center justify-between ${activeLink === 'edukasi' ? 'text-white underline font-extrabold' : 'text-fontblue'} px-3 py-2`}
              onClick={() => handleLinkClick('edukasi')} // Ensure active link is set on click
            >
              Edukasi
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
            </MenuButton>

            <MenuItems
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-conscars2 transition-all duration-300 ease-out transform"
            >
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="/materipage"
                      onClick={() => handleLinkClick('materi')}
                      className={`block text-center text-lg font-semibold text-click ${active ? 'bg-conscars2' : ''} px-4 py-3`}
                    >
                      Materi
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="/blogartikel"
                      onClick={() => handleLinkClick('blog')}
                      className={`block text-center text-lg font-semibold text-click ${active ? 'bg-conscars2' : ''} px-4 py-3`}
                    >
                      Blog Artikel
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="/berita"
                      onClick={() => handleLinkClick('berita')}
                      className={`block text-center font-semibold text-lg text-click ${active ? 'bg-conscars2' : ''} px-4 py-3`}
                    >
                      Berita
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <a 
            href="/tentang-kami" 
            className={`font-raleway font-semibold text-xl ${activeLink === 'about' ? 'text-white underline font-extrabold' : 'text-fontblue'}`}
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
