import React, { createContext,useRef, useEffect, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [search,setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [borrowed, setBorrowed] = useState(() => {
    const storedBorrowed = localStorage.getItem('borrowedBooks');
    return storedBorrowed ? JSON.parse(storedBorrowed) : [];
  });

  const topSectionRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowed));
  }, [borrowed]);
  
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

  // Function to handle borrowing a book
  const handleBookBorrow = (book) => {
    // Check if the book is already in the borrowed list
    if (borrowed.some((borrowedBook) => borrowedBook.id === book.id)) {
      alert("This book is already borrowed.");
      return;
    }

    // Add the book to the borrowed list
    setBorrowed([...borrowed, book]);
  };
  // Handle book card click
  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRemoveBook = (indexToRemove) => {
    const updatedBorrowed = borrowed.filter((_, index) => index !== indexToRemove);
    setBorrowed(updatedBorrowed); // Update the context state
  };
    // Filter books based on the search query
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
  
    // Function to handle card click and scroll to the top section
    const handleBookSelection = (book) => {
      handleCardClick(book); // Update the selected book
      topSectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the top section
    };
    
  

  return (
    <BookContext.Provider
      value={{
        filteredBooks,
        handleBookSelection,
        topSectionRef,
        count,
        search,
        setSearch,
        setCount,
        handleRemoveBook,
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
