import React from 'react';
import cafeInteriorImg from './images/cafe.png';
import Navbar from './Component/NavBar.jsx';

function AboutUs() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
     
      <header className="bg-stone-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Story</h1>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
          More than just a coffee shop. We are a community hub for thinkers, creators, and everyday coffee lovers in Soweto, Orlando west.
        </p>
      </header>

     
      <main className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          
         
          <img 
            src={cafeInteriorImg} 
            alt="Cafe Interior" 
            className="w-full h-auto md:max-h-[450px] object-cover" 
          />
          
        
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">How It All Started</h2>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Thrive Café began when co-founder Thembi Mahlangu, a former barista, set out to elevate Soweto's coffee scene. She envisioned a chic, modern space on the iconic Vilakazi Street that blends high-quality coffee with a menu bridging local flavors and contemporary dining, turning her passion for the craft into a landmark destination.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Thrive Café was born from the passion of former barista Thembi Mahlangu, who wanted to bring a high-end, modern coffee experience to the heart of Soweto. By setting up on iconic Vilakazi Street, she successfully turned her love for the craft into a chic destination that celebrates both local culture and contemporary dining.
            </p>
          </div>
        </div>

       
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-2">Community First</h3>
            <p className="text-stone-600 text-sm">
              We believe in bringing people together, from local creatives to neighborhood regulars.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-2">Quality Brews</h3>
            <p className="text-stone-600 text-sm">
              Every shot of espresso is pulled with precision, care, and a deep respect for the craft.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-2">A Space to Build</h3>
            <p className="text-stone-600 text-sm">
              Designed with focus in mind. Grab a booth, open your laptop, and get to work.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;