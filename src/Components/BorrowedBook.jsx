import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';
import Footer from './Footer';

function BorrowedBook() {
  const { borrowed ,handleRemoveBook } = useContext(BookContext);


  return (
    <div className='pt-5'>
      <h1 className="text-3xl font-bold mb-4 px-7 text-center">Borrowed Books</h1>
      <div className="flex justify-center items-center  flex-wrap">
        {borrowed.length === 0 ? (
          <p className="text-center w-full">No borrowed books yet.</p>
        ) : (
          borrowed.map((book, index) => (
            <div className="w-[350px] border-b border-b-gray-500 m-3 p-4" key={index}>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[350px] object-cover mb-2"
              />
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p>by {book.author}</p>
              <p>{book.description}</p>
              <button
                onClick={() => handleRemoveBook(index)}
                className="w-full bg-red-500 p-2 text-white mt-2 rounded-md"
              >
                Remove Book
              </button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BorrowedBook;
