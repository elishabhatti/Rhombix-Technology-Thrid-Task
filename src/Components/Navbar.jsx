import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-900 text-white px-5 py-3 flex justify-between items-center">
      <h1 className="text-2xl uppercase ">Books Library</h1>
      <nav>
        <Link to="/borrowed" className="m-2 ">
          Borrowed Books
        </Link>
        <Link to="/">
          Book Library
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
