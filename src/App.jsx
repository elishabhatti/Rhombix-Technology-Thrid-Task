import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BookLibrary from './Components/BookLibrary';
import BorrowedBook from './Components/BorrowedBook';
import Form from './Components/Form'; 

export default function App() {
  const [login, setLogin] = useState(false); // Tracks the login state

  return (
    <div>
      {/* Conditionally render based on login state */}
      {login ? (
        // If logged in, show the main app content
        <>
        <Navbar />
          <Routes>
            {/* Route for BorrowedBook */}
            <Route path="/borrowed" element={<BorrowedBook />} />
            {/* Route for Home or BookLibrary */}
            <Route path="/" element={<BookLibrary />} />
          </Routes>
        </>
      ) : (
        // If not logged in, show the login form
        <div className="flex justify-center items-center h-screen">
          <Form onLogin={() => setLogin(true)} />
        </div>
      )}
    </div>
  );
}
