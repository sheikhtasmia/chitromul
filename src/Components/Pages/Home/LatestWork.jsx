import React from "react";

const LatestWork = () => {
  const latestWork = [
    {
      id: 1,
      image: "/latestwork/DSC00811.webp",
      category: "Wedding",
      type: "Photography",
    },
    {
      id: 2,
      image: "/latestwork/DSC02392.webp",
      category: "Wedding",
      type: "Photography",
    },
    {
      id: 3,
      image: "/latestwork/DSC02471.webp",
      category: "Wedding",
      type: "Photography",
    },
    {
      id: 5,
      image: "/latestwork/DSC02889.webp",
      category: "Outdoor",
      type: "Photography",
    },
    {
      id: 6,
      image: "/latestwork/DSC02975.webp",
      category: "Outdoor",
      type: "Photography",
    },
    {
      id: 7,
      image: "/latestwork/DSC08914.webp",
      category: "Outdoor",
      type: "Photography",
    },
    {
      id: 8,
      image: "/latestwork/IMG_2078.webp",
      category: "Wedding",
      type: "Photography",
    },
    {
      id: 9,
      image: "/latestwork/IMG_2308.webp",
      category: "Wedding",
      type: "Photography",
    },
    {
      id: 10,
      image: "/latestwork/IMG_3174.webp",
      category: "Outdoor",
      type: "Photography",
    },
  ];

  return (
    <section className="relative py-20 px-4">
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
              className="group relative overflow-hidden transition-all duration-300"
            >
              <img
                src={work.image}
                alt={work.title || "Latest Work"}
                className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-xl font-bold mb-1">
                  {work.title || work.category}
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
