// import React, { useState, useEffect } from 'react';



// // === Our Portfolio Main Component ===
// const OurPortfolio = () => {
//     const [activeTab, setActiveTab] = useState('All');
//     const [isVisible, setIsVisible] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);

//     const categories = [
//         { id: 'All', name: 'All Albums', icon: '📚' },
//         { id: 'Wedding', name: 'Wedding', icon: '💒' },
//         { id: 'Post-Wedding', name: 'Post-Wedding', icon: '💑' },
//         { id: 'Nature', name: 'Nature', icon: '🌄' },
//         { id: 'Food', name: 'Food', icon: '🍕' },
//         { id: 'Portrait', name: 'Portrait/Outdoor', icon: '👤' }
//     ];

//     const portfolioItems = [
//         {
//             id: 1,
//             // title: "Sunset Wedding Bliss",
//             category: "Wedding",
//             image: "../../../../public/Wedding/DSC00658.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },

//         {
//             id: 2,
//             // title: "Sunset Wedding Bliss",
//             category: "Wedding",
//             image: "../../../../public/Wedding/DSC00811.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 3,
//             // title: "Sunset Wedding Bliss",
//             category: "Wedding",
//             image: "../../../../public/Wedding/DSC03567.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 4,
//             // title: "Sunset Wedding Bliss",
//             category: "Wedding",
//             image: "../../../../public/Wedding/IMG_0420.JPG",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },

//         // wedding end

//         {
//             id: 5,
//             // title: "Sunset Wedding Bliss",
//             category: "Post-Wedding",
//             image: "../../../../public/Wedding/IMG_2078.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 6,
//             // title: "Sunset Wedding Bliss",
//             category: "Post-Wedding",
//             image: "../../../../public/Post-wedding/DSC02392.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 7,
//             // title: "Sunset Wedding Bliss",
//             category: "Post-Wedding",
//             image: "../../../../public/Post-wedding/DSC02450.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },

//         {
//             id: 8,
//             // title: "Sunset Wedding Bliss",
//             category: "Post-Wedding",
//             image: "../../../../public/Post-wedding/DSC02471.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },

//         // post wedding end

//         {
//             id: 9,
//             // title: "Sunset Wedding Bliss",
//             category: "Portrait",
//             image: "../../../../public/Outdoor/DSC02209.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 10,
//             // title: "Sunset Wedding Bliss",
//             category: "Portrait",
//             image: "../../../../public/Outdoor/DSC02889.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 11,
//             // title: "Sunset Wedding Bliss",
//             category: "Portrait",
//             image: "../../../../public/Outdoor/DSC08938.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 12,
//             // title: "Sunset Wedding Bliss",
//             category: "Portrait",
//             image: "../../../../public/Outdoor/IMG_1666.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },

//         // out door end

//         {
//             id: 13,
//             // title: "Sunset Wedding Bliss",
//             category: "Nature",
//             image: "../../../../public/Nature/2.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 14,
//             // title: "Sunset Wedding Bliss",
//             category: "Nature",
//             image: "../../../../public/Nature/12.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 15,
//             // title: "Sunset Wedding Bliss",
//             category: "Nature",
//             image: "../../../../public/Nature/13.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 16,
//             // title: "Sunset Wedding Bliss",
//             category: "Nature",
//             image: "../../../../public/Nature/16.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },

//         // Nature end


//         {
//             id: 17,
//             // title: "Sunset Wedding Bliss",
//             category: "Food",
//             image: "../../../../public/Food/IMG_6298.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 18,
//             // title: "Sunset Wedding Bliss",
//             category: "Food",
//             image: "../../../../public/Food/IMG_6464.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 19,
//             // title: "Sunset Wedding Bliss",
//             category: "Food",
//             image: "../../../../public/Food/IMG_6435.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },
//         {
//             id: 20,
//             // title: "Sunset Wedding Bliss",
//             category: "Food",
//             image: "../../../../public/Food/IMG_6514.jpg",
//             // description: "Golden hour wedding ceremony by the beach, capturing the intimate vows against a stunning backdrop."
//         },




//     ];

//     const filteredItems = activeTab === 'All'
//         ? portfolioItems
//         : portfolioItems.filter(item => item.category === activeTab);



//     useEffect(() => {
//         setIsVisible(true);
//     }, [activeTab]);

//     return (
//         <>
//             <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30 py-12 px-4 sm:px-6 lg:px-8">
//                 {/* Animated Background Elements */}
//                 <div className="fixed top-0 left-0 w-full h-full -z-10">
//                     <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//                     <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//                 </div>

//                 {/* Header Section */}
//                 <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                     <div className="inline-block mb-4">
//                         <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full animate-bounce">
//                             📸 Our Portfolio
//                         </span>
//                     </div>
//                     <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-gradient">
//                         Captured Moments
//                     </h1>
//                     <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//                         Explore our stunning collection of photography across different categories and styles
//                     </p>
//                     <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full animate-pulse"></div>
//                 </div>

