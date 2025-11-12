import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurPortfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: "All", name: "All Albums", icon: "📚" },
    { id: "Wedding", name: "Wedding", icon: "💒" },
    { id: "Portrait", name: "Fashion & Portrait", icon: "👤" },
    // { id: "PicFashionPortrait", name: "Pic Fashion Portrait", icon: "💑" },
    { id: "Food", name: "Food & Product", icon: "🍕" },
    { id: "Nature", name: "Nature", icon: "🌄" },
  ];

  // ✅ Your actual image paths (no .webp conversion)
  const portfolioItems = [
    { id: 1, category: "Wedding", image: "/Wedding/DSC00658.jpg" },
    { id: 2, category: "Wedding", image: "/Wedding/DSC00811.jpg" },
    { id: 3, category: "Wedding", image: "/Wedding/DSC03567.jpg" },
    { id: 4, category: "Wedding", image: "/Wedding/IMG_0420.JPG" },
    { id: 5, category: "Wedding", image: "/Post-wedding/DSC02428.jpg" },
    { id: 6, category: "Wedding", image: "/Post-wedding/DSC02392.jpg" },
    { id: 7, category: "Wedding", image: "/Post-wedding/DSC02450.jpg" },
    { id: 8, category: "Wedding", image: "/Post-wedding/DSC02471.jpg" },
    { id: 9, category: "Portrait", image: "/Outdoor/DSC02209.jpg" },
    { id: 10, category: "Portrait", image: "/Outdoor/DSC02889.jpg" },
    { id: 11, category: "Portrait", image: "/Outdoor/DSC08938.jpg" },
    { id: 12, category: "Portrait", image: "/Outdoor/IMG_1666.jpg" },
    { id: 21, category: "Portrait", image: "/Outdoor/20240203171237__MG_6468.jpg" },
    { id: 22, category: "Portrait", image: "/Outdoor/20240203171539__MG_6482.jpg" },
    { id: 23, category: "Portrait", image: "/Outdoor/IMG_1596.jpg" },
    { id: 24, category: "Portrait", image: "/Outdoor/DSC02184.jpg" },
    { id: 25, category: "Portrait", image: "/Outdoor/DSC04123-2.JPG" },
    { id: 26, category: "Portrait", image: "/Outdoor/DSC04150-2.JPG" },
    { id: 27, category: "Portrait", image: "/Outdoor/DSC04167.JPG" },
    { id: 28, category: "Portrait", image: "/Outdoor/DSC04210-2.JPG" },
    { id: 17, category: "Food", image: "/Food/IMG_6298.jpg" },
    { id: 18, category: "Food", image: "/Food/IMG_6464.jpg" },
    { id: 19, category: "Food", image: "/Food/IMG_6435.jpg" },
    { id: 20, category: "Food", image: "/Food/IMG_6514.jpg" },
    { id: 13, category: "Nature", image: "/Nature/2.jpg" },
    { id: 14, category: "Nature", image: "/Nature/12.jpg" },
    { id: 15, category: "Nature", image: "/Nature/13.jpg" },
    { id: 16, category: "Nature", image: "/Nature/16.jpg" },
  ];

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  useEffect(() => {
    setIsVisible(true);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="inline-block mb-4">
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
            📸 Our Portfolio
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Captured Moments
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our stunning collection of photography across categories.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-500 ${activeTab === category.id
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700"
          >
            <LazyLoadImage
              src={item.image}
              alt={item.category}
              effect="blur"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📷</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No items found</h3>
          <p className="text-gray-500">We're adding more content soon!</p>
        </div>
      )}
    </div>
  );
};

export default OurPortfolio;
