import { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { BookContext } from '../Context/BookContext';

function BookLibrary() {
  const { books, selectedBook, handleCardClick } = useContext(BookContext);

  return (
    <div className="pt-20">
      <div id="topSection">
        {selectedBook && (
          <div className="flex justify-center items-center mb-8">
            <div className="w-[750px] flex border-b border-b-gray-500 m-3 p-4">
              <div className="w-[40%] mr-2">
                <img
                  src={selectedBook.image}
                  alt={selectedBook.title}
                  className="w-full h-full object-cover mb-2 shadow-xl border border-gray-500"
                />
              </div>
              <div className="w-[60%] ml-2 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{selectedBook.title}</h2>
                  <p className="mb-3 text-xl">
                    <b>Description: </b>
                    {selectedBook.description}
                  </p>
                  <p className="text-lg">
                    <b>Author: </b>
                    {selectedBook.author}
                  </p>
                  <p className="text-lg">
                    <b>Genre: </b>
                    {selectedBook.genre}
                  </p>
                  <p className="text-lg">
                    <b>Published Year: </b>
                    {selectedBook.year}
                  </p>
                </div>
                <div>
                  {/* Use Link to Navigate */}
                  <Link to="/borrowed">
                    <button className="w-full bg-[#1F1E24] py-2 rounded-md text-white">
                      Borrow Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {books.map((book, index) => (
          <div
            className="w-[350px] border-b border-b-gray-500 m-3 p-4 cursor-pointer"
            key={index}
            onClick={() => handleCardClick(book)}
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full z-1 border border-gray-400 h-[350px] shadow-xl object-cover mb-2 hover:-translate-y-3 transition-transform"
            />
            <p className="mb-3">
              {book.title} by <b>{book.author}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookLibrary;
