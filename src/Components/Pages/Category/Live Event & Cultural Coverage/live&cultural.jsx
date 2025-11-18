import React from "react";
import { motion } from "framer-motion";
import LiveEventBanner from "./LiveEventBanner"; // নতুন ব্যানার কম্পোনেন্ট

// *** JSON Data: Public Path (/) ব্যবহার করা হয়েছে, যা হোস্টিং এর পরেও কাজ করবে ***
const liveEventImages = [
  { id: 1, src: "/LiveEvent/cultural1.webp", alt: "Traditional Dance Performance" },
  { id: 2, src: "/LiveEvent/cultural2.webp", alt: "Music Concert Stage" },
  { id: 3, src: "/LiveEvent/cultural3.webp", alt: "Festival Crowd View" },
  { id: 4, src: "/LiveEvent/cultural4.webp", alt: "Live Drama Show" },
  { id: 5, src: "/LiveEvent/cultural5.webp", alt: "Art Exhibition Booth" },
  { id: 6, src: "/LiveEvent/cultural6.webp", alt: "Street Performance" },
  { id: 7, src: "/LiveEvent/cultural7.webp", alt: "Cultural Parade" },
  { id: 8, src: "/LiveEvent/cultural8.webp", alt: "Live Orchestra" },
  { id: 9, src: "/LiveEvent/cultural9.webp", alt: "Traditional Dance Performance" },
  { id: 10, src: "/LiveEvent/cultural10.webp", alt: "Music Concert Stage" },
  { id: 11, src: "/LiveEvent/cultural11.webp", alt: "Festival Crowd View" },
  { id: 12, src: "/LiveEvent/cultural12.webp", alt: "Live Drama Show" },
  { id: 13, src: "/LiveEvent/cultural13.webp", alt: "Art Exhibition Booth" },
  { id: 14, src: "/LiveEvent/cultural14.webp", alt: "Street Performance" },
  { id: 15, src: "/LiveEvent/cultural15.webp", alt: "Cultural Parade" },
  { id: 16, src: "/LiveEvent/cultural16.webp", alt: "Live Orchestra" },
  { id: 17, src: "/LiveEvent/cultural17.webp", alt: "Cultural Parade" },
  { id: 18, src: "/LiveEvent/cultural18.webp", alt: "Live Orchestra" },
];

// --- Component: Empty Gallery Message ---
const EmptyGalleryMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 px-4 max-w-xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-red-600 mb-2">
        Gallery Not Available Yet
      </h3>
      <p className="text-gray-600 text-lg">
        No **Live Event & Cultural Coverage** images have been added yet.
        Please check back later!
      </p>
    </motion.div>
  );
};

// --- Component: Individual Photo Card ---
const PhotoCard = ({ photo }) => {
  const photoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={photoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full rounded-xl overflow-hidden shadow-lg transition duration-500 transform hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
    >
      <img src={photo.src} alt={photo.alt} className="w-full h-full" loading="lazy" />
    </motion.div>
  );
};

// --- Main Component ---
const LiveEventCoverage = () => {
  const isGalleryEmpty = liveEventImages.length === 0;

  return (
    <div className="bg-white min-h-screen">
      <LiveEventBanner />

      {isGalleryEmpty ? (
        <EmptyGalleryMessage />
      ) : (
        <section className="py-20 px-4 md:px-8 max-w-full mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-black mb-16 border-b-2 border-red-500 pb-2">
            Live Event & Cultural Coverage
          </h2>

          <div className="columns-1 md:columns-3 lg:columns-4 space-y-6">
            {liveEventImages.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default LiveEventCoverage;
