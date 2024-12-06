import React from "react";
// import { BookContext } from "../Context/BookContext"; // Import BookContext
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="bg-[#1F1E24] text-white p-4 fixed w-full flex justify-between items-center">
      <h1 className="text-2xl">Books Library</h1>
      <nav>
        <Link to="/borrowed" className="hover:underline m-2 ">
          Borrowed Books
        </Link>
        <Link to="/" className="hover:underline m-2 ">
          Book Library
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
