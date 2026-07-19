import React from 'react';

// 1. Import all your menu images from the assets folder
import espressoImg from './images/espresso.webp';
import flatWhiteImg from './images/flat_white.jpg';
import vanillaLatteImg from './images/vanila_latte.webp';
import americanoImg from './images/americano.jpg';
import coldBrewImg from './images/cold_brew.jpg';
import icedCaramelImg from './images/iced_caramel.jpg';
import peachIcedImg from './images/peach_iced.jpg';
import croissantImg from './images/butter_croissant.jpg';
import avoToastImg from './images/avocado_toast.jpg';
import muffinImg from './images/blueberry_muffin.jpg';

function Menu() {
  // 2. Added the 'image' property to each item in the menu data array
  const menuData = [
    {
      category: "Espresso Bar",
      items: [
        { name: "Classic Espresso", price: "R 25", description: "Double shot of our signature house roast.", image: espressoImg },
        { name: "Flat White", price: "R 35", description: "Velvety micro-foam poured over a double shot.", image: flatWhiteImg },
        { name: "Vanilla Bean Latte", price: "R 42", description: "Espresso and steamed milk with real vanilla bean syrup.", image: vanillaLatteImg },
        { name: "Americano", price: "R 30", description: "Espresso stretched with hot water.", image: americanoImg }
      ]
    },
    {
      category: "Iced & Refreshers",
      items: [
        { name: "Cold Brew", price: "R 45", description: "Steeped for 18 hours for a smooth, bold finish.", image: coldBrewImg },
        { name: "Iced Caramel Macchiato", price: "R 48", description: "Milk, vanilla, and ice topped with espresso and caramel.", image: icedCaramelImg },
        { name: "Peach Iced Tea", price: "R 35", description: "House-made black tea infused with peach.", image: peachIcedImg }
      ]
    },
    {
      category: "Food & Pastries",
      items: [
        { name: "Butter Croissant", price: "R 30", description: "Flaky, buttery, and baked fresh every morning.", image: croissantImg },
        { name: "Avocado Toast", price: "R 65", description: "Smashed avo on sourdough with chili flakes and a lemon squeeze.", image: avoToastImg },
        { name: "Blueberry Muffin", price: "R 35", description: "Loaded with fresh blueberries and topped with a streusel crumble.", image: muffinImg }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-16 px-6">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4">Our Menu</h1>
        <p className="text-lg text-stone-600">Carefully crafted drinks and fresh bites.</p>
      </header>

      {/* Menu Categories */}
      <main className="max-w-5xl mx-auto">
        {menuData.map((section, index) => (
          <div key={index} className="mb-16">
            {/* Category Title */}
            <h2 className="text-2xl font-bold text-stone-800 mb-8 border-b-2 border-stone-200 pb-2">
              {section.category}
            </h2>
            
            {/* Optimized Grid Layout for Cards with Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="bg-white rounded-xl shadow-sm border border-stone-100 flex overflow-hidden hover:shadow-md transition-shadow h-36 sm:h-40"
                >
                  {/* 3. Image Section */}
                  <div className="w-28 sm:w-36 flex-shrink-0 bg-stone-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Details Section */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow min-w-0">
                    <div>
                      <div className="flex justify-between items-baseline mb-1 gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-stone-800 truncate">{item.name}</h3>
                        <span className="text-base sm:text-lg font-semibold text-stone-950 flex-shrink-0">{item.price}</span>
                      </div>
                      <p className="text-stone-500 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Menu;