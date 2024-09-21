import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/logo.png'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const checkActivePage = (path: string) => {
    return window.location.pathname === path ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500';
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="w-24" />
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="/" className={`${checkActivePage('/')} px-2 py-1`}>
              Home
            </a>
            <a href="/about" className={`${checkActivePage('/about')} px-2 py-1`}>
              About Us
            </a>
            <a href="/affiliate" className={`${checkActivePage('/affiliate')} px-2 py-1`}>
              Become An Affiliate
            </a>
          </div>

          <div className="hidden md:flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl">
              Connect With Us
            </button>
          </div>

          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 px-4 pt-2 pb-4">
            <a href="/" className={`${checkActivePage('/')} px-2 py-1`}>
              Home
            </a>
            <a href="/about" className={`${checkActivePage('/about')} px-2 py-1`}>
              About
            </a>
            <a href="/affiliate" className={`${checkActivePage('/affiliate')} px-2 py-1`}>
              Become An Affiliate
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl">
              Connect With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;