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
            <a href="#home" className="hover:text-gray-400">Github</a>
            <a href="#about" className="hover:text-gray-400">LikedIn</a>
          </div>
        </div>

        <div className="border-t border-gray-700 my-4"></div>


        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-4">
          © 2024 Your Book Library. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
