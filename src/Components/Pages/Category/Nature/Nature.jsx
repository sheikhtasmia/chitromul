import React from "react";
import { motion } from "framer-motion";
import NatureBanner from "./NatureBanner";

// JSON data for the Nature images
const natureImagesData = [
  // Nature Images
  { id: 13, category: "Nature", image: "/Nature/2.webp" },
  { id: 14, category: "Nature", image: "/Nature/12.webp" },
  { id: 15, category: "Nature", image: "/Nature/13.jpg" },
  { id: 16, category: "Nature", image: "/Nature/16.jpg" },
  { id: 17, category: "Nature", image: "/Nature/6.jpg" },
  { id: 18, category: "Nature", image: "/Nature/7.jpg" },
  { id: 19, category: "Nature", image: "/Nature/8.jpg" },
  { id: 20, category: "Nature", image: "/Nature/9.webp" },
  { id: 21, category: "Nature", image: "/Nature/10.webp" },
  { id: 22, category: "Nature", image: "/Nature/11.webp" },
  { id: 23, category: "Nature", image: "/Nature/12.webp" },
  { id: 24, category: "Nature", image: "/Nature/13.jpg" },
];

const Nature = () => {
  // Framer Motion variants for subtle animation
  const photoVariants = {
    hidden: { opacity: 0, rotate: -1, y: 20 },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white">
      <NatureBanner />

      <section className="py-16 px-4 md:px-8 max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          Breathtaking Nature Photography Portfolio 🌳
        </h2>

        {/* Responsive Grid for Nature Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {natureImagesData.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={photoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              // Apply a vertical offset to every second/third item for a varied look
              className={`shadow-xl rounded-lg overflow-hidden cursor-pointer transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl 
                                ${index % 2 === 1 ? "sm:mt-10 lg:mt-0" : ""} 
                                ${
                                  index % 4 === 1 || index % 4 === 2
                                    ? "lg:mt-12"
                                    : ""
                                }
                            `}
            >
              <img
                src={photo.image}
                alt={`${photo.category} photo ${index + 1}`}
                // Maintain a standard height for consistency on smaller screens,
                // but object-cover ensures they look good.
                className="w-full h-full object-contain object-cover "
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Nature;
