import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="text-lg uppercase  font-bold mb-4 md:mb-0">
            Novel Nest
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <a
              href="https://github.com/elishabhatti"
              className="hover:text-gray-400 transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/elisha-jameel-a07290326/"
              className="hover:text-gray-400 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Additional Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            Empowering readers since 2024.
          </p>
          <div className="flex space-x-4">
            <a
              href="#privacy"
              className="text-sm hover:text-gray-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm hover:text-gray-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © 2024 Novel Nest. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
