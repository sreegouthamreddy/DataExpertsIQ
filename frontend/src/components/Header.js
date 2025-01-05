import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DataExpertsIQ</h1>
        <nav>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/login" className="mx-2">Login</Link>
          <Link to="/signup" className="mx-2">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
