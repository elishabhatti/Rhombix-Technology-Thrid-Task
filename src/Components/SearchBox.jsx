import React from 'react';

export default function SearchBox({ search, setSearch }) {
  return (
    <div className='bg-gray-900 px-5 '>
      <input
        type="text"
        placeholder="Search Book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 text-white rounded-md outline-none border border-gray-900 bg-gray-800  w-full mb-4 "
      />
    </div>
  );
}
