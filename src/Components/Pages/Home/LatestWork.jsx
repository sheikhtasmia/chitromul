import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LatestWork = () => {
  const latestWork = [
    { id: 1, image: "/latestwork/DSC00811.jpg", category: "Wedding", type: "Photography" },
    { id: 2, image: "/latestwork/DSC02392.jpg", category: "Wedding", type: "Photography" },
    { id: 3, image: "/latestwork/DSC02471.jpg", category: "Wedding", type: "Photography" },
    { id: 5, image: "/latestwork/DSC02889.jpg", category: "Outdoor", type: "Photography" },
    { id: 6, image: "/latestwork/DSC02975.jpg", category: "Outdoor", type: "Photography" },
    { id: 7, image: "/latestwork/DSC08914.jpg", category: "Outdoor", type: "Photography" },
    { id: 8, image: "/latestwork/IMG_2078.jpg", category: "Wedding", type: "Photography" },
    { id: 9, image: "/latestwork/IMG_2308.JPG", category: "Wedding", type: "Photography" },
    { id: 10, image: "/latestwork/IMG_3174.jpg", category: "Outdoor", type: "Photography" },
  ];

  return (
    <section className="relative py-20 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Our <span className="text-blue-600">Latest Work</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Discover our finest creations blending art, emotion, and storytelling.
          Each frame reflects the passion and creativity behind our lens.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestWork.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500"
            >
              <LazyLoadImage
                src={work.image}
                alt={work.category}
                effect="blur"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <h3 className="text-white text-xl font-bold mb-1">
                  {work.category}
                </h3>
                <span className="mt-2 inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full self-start">
                  {work.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
