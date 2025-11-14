import React from "react";
import { motion } from "framer-motion";
import FashionAndPortraitBanner from "./FashionAndPortraitBanner";

// JSON data for the images
const portraitImagesData = [
  { id: 9, category: "Portrait", image: "/Outdoor/DSC02209.webp" },
  { id: 10, category: "Portrait", image: "/Outdoor/DSC02889.webp" },
  { id: 11, category: "Portrait", image: "/Outdoor/DSC08938.webp" },
  { id: 12, category: "Portrait", image: "/Outdoor/IMG_1666.webp" },
  { id: 13, category: "Portrait", image: "/Outdoor/IMG_3101.webp" },
  { id: 14, category: "Portrait", image: "/Outdoor/IMG_3174.webp" },
  { id: 15, category: "Portrait", image: "/Outdoor/DSC02975.webp" },
  { id: 16, category: "Portrait", image: "/Outdoor/IMG_3105.webp" },
  { id: 17, category: "Portrait", image: "/Outdoor/DSC04123-2.webp" },
  { id: 18, category: "Portrait", image: "/Outdoor/DSC04150-2.webp" },
  { id: 19, category: "Portrait", image: "/Outdoor/DSC04167.webp" },
  { id: 20, category: "Portrait", image: "/Outdoor/DSC04210-2.webp" },
];

const FashionAndPortait = () => {
  const photoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white">
      <FashionAndPortraitBanner />

      <section className="py-16 px-4 md:px-8 max-w-full mx-auto">
        <h2 className="text-xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          Fashion & Outdoor Portrait Portfolio 📸
        </h2>

        {/* Responsive Grid for Portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portraitImagesData.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={photoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="shadow-xl rounded-lg overflow-hidden cursor-pointer transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <img
                src={photo.image}
                alt={`${photo.category} photo ${index + 1}`}
                // Set a fixed aspect ratio or height for uniformity in a grid layout
                className="w-full h-full "
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FashionAndPortait;
