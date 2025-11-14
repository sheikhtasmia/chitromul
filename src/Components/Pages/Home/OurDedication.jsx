import React from "react";
// 1. **পরিবর্তন:** ছবির ইমপোর্ট লাইনটি সম্পূর্ণ মুছে দেওয়া হলো,
// কারণ পাবলিক পাথ ব্যবহারের ক্ষেত্রে এটি অপ্রয়োজনীয় এবং ভুল পদ্ধতি।

// PUBLIC ফোল্ডারের রুট থেকে শুরু করে ছবির সঠিক পাথ।
// মনে রাখবেন, আপনার ফাইল স্ট্রাকচারে সম্ভবত public/ownerPhotos/... আছে,
// তাই URL-এ শুধুমাত্র "/ownerPhotos/..." এইটুকু থাকবে।
// ডাবল "public/ownerPhotos/" অংশটি বাদ দেওয়া হয়েছে।
const ownerImageUrl =
  "/ownerPhotos/481450005_1663005601253979_6860961757710885563_n.webp";

const OurDedication = () => {
  const meaningfulContent = {
    title: "Rooted in Purpose, Growing with Passion",
    story: (
      <>
        <p className="mb-4 text-gray-600 leading-relaxed">
          Team ChitroMul is a group of passionate and talented individuals who
          come together to create stunning images and capture beautiful moments
          on your special day. Each team member brings
        </p>
        <p className="mb-4 text-gray-600 leading-relaxed">
          their unique skill set and perspective to the table, ensuring that
          every aspect of your wedding photography is covered. Every team member
          plays a critical role in bringing your vision to life. The team also
          includes skilled editors who work behind the scenes to enhance the
          images, create a cohesive story, and produce a final product that
          exceeds your expectations. With our wedding photography team by your
          side, you can rest assured that every moment of your special day will
          be captured flawlessly.
        </p>
      </>
    ),
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:py-32 bg-gray-50">
      <div className="max-w-full mx-auto">
        <h1 className="md:text-4xl text-2xl text-center font-semibold mb-5">
          Our Dedication
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Our Story
            </h2>

            <h3 className="text-4xl mb-20 lg:text-5xl font-extrabold text-gray-900 border-l-4 border-blue-500 pl-4">
              {meaningfulContent.title}
            </h3>

            <div className="text-lg">{meaningfulContent.story}</div>

            <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
              Discover Our Values
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              // 2. সঠিক URL ব্যবহার করা হলো
              src={ownerImageUrl}
              alt="Owner or founder of Team ChitroMul"
              className="w-full h-full rounded-lg shadow-2xl transition duration-500 ease-in-out hover:shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDedication;
