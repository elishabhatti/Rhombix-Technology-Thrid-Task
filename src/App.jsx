import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import BookLibrary from './Components/BookLibrary';
import BorrowedBook from './Components/BorrowedBook';
import Form from './Components/Form';

export default function App() {
  const [login, setLogin] = useState(false); // Tracks the login state

  // Check localStorage for login state on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setLogin(true);
    }
  }, []);

  const handleLogin = () => {
    setLogin(true);
    localStorage.setItem('isLoggedIn', 'true'); // Save login state in localStorage
  };

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem('isLoggedIn'); // Clear login state from localStorage
  };

  return (
    <div>
      {/* Conditionally render based on login state */}
      {login ? (
        // If logged in, show the main app content
        <>
          <Navbar onLogout={handleLogout} />
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
          <Form onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}
