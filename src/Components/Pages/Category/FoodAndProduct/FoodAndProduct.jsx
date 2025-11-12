import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FoodAndProductBanner from './FoodAndProductBanner';

const foodImagesData = [
    { id: 17, category: "Food", image: "/Food/IMG_6298.jpg" },
    { id: 18, category: "Food", image: "/Food/IMG_6464.jpg" },
    { id: 19, category: "Food", image: "/Food/IMG_6435.jpg" },
    { id: 20, category: "Food", image: "/Food/IMG_6514.jpg" },
    { id: 21, category: "Food", image: "/Food/IMG_6402.jpg" },
    { id: 22, category: "Food", image: "/Food/IMG_6418.jpg" },
    { id: 23, category: "Food", image: "/Food/IMG_6427.jpg" },
    { id: 24, category: "Food", image: "/Food/IMG_6508.jpg" },
];

const FoodAndProduct = () => {
    const photoVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <div className="bg-white">
            <FoodAndProductBanner />

            <section className="py-16 px-4 md:px-8 max-w-full mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Appetizing Food Portfolio 🍽️
                </h2>

                {/* Optimized Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {foodImagesData.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            variants={photoVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="shadow-lg rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
                        >
                            <LazyLoadImage
                                src={photo.image}
                                alt={`${photo.category} photo ${index + 1}`}
                                effect="blur"
                                className="w-full h-[350px] object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FoodAndProduct;