//                 {/* Tab Navigation */}
//                 <div className={`max-w-6xl mx-auto mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                     <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-2 border border-white/20">
//                         <div className="flex flex-wrap justify-center gap-2">
//                             {categories.map((category) => (
//                                 <button
//                                     key={category.id}
//                                     onClick={() => setActiveTab(category.id)}
//                                     className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 ${activeTab === category.id
//                                         ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
//                                         : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
//                                         }`}
//                                 >
//                                     <span className="text-lg">{category.icon}</span>
//                                     <span>{category.name}</span>
//                                     {activeTab === category.id && (
//                                         <span className="ml-1 animate-ping">✨</span>
//                                     )}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Portfolio Grid */}
//                 <div className="max-w-full mx-auto">
//                     <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//                         }`}>
//                         {filteredItems.map((item, index) => (
//                             <div
//                                 key={item.id}
//                                 className="group relative bg-white backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-white/20"
//                                 style={{
//                                     animationDelay: `${index * 100}ms`,
//                                     animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
//                                 }}
//                             >
//                                 {/* Image Container */}
//                                 <div className="relative overflow-hidden rounded-2xl">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                                     />

//                                     {/* Overlay Gradient */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                                     {/* Category Badge */}
//                                     <div className="absolute top-4 left-4">
//                                         <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
//                                             {item.category}
//                                         </span>
//                                     </div>
//                                 </div>



//                                 {/* Hover Border Effect */}
//                                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 rounded-2xl transition-all duration-500"></div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Empty State */}
//                     {filteredItems.length === 0 && (
//                         <div className="text-center py-16">
//                             <div className="text-6xl mb-4">📷</div>
//                             <h3 className="text-2xl font-bold text-gray-600 mb-2">No items found</h3>
//                             <p className="text-gray-500">We're adding more content to this category soon!</p>
//                         </div>
//                     )}
//                 </div>


//                 {/* Custom Animations */}
//                 <style jsx>{`
//           @keyframes fadeInUp {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
          
//           @keyframes gradient {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
          
//           .animate-gradient {
//             background-size: 200% 200%;
//             animation: gradient 3s ease infinite;
//           }
          
//           .animation-delay-1000 {
//             animation-delay: 1s;
//           }
          
//           /* Staggered animation for grid items */
//           .grid > * {
//             animation-fill-mode: both;
//           }
//         `}</style>
//             </div>


//         </>
//     );
// };

// export default OurPortfolio;


import React, { useState, useEffect } from 'react';

// === Our Portfolio Main Component ===
const OurPortfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: 'All', name: 'All Albums', icon: '📚' },
    { id: 'Wedding', name: 'Wedding', icon: '💒' },
    { id: 'Post-Wedding', name: 'Post-Wedding', icon: '💑' },
    { id: 'Nature', name: 'Nature', icon: '🌄' },
    { id: 'Food', name: 'Food', icon: '🍕' },
    { id: 'Portrait', name: 'Portrait/Outdoor', icon: '👤' }
  ];

//   const portfolioItems = [
//     { id: 1, category: 'Wedding', image: '/Wedding/DSC00658.jpg' },
//     { id: 2, category: 'Wedding', image: '/Wedding/DSC00811.jpg' },
//     { id: 3, category: 'Wedding', image: '/Wedding/DSC03567.jpg' },
//     { id: 4, category: 'Wedding', image: '/Wedding/IMG_0420.JPG' },

//     { id: 5, category: 'Post-Wedding', image: '/Post-Wedding/IMG_2078.jpg' },
//     { id: 6, category: 'Post-Wedding', image: '/Post-Wedding/DSC02392.jpg' },
//     { id: 7, category: 'Post-Wedding', image: '/Post-Wedding/DSC02450.jpg' },
//     { id: 8, category: 'Post-Wedding', image: '/Post-Wedding/DSC02471.jpg' },

//     { id: 9, category: 'Portrait', image: '/Outdoor/DSC02209.jpg' },
//     { id: 10, category: 'Portrait', image: '/Outdoor/DSC02889.jpg' },
//     { id: 11, category: 'Portrait', image: '/Outdoor/DSC08938.jpg' },
//     { id: 12, category: 'Portrait', image: '/Outdoor/IMG_1666.jpg' },

//     { id: 13, category: 'Nature', image: '/Nature/2.jpg' },
//     { id: 14, category: 'Nature', image: '/Nature/12.jpg' },
//     { id: 15, category: 'Nature', image: '/Nature/13.jpg' },
//     { id: 16, category: 'Nature', image: '/Nature/16.jpg' },

//     { id: 17, category: 'Food', image: '/Food/IMG_6298.jpg' },
//     { id: 18, category: 'Food', image: '/Food/IMG_6464.jpg' },
//     { id: 19, category: 'Food', image: '/Food/IMG_6435.jpg' },
//     { id: 20, category: 'Food', image: '/Food/IMG_6514.jpg' },
//   ];


