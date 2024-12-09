import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white px-5 py-3 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl uppercase">Novel Nest</h1>

      {/* Menu Icon for Mobile */}
      <button
        className="text-white text-2xl md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Nav Links */}
      <nav
        className={`absolute top-16 left-0 w-full bg-gray-900 p-5 space-y-3 md:space-y-0 md:static md:flex md:items-center md:justify-between md:p-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/borrowed"
          className="block text-lg text-white hover:text-gray-400 md:inline md:mx-3"
        >
          Borrowed Books
        </Link>
        <Link
          to="/"
          className="block text-lg text-white hover:text-gray-400 md:inline md:mx-3"
        >
          Book Library
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
