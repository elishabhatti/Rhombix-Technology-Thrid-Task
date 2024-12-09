import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white px-5 py-3 flex flex-col md:flex-row md:justify-between md:items-center">
      {/* Logo and Menu Icon */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl uppercase">Novel Nest</h1>
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Nav Links */}
      <nav
        className={`flex-col md:flex-row md:flex md:items-center md:space-x-4 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          to="/borrowed"
          className="text-lg text-white hover:text-gray-400 px-2 py-1"
        >
          Borrowed Books
        </Link>
        <Link
          to="/"
          className="text-lg text-white hover:text-gray-400 px-2 py-1"
        >
          Book Library
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