// const portfolioItems = [
//   // --- Wedding ---
//   { id: 1, category: "Wedding", image: "/Wedding/DSC00658.jpg" },
//   { id: 2, category: "Wedding", image: "/Wedding/DSC00811.jpg" },
//   { id: 3, category: "Wedding", image: "/Wedding/DSC03567.jpg" },
//   { id: 4, category: "Wedding", image: "/Wedding/IMG_0420.JPG" },

//   // Post-Wedding images
// {
//   id: 5,
//   category: "Post-Wedding",
//   image: "/Post-Wedding/IMG_2078.jpg"
// },
// {
//   id: 6,
//   category: "Post-Wedding",
//   image: "/Post-Wedding/DSC02392.jpg"
// },
// {
//   id: 7,
//   category: "Post-Wedding",
//   image: "/Post-Wedding/DSC02450.jpg"
// },
// {
//   id: 8,
//   category: "Post-Wedding",
//   image: "/Post-Wedding/DSC02471.jpg"
// },


//   // --- Portrait/Outdoor ---
//   { id: 9, category: "Portrait", image: "/Outdoor/DSC02209.jpg" },
//   { id: 10, category: "Portrait", image: "/Outdoor/DSC02889.jpg" },
//   { id: 11, category: "Portrait", image: "/Outdoor/DSC08938.jpg" },
//   { id: 12, category: "Portrait", image: "/Outdoor/IMG_1666.jpg" },

//   // --- Nature ---
//   { id: 13, category: "Nature", image: "/Nature/2.jpg" },
//   { id: 14, category: "Nature", image: "/Nature/12.jpg" },
//   { id: 15, category: "Nature", image: "/Nature/13.jpg" },
//   { id: 16, category: "Nature", image: "/Nature/16.jpg" },

//   // --- Food ---
//   { id: 17, category: "Food", image: "/Food/IMG_6298.jpg" },
//   { id: 18, category: "Food", image: "/Food/IMG_6464.jpg" },
//   { id: 19, category: "Food", image: "/Food/IMG_6435.jpg" },
//   { id: 20, category: "Food", image: "/Food/IMG_6514.jpg" },
// ];

const portfolioItems = [
  // Wedding
  {
    id: 1,
    category: "Wedding",
    image: "/Wedding/DSC00658.jpg"
  },
  {
    id: 2,
    category: "Wedding",
    image: "/Wedding/DSC00811.jpg"
  },
  {
    id: 3,
    category: "Wedding",
    image: "/Wedding/DSC03567.jpg"
  },
  {
    id: 4,
    category: "Wedding",
    image: "/Wedding/IMG_0420.JPG"
  },

  // Post-Wedding
  {
    id: 5,
    category: "Post-Wedding",
    image: "/Post-wedding/DSC02428.jpg"
  },
  {
    id: 6,
    category: "Post-Wedding",
    image: "/Post-wedding/DSC02392.jpg"
  },
  {
    id: 7,
    category: "Post-Wedding",
    image: "/Post-wedding/DSC02450.jpg"
  },
  {
    id: 8,
    category: "Post-Wedding",
    image: "/Post-wedding/DSC02471.jpg"
  },

  // Portrait / Outdoor
  {
    id: 9,
    category: "Portrait",
    image: "/Outdoor/DSC02209.jpg"
  },
  {
    id: 10,
    category: "Portrait",
    image: "/Outdoor/DSC02889.jpg"
  },
  {
    id: 11,
    category: "Portrait",
    image: "/Outdoor/DSC08938.jpg"
  },
  {
    id: 12,
    category: "Portrait",
    image: "/Outdoor/IMG_1666.jpg"
  },

  // Nature
  {
    id: 13,
    category: "Nature",
    image: "/Nature/2.jpg"
  },
  {
    id: 14,
    category: "Nature",
    image: "/Nature/12.jpg"
  },
  {
    id: 15,
    category: "Nature",
    image: "/Nature/13.jpg"
  },
  {
    id: 16,
    category: "Nature",
    image: "/Nature/16.jpg"
  },

  // Food
  {
    id: 17,
    category: "Food",
    image: "/Food/IMG_6298.jpg"
  },
  {
    id: 18,
    category: "Food",
    image: "/Food/IMG_6464.jpg"
  },
  {
    id: 19,
    category: "Food",
    image: "/Food/IMG_6435.jpg"
  },
  {
    id: 20,
    category: "Food",
    image: "/Food/IMG_6514.jpg"
  }
];

  const filteredItems =
    activeTab === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeTab);

  useEffect(() => {
    setIsVisible(true);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div
        className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="inline-block mb-4">
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full animate-bounce">
            📸 Our Portfolio
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-gradient">
          Captured Moments
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore our stunning collection of photography across different categories and styles
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full animate-pulse"></div>
      </div>

      {/* Tabs */}
      <div
        className={`max-w-6xl mx-auto mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-2 border border-white/20">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                {activeTab === category.id && <span className="ml-1 animate-ping">✨</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-full mx-auto">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-white/20"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No items found</h3>
            <p className="text-gray-500">We're adding more content to this category soon!</p>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .grid > * {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default OurPortfolio;
