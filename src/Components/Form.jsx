import React, { useState } from 'react';

export default function Form({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // Example: You can add proper authentication logic here
      onLogin(); // Call the onLogin prop to set login to true in the parent component
    } else {
      alert('Please enter a valid username and password');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border border-gray-400 py-7 w-[350px]  px-5 rounded-lg shadow-md '
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className='w-full p-2 rounded-md'
          />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="password"
          >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 rounded-md'
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
      >
        Login
      </button>

      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
}
