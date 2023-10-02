import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Hotel Listings</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-yellow-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
