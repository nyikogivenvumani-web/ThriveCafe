import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header Section */}
      <header className="bg-stone-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Story</h1>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
          More than just a coffee shop. We are a community hub for thinkers, creators, and everyday coffee lovers in Johannesburg.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Image Placeholder - You can swap the div for an <img> tag later */}
          <div className="flex-1 w-full bg-stone-300 rounded-xl h-64 md:h-96 flex items-center justify-center shadow-inner">
            <span className="text-stone-500 font-medium">[Cafe Interior Image Placeholder]</span>
          </div>
          
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">How It All Started</h2>
            <p className="text-stone-600 mb-4 leading-relaxed">
              We started with a simple idea: to create a space that fuels both the body and the mind. Whether you're a student crunching numbers for a computer science degree, an entrepreneur drafting up your next startup proposal, or just someone looking for a perfect flat white, this space was built for you.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We source our beans locally and roast them in-house to ensure every cup is as fresh as possible. Our tables have plenty of power outlets, and our Wi-Fi is always fast, because we know how important it is to stay connected while you work or relax.
            </p>
          </div>
        </div>

        {/* Core Values */}
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