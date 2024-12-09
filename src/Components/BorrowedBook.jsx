import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';
import Footer from './Footer';

function BorrowedBook() {
  const { borrowed, handleRemoveBook } = useContext(BookContext);

  return (
    <div className="pt-5">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-center">Borrowed Books</h1>
      <div className="flex justify-center items-center flex-wrap">
        {borrowed.length === 0 ? (
          <p className="text-center mb-96 w-full px-4">No borrowed books yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {borrowed.map((book, index) => (
              <div
                className="border border-gray-300 shadow-lg rounded-lg p-4"
                key={index}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto object-cover mb-2 rounded-md"
                />
                <h2 className="text-lg md:text-xl font-bold">{book.title}</h2>
                <p className="text-sm md:text-base text-gray-600">by {book.author}</p>
                <button
                  onClick={() => handleRemoveBook(index)}
                  className="w-full bg-red-500 hover:bg-red-600 p-2 text-white mt-2 rounded-md transition duration-300"
                >
                  Remove Book
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BorrowedBook;
