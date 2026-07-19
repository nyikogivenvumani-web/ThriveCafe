import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-black text-stone-800 tracking-tight">
          Thrive Cafe
        </Link>
        <div className="flex gap-6 text-sm font-medium text-stone-600">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <Link to="/menu" className="hover:text-stone-900 transition-colors">Menu</Link>
          <Link to="/about" className="hover:text-stone-900 transition-colors">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;