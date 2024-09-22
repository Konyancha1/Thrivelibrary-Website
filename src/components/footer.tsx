import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';
const Footer: React.FC = () => {
  return (
    <footer className="w-full md:max-w-7xl mx-auto bg-white text-black py-10">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-28">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col items-start space-y-4">
            <img src={Logo} alt="Logo" className="w-20 md:w-28" />
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-4 md:w-6 h-4 md:h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-4 md:w-6 h-4 md:h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-4 md:w-6 h-4 md:h-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-3/4">
            <div>
              <h3 className="font-semibold text-lg md:text-xl mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-blue-500 text-sm md:text-lg">Home</a></li>
                <li><a href="/about" className="hover:text-blue-500 text-sm md:text-lg">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500 text-sm md:text-lg">Consulting</a></li>
                <li><a href="/affiliate" className="hover:text-blue-500 text-sm md:text-lg">Become an Affiliate</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500 text-sm md:text-lg">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm md:text-lg">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 text-sm md:text-lg">Terms & Conditions</a></li>
                <li><a href="/careers" className="hover:text-blue-500 text-sm md:text-lg">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-8 border-b border-gray-300"></div>
        <div className="text-center text-sm md:text-lg">
          © {new Date().getFullYear()} ThriveLibrary. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;