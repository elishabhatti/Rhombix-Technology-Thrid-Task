import React from 'react';

export default function SearchBox({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full mb-4"
      />
    </div>
  );
}
