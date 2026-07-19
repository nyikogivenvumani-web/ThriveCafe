import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Component/NavBar.jsx'; // Import only once at the top

function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navbar placed at the very top, outside of the Header */}
      <Navbar />

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-32 px-6 bg-stone-200 text-stone-800">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to The Thrive Cafe
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-stone-600">
          Brewing the finest coffee in Soweto.
        </p>
        
        <Link 
          to="/menu" 
          className="px-8 py-4 bg-stone-800 text-white text-lg font-bold rounded-lg hover:bg-stone-900 transition-colors shadow-lg"
        >
          View Our Menu
        </Link>
      </header>

      {/* Quick Highlights Section */}
      <section className="flex flex-col md:flex-row justify-center gap-8 py-16 px-6 max-w-5xl mx-auto">
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md text-center border border-stone-100">
          <h2 className="text-2xl font-bold mb-3 text-stone-800">
            Freshly Baked
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Artisan pastries made from scratch every single morning.
          </p>
        </div>
        
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md text-center border border-stone-100">
          <h2 className="text-2xl font-bold mb-3 text-stone-800">
            Cozy Atmosphere 
          </h2>
          <p className="text-stone-600 leading-relaxed">
            The perfect spot to study, work, or catch up with friends.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;