import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FashionAndPortraitBanner from './FashionAndPortraitBanner';

const portraitImagesData = [
    { id: 9, category: "Portrait", image: "/Outdoor/DSC02209.jpg" },
    { id: 10, category: "Portrait", image: "/Outdoor/DSC02889.jpg" },
    { id: 11, category: "Portrait", image: "/Outdoor/DSC08938.jpg" },
    { id: 12, category: "Portrait", image: "/Outdoor/IMG_1666.jpg" },
    { id: 13, category: "Portrait", image: "/Outdoor/IMG_3101.jpg" },
    { id: 14, category: "Portrait", image: "/Outdoor/IMG_3174.jpg" },
    { id: 15, category: "Portrait", image: "/Outdoor/DSC02975.jpg" },
    { id: 16, category: "Portrait", image: "/Outdoor/IMG_3105.jpg" },
    { id: 17, category: "Portrait", image: "/Outdoor/DSC04123-2.JPG" },
    { id: 18, category: "Portrait", image: "/Outdoor/DSC04150-2.JPG" },
    { id: 19, category: "Portrait", image: "/Outdoor/DSC04167.JPG" },
    { id: 20, category: "Portrait", image: "/Outdoor/DSC04210-2.JPG" },
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

                {/* Optimized Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portraitImagesData.map((photo, index) => (
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
                                className="w-full full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FashionAndPortait;
