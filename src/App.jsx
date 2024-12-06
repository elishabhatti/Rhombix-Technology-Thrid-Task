import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BookLibrary from './Components/BookLibrary';
import BorrowedBook from './Components/BorrowedBook';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Route for BorrowedBook */}
        <Route path="/borrowed" element={<BorrowedBook />} />
        {/* Route for Home or BookLibrary */}
        <Route path="/" element={<BookLibrary />} />
      </Routes>
      <Footer />
    </div>
  );
}
