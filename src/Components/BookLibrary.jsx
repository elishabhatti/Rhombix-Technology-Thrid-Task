import { useContext } from 'react';
import { BookContext } from '../Context/BookContext';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import Footer from './Footer';

function BookLibrary() {
  const {topSectionRef, selectedBook, handleBookBorrow,search,filteredBooks,handleBookSelection, setSearch } = useContext(BookContext);
  return (
    <div>
      {/* Search Box */}
      <SearchBox search={search} setSearch={setSearch} />

      {/* Top Section */}
      <div id="topSection" ref={topSectionRef}>
      <h1 className="text-3xl font-bold mb-4 px-7 mt-3  text-center">Borrowed Books</h1>
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
                  <Link to="/borrowed">
                    <button
                      className="w-full bg-[#1F1E24] py-2 rounded-md text-white"
                      onClick={() => handleBookBorrow(selectedBook)}
                    >
                      Borrow Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Book Cards */}
      <div className="flex justify-center items-center flex-wrap">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              className="w-[350px] border-b border-b-gray-500 m-3 p-4 cursor-pointer"
              key={index}
              onClick={() => handleBookSelection(book)}
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
          ))
        ) : (
          <p className="text-center w-full text-gray-500">No books match your search.</p>
        )}
      </div>
        <p className='w-full text-center py-3'>More Books are Coming Soon.</p>
        <Footer />
    </div>
  );
}

export default BookLibrary;
