import React from "react";
import { motion } from "framer-motion";
import EventManagementBanner from "./EventManagementBanner";

// *** JSON Data: Public Path (/) ব্যবহার করা হয়েছে, যা হোস্টিং এর পরেও কাজ করে ***
// ছবিগুলি অবশ্যই 'public/EventManage/' ফোল্ডারে রাখতে হবে।
const eventManagementImages = [
  {
    id: 1,
    src: "/EventManage/DSC025173.webp",
    alt: "Grand Wedding Stage Setup",
  },
  { id: 2, src: "/EventManage/DSC03266.webp", alt: "Corporate Event Lighting" },
  {
    id: 3,
    src: "/EventManage/IMG-20250117-WA0017.jpg",
    alt: "Exhibition Stall Design",
  },
  {
    id: 4,
    src: "/EventManage/event1.webp",
    alt: "Concert Crowd View",
  },
  {
    id: 5,
    src: "/EventManage/event2.webp",
    alt: "Birthday Party Decoration",
  },
  {
    id: 6,
    src: "/EventManage/event3.webp",
    alt: "Gala Dinner Table Setting",
  },
  {
    id: 7,
    src: "/EventManage/IMG-20250514-WA0036.jpg",
    alt: "Product Launch Venue",
  },
  {
    id: 8,
    src: "/EventManage/IMG-20250514-WA0037.jpg",
    alt: "Outdoor Festival Setup",
  },
  {
    id: 9,
    src: "/EventManage/event4.webp",
    alt: "Gala Dinner Table Setting",
  },
  {
    id: 10,
    src: "/EventManage/event5.webp",
    alt: "weeding",
  },
  {
    id: 11,
    src: "/EventManage/event6.webp",
    alt: "event",
  },
  {
    id: 12,
    src: "/EventManage/event7.webp",
    alt: "event",
  },
  {
    id: 13,
    src: "/EventManage/event8.webp",
    alt: "Gala Dinner Table Setting",
  },
  {
    id: 14,
    src: "/EventManage/event9.webp",
    alt: "Gala Dinner Table Setting",
  },
  {
    id: 15,
    src: "/EventManage/event10.webp",
    alt: "Gala Dinner Table Setting",
  },
];

// --- Component: Simple Error/Status Message (No change needed) ---
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
        No **Event Management** images have been added to the portfolio yet.
        Please check back later!
      </p>
    </motion.div>
  );
};
// ------------------------------------------

// --- Component: Individual Photo Card (Minimalist Design) ---
const PhotoCard = ({ photo }) => {
  // অ্যানিমেশন ভ্যারিয়েন্ট
  const photoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={photoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      // Modern, minimalist card design, no visible text
      className="w-full rounded-xl overflow-hidden shadow-lg transition duration-500 transform hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
    >
      <img
        src={photo.src}
        // ALT tag is still required for accessibility (SEO and screen readers)
        alt={photo.alt}
        className="w-full h-full "
        loading="lazy"
      />

      {/* ছবির নিচে কোনো নাম বা ক্যাপশন দেখানোর জন্য কোনো ডিভ নেই। */}
    </motion.div>
  );
};
// ------------------------------------------

const EventManagement = () => {
  const isGalleryEmpty = eventManagementImages.length === 0;

  return (
    <div className="bg-white min-h-screen">
      <EventManagementBanner />

      {/* Conditional Rendering Logic */}
      {isGalleryEmpty ? (
        <EmptyGalleryMessage />
      ) : (
        <section className="py-20 px-4 md:px-8 max-w-full mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-black mb-16 border-b-2 border-red-500 pb-2">
            Event Management Portfolio
          </h2>

          {/* *** Modern Masonry Grid Layout *** */}
          <div className="columns-1 md:columns-3 lg:columns-4 space-y-6">
            {eventManagementImages.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default EventManagement;
