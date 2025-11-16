import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Specialist = () => {
  // The previous specialists array is now only used as a reference to copy data,
  // but the array itself is not defined or used here, per your request.

  // Variants definitions remain the same
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const imageVariants = {
    normal: {
      borderRadius: "50%",
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    hover: {
      borderRadius: "20%",
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div className=" mt-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-full mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
            Our Chitromul Specialist 📸
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our team of professional photographers specializing in
            different genres.
          </p>
        </motion.div>

        {/* Specialist Grid - RAW STRUCTURE (NO ARRAY, NO .MAP) - Using the new names */}
        <motion.div
          // This grid is set up for 5 items, so I've adjusted the layout slightly
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
         {/* Item 1: Wedding & Events Photography (ID 5) */}
<Link to="/category/wedding">
  <motion.div
    key={5}
    variants={itemVariants}
    className="group text-center"
  >
    <motion.div
      className="w-full max-w-xs mx-auto overflow-hidden relative shadow-lg"
      style={{ aspectRatio: "1 / 1" }}
      variants={imageVariants}
      initial="normal"
      whileHover="hover"
    >
      <motion.img
        src="/specialist/items_01.webp"
        alt="Wedding & Events Photography"
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>

    <motion.h3
      className="text-xl font-semibold text-gray-800 mt-6 mb-2"
      whileHover={{ color: "#EF4444" }}
      transition={{ duration: 0.3 }}
    >
      Wedding Photography
    </motion.h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Capturing your timeless moments with elegance, creativity, and emotion —
      from intimate weddings to grand celebrations.
    </p>
  </motion.div>
</Link>


          {/* Item 2: Fashion & Portrait Photography (ID 9) */}
          <Link to="/category/fashion & portrait photography">
            <motion.div
              key={9}
              variants={itemVariants}
              className="group text-center"
            >
              <motion.div
                className="w-full max-w-xs mx-auto overflow-hidden relative shadow-lg"
                style={{ aspectRatio: "1 / 1" }}
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
              >
                <motion.img
                  src="/specialist/items_02.webp"
                  alt="Fashion & Portrait Photography"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-800 mt-6 mb-2"
                whileHover={{ color: "#EF4444" }}
                transition={{ duration: 0.3 }}
              >
                Fashion & Portrait Photography
              </motion.h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating stunning, high-fashion editorials, professional
                headshots, and creative portraiture.
              </p>
            </motion.div>
          </Link>

          {/* Item 4: Food & Product Photography (ID 7) */}
          <Link to="/category/food&product-photgraphy">
            <motion.div
              key={7}
              variants={itemVariants}
              className="group text-center"
            >
              <motion.div
                className="w-full max-w-xs mx-auto overflow-hidden relative shadow-lg"
                style={{ aspectRatio: "1 / 1" }}
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
              >
                <motion.img
                  src="/specialist/items_04.webp"
                  alt="Food & Product Photography"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-800 mt-6 mb-2"
                whileHover={{ color: "#EF4444" }}
                transition={{ duration: 0.3 }}
              >
                Food & Product Photography
              </motion.h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating mouth-watering food visuals and high-quality, stunning
                images to showcase your products.
              </p>
            </motion.div>
          </Link>

          {/* Item 3: Event Management (ID 6) */}
          <Link to="/category/event-management">
            <motion.div
              key={6}
              variants={itemVariants}
              className="group text-center"
            >
              <motion.div
                className="w-full max-w-xs mx-auto overflow-hidden relative shadow-lg"
                style={{ aspectRatio: "1 / 1" }}
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
              >
                <motion.img
                  src="/specialist/items_03.webp"
                  alt="Event Management"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-800 mt-6 mb-2"
                whileHover={{ color: "#EF4444" }}
                transition={{ duration: 0.3 }}
              >
                Event Management
              </motion.h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating unforgettable experiences through seamless planning,
                creative design, and grand celebrations.
              </p>
            </motion.div>
          </Link>

          {/* Item 5: Nature Photography (ID 8) */}
          <Link to="/category/Nature-photography">
            <motion.div
              key={8}
              variants={itemVariants}
              className="group text-center"
            >
              <motion.div
                className="w-full max-w-xs mx-auto overflow-hidden relative shadow-lg"
                style={{ aspectRatio: "1 / 1" }}
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
              >
                <motion.img
                  src="/specialist/items_05.webp"
                  alt="Nature Photography"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-800 mt-6 mb-2"
                whileHover={{ color: "#EF4444" }}
                transition={{ duration: 0.3 }}
              >
                Nature Photography
              </motion.h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Capturing the beauty of the natural world, from sweeping
                landscapes to intricate wildlife details.
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Specialist;
