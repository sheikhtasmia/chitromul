import React from "react";
import { motion } from "framer-motion";
import FoodAndProductBanner from "./FoodAndProductBanner";

// JSON data for the Food images
const foodImagesData = [
  // Food Images
  { id: 17, category: "Food", image: "/Food/IMG_6298.webp" },
  { id: 18, category: "Food", image: "/Food/IMG_6464.webp" },
  { id: 19, category: "Food", image: "/Food/IMG_6435.webp" },
  { id: 20, category: "Food", image: "/Food/IMG_6514.webp" },
  { id: 21, category: "Food", image: "/Food/IMG_6402.webp" },
  { id: 22, category: "Food", image: "/Food/IMG_6418.webp" },
  { id: 23, category: "Food", image: "/Food/IMG_6427.webp" },
  { id: 24, category: "Food", image: "/Food/IMG_6508.webp" },
];

const FoodAndProduct = () => {
  const photoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white">
      <FoodAndProductBanner />

      <section className="py-16 px-4 md:px-8 max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          Appetizing Food Portfolio 🍽️
        </h2>

        {/* Responsive Grid for Food Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodImagesData.map((photo, index) => (
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
                // Maintain a clean, consistent look for food/product shots
                className="w-full h-full "
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FoodAndProduct;
