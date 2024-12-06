import React, { createContext, useEffect, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [borrowed, setBorrowed] = useState([])
  
  // Fetch books from books.json
  useEffect(() => {
    fetch("/books.json") // Ensure books.json is in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load books.json");
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleBookBorrow = (book) => {
    setBorrowed([...borrowed,book])
    setCount(count + 1)
    alert(`Book Borrowed ${book.title}`)
  }

  // Handle book card click
  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <BookContext.Provider
      value={{
        count,
        setCount,
        borrowed,
        setBorrowed,
        handleBookBorrow,
        books,
        setBooks,
        error,
        setError,
        selectedBook,
        setSelectedBook,
        handleCardClick,
        handleBookBorrow,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
