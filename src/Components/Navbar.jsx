import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function Navbar() {


  return (
    <div className="bg-[#1F1E24] text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Books Library</h1>
      {/* <SearchBox search={search} setSearch={setSearch} />  */}
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
