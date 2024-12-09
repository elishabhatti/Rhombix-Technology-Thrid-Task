import { useContext, useState, useEffect } from "react";
import { BookContext } from "../Context/BookContext";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import Footer from "./Footer";

function BookLibrary() {
  const {
    topSectionRef,
    selectedBook,
    handleBookBorrow,
    search,
    setSearch,
    filteredBooks,
    handleBookSelection,
  } = useContext(BookContext);

  const [selectedGenre, setSelectedGenre] = useState("all");
  const [filteredCategoryBooks, setFilteredCategoryBooks] = useState([]);

  // Filter books by selected genre
  useEffect(() => {
    if (selectedGenre === "all") {
      setFilteredCategoryBooks(filteredBooks); // Use filteredBooks from context
    } else {
      setFilteredCategoryBooks(filteredBooks.filter((book) => book.genre === selectedGenre));
    }
  }, [selectedGenre, filteredBooks]);

  return (
    <div>
      {/* Search Box */}
      <SearchBox search={search} setSearch={setSearch} />

      {/* Categories Filter */}
      <div className="m-4">
        <select
          id="genreSelect"
          className="p-2 border border-gray-300 rounded-md w-full sm:w-auto"
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="all">All Genres</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Romance">Romance</option>
          <option value="Fiction">Fiction</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
      </div>

      {/* Top Section */}
      <div id="topSection" ref={topSectionRef} className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-3 text-center">Borrowed Books</h1>

        {selectedBook && (
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <div className="w-full sm:w-[750px] flex flex-col sm:flex-row border-b border-gray-500 m-3 p-4">
              <div className="sm:w-[40%] mr-2 mb-4 sm:mb-0">
                <img
                  src={selectedBook.image}
                  alt={selectedBook.title}
                  className="w-full h-full object-cover mb-2 shadow-xl border border-gray-500 rounded-md"
                />
              </div>
              <div className="sm:w-[60%] ml-2 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">{selectedBook.title}</h2>
                  <p className="mb-3 text-lg sm:text-xl">
                    <b>Description: </b>{selectedBook.description}
                  </p>
                  <p className="text-base sm:text-lg"><b>Author: </b>{selectedBook.author}</p>
                  <p className="text-base sm:text-lg"><b>Genre: </b>{selectedBook.genre}</p>
                  <p className="text-base sm:text-lg"><b>Published Year: </b>{selectedBook.year}</p>
                </div>
                <div className="mt-4">
                  <Link to="/borrowed">
                    <button
                      className="w-full bg-[#1F1E24] py-2 rounded-md text-white hover:bg-[#33323a] transition-colors"
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
      <div className="flex flex-wrap justify-center items-center px-4">
        {filteredCategoryBooks.length > 0 ? (
          filteredCategoryBooks.map((book, index) => (
            <div
              className="w-full sm:w-[280px] md:w-[300px] lg:w-[350px] border-b border-gray-500 m-3 p-4 cursor-pointer"
              key={index}
              onClick={() => handleBookSelection(book)}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[300px] md:h-[350px] object-cover mb-2 shadow-xl border border-gray-400 rounded-md hover:-translate-y-3 transition-transform"
              />
              <p className="text-center text-sm sm:text-base">
                {book.title} by <b>{book.author}</b>
              </p>
            </div>
          ))
        ) : (
          <p className="text-center w-full text-gray-500">No books match your search.</p>
        )}
      </div>

      <p className="w-full text-center py-3 text-sm sm:text-base">
        More Books are Coming Soon.
      </p>
      <Footer />
    </div>
  );
}

export default BookLibrary;
