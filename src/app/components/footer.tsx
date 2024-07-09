import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800  bottom-0 text-white  w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-2xl font-bold mb-4">Refer & Earn</h2>
          <p className="text-sm text-gray-400 mb-4 text-center lg:text-left">
            Join us and start earning rewards by referring your friends!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-16 mt-8 lg:mt-0">
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <a href="#about" className="text-gray-400 hover:text-white mb-1">
              About Us
            </a>
            <a href="#team" className="text-gray-400 hover:text-white mb-1">
              Team
            </a>
            <a href="#careers" className="text-gray-400 hover:text-white mb-1">
              Careers
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <a href="#faq" className="text-gray-400 hover:text-white mb-1">
              FAQ
            </a>
            <a href="#help" className="text-gray-400 hover:text-white mb-1">
              Help Center
            </a>
            <a href="#privacy" className="text-gray-400 hover:text-white mb-1">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 mb-1">Email: info@referandearn.com</p>
            <p className="text-gray-400 mb-1">Phone: +123 456 7890</p>
            <p className="text-gray-400">
              Address: 123 Main Street, Anytown, USA
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Refer & Earn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
