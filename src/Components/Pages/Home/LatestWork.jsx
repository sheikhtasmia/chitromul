import React from "react";

const LatestWork = () => {
    const latestWork = [
        {
            id: 1,
            image: "../../../../public/latestwork/DSC00811.jpg",
            // title: "Sunset ",
            category: "Wedding",
            type: "Photography",
        },
        {
            id: 2,
            image: "../../../../public/latestwork/DSC02392.jpg",
            category: "Wedding",
            type: "Photography",
        },
        {
            id: 3,
            image: "../../../../public/latestwork/DSC02471.jpg",
            category: "Wedding",
            type: "Photography",
        },
        // {
        //     id: 4,
        //     image: "../../../../public/latestwork/DSC02764.jpg",
        //     category: "Outdoor",
        //     type: "Photography",
        // },
        {
            id: 5,
            image: "../../../../public/latestwork/DSC02889.jpg",
            category: "Outdoor",
            type: "Photography",
        },
        {
            id: 6,
            image: "../../../../public/latestwork/DSC02975.jpg",
            category: "Outdoor",
            type: "Photography",
        },
        {
            id: 7,
            image: "../../../../public/latestwork/DSC08914.jpg",
            category: "Outdoor",
            type: "Photography",
        },
        {
            id: 8,
            image: "../../../../public/latestwork/IMG_2078.jpg",
            category: "Wedding",
            type: "Photography",
        },
        {
            id: 9,
            image: "../../../../public/latestwork/IMG_2308.JPG",
            category: "Wedding",
            type: "Photography",
        },
        {
            id: 10,
            image: "../../../../public/latestwork/IMG_3174.jpg",
            category: "Wedding",
            type: "Photography",
        },
    ];

    return (
        <section className="relative   py-20 px-4">

            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Our <span className="text-blue-600">Latest Work</span>
                </h1>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    Discover our finest creations blending art, emotion, and storytelling.
                    Each frame reflects the passion and creativity behind our lens.
                </p>
            </div>

            {/* ✅ Optimized Grid Layout: ছবিগুলো তাদের আসল অনুপাত অনুযায়ী বসবে */}
            <div className="max-w-full mx-auto">
                {/* 1, 2, 3 কলামের রেসপনসিভ গ্রিড */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {latestWork.map((work) => (
                        <div
                            key={work.id}
                            className="group relative overflow-hidden  transition-all duration-300 "
                        >
                            {/* 💡 আসল অনুপাত বজায় রাখার জন্য `w-full` ব্যবহার করা হয়েছে। 
                                 যদি ছবিটির অনুপাত 4:3 হয়, তাহলে সেটাই প্রদর্শিত হবে। 
                                 'object-cover' বা 'object-contain' ব্যবহার করে দেখা যেতে পারে।
                            */}
                            <img
                                src={work.image}
                                alt={work.title || "Latest Work"}
                                className="w-full object-cover rounded-xl  transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-white text-xl font-bold mb-1">{work.title || work.category}</h3>
                                {/* <p className="text-gray-200 text-sm">{work.category}</p> */}
                                <span className="mt-2 inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full self-start">
                                    {work.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestWork;


