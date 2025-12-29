import React from "react";
import { motion } from "framer-motion";
import WeddingBanner from "./WeddingBanner";

// JSON data for the images as provided in your comment
const weddingImagesData = [
  // Wedding Images
  { id: 1, category: "Wedding", image: "/Wedding/DSC00658.webp" },
  { id: 2, category: "Wedding", image: "/Wedding/DSC00811.webp" },
  { id: 3, category: "Wedding", image: "/Wedding/DSC03567.webp" },
  { id: 4, category: "Wedding", image: "/Wedding/IMG_0420.webp" },
  { id: 9, category: "Wedding", image: "/Wedding/wedd1.webp" },
  { id: 10, category: "Wedding", image: "/Wedding/wedd2.webp" },
  { id: 11, category: "Wedding", image: "/Wedding/wedd3.webp" },
  { id: 12, category: "Wedding", image: "/Wedding/wedd4.webp" },

  // Post-Wedding Images
  { id: 5, category: "Post-Wedding", image: "/Post-wedding/DSC02428.webp" },
  { id: 6, category: "Post-Wedding", image: "/Post-wedding/DSC02392.webp" },
  { id: 7, category: "Post-Wedding", image: "/Post-wedding/DSC02450.webp" },
  { id: 8, category: "Post-Wedding", image: "/Post-wedding/DSC02471.webp" },
];

const Wedding = () => {
  // Separate the categories for easier styling and grouping (optional but helpful)
  const weddingPhotos = weddingImagesData.filter(
    (item) => item.category === "Wedding"
  );
  const postWeddingPhotos = weddingImagesData.filter(
    (item) => item.category === "Post-Wedding"
  );

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const ImageGallery = ({ title, photos }) => (
    <section className="py-12 px-4 md:px-8 max-w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
        {title} Gallery 💖
      </h2>

      {/* Responsive Masonry Grid using Tailwind CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            variants={photoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="break-inside-avoid shadow-xl rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]"
          >
            <img
              src={photo.image}
              alt={`${photo.category} photo ${index + 1}`}
              // w-full makes the image responsive within its column
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-white">
      <WeddingBanner />

      <div className="pt-10">
        {/* Wedding Photos Section */}
        <ImageGallery title="Main Wedding Day" photos={weddingPhotos} />

        {/* Post-Wedding Photos Section */}
        <ImageGallery
          title="Post-Wedding & Couple Shoots"
          photos={postWeddingPhotos}
        />
      </div>
    </div>
  );
};

export default Wedding;
