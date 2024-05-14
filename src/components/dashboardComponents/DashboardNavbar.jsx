// Navbar.js
import React from 'react';

const Navbar = ({ recentSearches }) => {
  return (
    <div className="border-b px-5 py-1 flex justify-between items-center">
      {/* Logo */}
      <span>...</span>
      
      {/* Search */}
      <div className="w-1/2 relative focus-within:shadow-lg">
        <div className="flex items-center w-full focus-within:border px-3 py-2  focus-within:border-b-0">
          {/* Search icon */}
          <svg>...</svg>
          {/* Input */}
          <input type="text" placeholder="Search.." className="w-full outline-none placeholder:text-slate-300 font-semibold" />
        </div>
        {/* Alpine.js for search functionality */}
        <div>...</div>
      </div>
      
      {/* Profile */}
      <div className="flex space-x-4 items-center">
        <svg>...</svg>
        <img src="https://source.unsplash.com/random/500x500/?face" className="h-10 w-10 rounded-full" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
