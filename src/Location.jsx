import React from 'react';

function Location() {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-6">
   
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4">Find Us</h1>
        <p className="text-lg text-stone-600">Come through for a fresh brew and great vibes.</p>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    
        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 border-b border-stone-200 pb-2">Hours of Operation</h2>
          <ul className="space-y-4 text-stone-600">
            <li className="flex justify-between">
              <span className="font-medium">Monday - Friday</span>
              <span>07:00 - 17:00</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Saturday</span>
              <span>08:00 - 15:00</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Sunday & Public Holidays</span>
              <span>08:00 - 13:00</span>
            </li>
          </ul>
        </div>

       
        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-6 border-b border-stone-200 pb-2">Our Space</h2>
            <p className="text-stone-800 font-semibold mb-1">Thrive Cafe</p>
            <p className="text-stone-600 mb-6 leading-relaxed">
             8038 Vilakazi Street, Orlando West, Soweto, <br />
              Johannesburg Gauteng, South Africa
            </p>
          </div>
          
          <div className="border-t border-stone-100 pt-4">
            <p className="text-sm text-stone-500">Contact Number</p>
            <p className="text-stone-800 font-medium">27 (0)11 536 1838</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Location;