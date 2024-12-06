import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

function BorrowedBook() {
  const { borrowed } = useContext(BookContext);

  return (
    <div className="pt-20 ">
      <h1 className="text-3xl font-bold mb-4 px-7 text-center ">Borrowed Books</h1>
      <div className="flex flex-wrap">
        {borrowed.length === 0 ? (
          <p className='text-center w-full  '>No borrowed books yet.</p>
        ) : (
          borrowed.map((book, index) => (
            <div className="w-[350px]  border-b border-b-gray-500 m-3 p-4" key={index}>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[350px] object-cover mb-2"
                />
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p>by {book.author}</p>
              <p>{book.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BorrowedBook;
