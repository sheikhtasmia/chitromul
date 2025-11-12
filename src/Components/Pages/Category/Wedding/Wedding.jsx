import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import WeddingBanner from "./WeddingBanner";

const weddingImagesData = [
    { id: 1, category: "Wedding", image: "/Wedding/DSC00658.jpg" },
    { id: 2, category: "Wedding", image: "/Wedding/DSC00811.jpg" },
    { id: 3, category: "Wedding", image: "/Wedding/DSC03567.jpg" },
    { id: 4, category: "Wedding", image: "/Wedding/IMG_0420.JPG" },
    { id: 5, category: "Post-Wedding", image: "/Post-wedding/DSC02428.jpg" },
    { id: 6, category: "Post-Wedding", image: "/Post-wedding/DSC02392.jpg" },
    { id: 7, category: "Post-Wedding", image: "/Post-wedding/DSC02450.jpg" },
    { id: 8, category: "Post-Wedding", image: "/Post-wedding/DSC02471.jpg" },
];

const Wedding = () => {
    const weddingPhotos = weddingImagesData.filter(
        (i) => i.category === "Wedding"
    );
    const postWeddingPhotos = weddingImagesData.filter(
        (i) => i.category === "Post-Wedding"
    );

    const photoVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const ImageGallery = ({ title, photos }) => (
        <section className="py-12 px-4 md:px-8 max-w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
                {title} Gallery 💖
            </h2>

            {/* Masonry-like responsive grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        variants={photoVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="break-inside-avoid overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-gray-100"
                    >
                        <LazyLoadImage
                            src={photo.image}
                            alt={`${photo.category} ${index + 1}`}
                            effect="blur"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover"
                            placeholderSrc="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3C/svg%3E"
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
                <ImageGallery title="Main Wedding Day" photos={weddingPhotos} />
                <ImageGallery title="Post-Wedding & Couple Shoots" photos={postWeddingPhotos} />
            </div>
        </div>
    );
};

export default Wedding;
