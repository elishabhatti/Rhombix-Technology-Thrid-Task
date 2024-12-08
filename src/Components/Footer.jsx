import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="text-lg font-bold mb-4 md:mb-0">
            Your Book Library
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About Us</a>
            <a href="#books" className="hover:text-gray-400">Books</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>

        <div className="border-t border-gray-700 my-4"></div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-4">
          © 2024 Your Book Library. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
