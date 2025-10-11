import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Lucide React Icons (optional, but good for real buttons)
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AboutBanner = () => {
    // Tomar dewa banners data ekhane
    const banners = [

        {
            image: "https://plus.unsplash.com/premium_photo-1667538960183-82690c60a2a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaHklMjBhYm91dCUyMGJhbm5lciUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
            title: "About us",
            text: "Experience stunning visuals and creative perspectives.",
            // button: "Explore Now", // ❌ Button will NOT be rendered
        }
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden" id="home">
            {/* 1. Swiper instance setup */}
            <Swiper
                spaceBetween={0}
                centeredSlides
                // Autoplay set kora holo 5000ms (5 second)
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                // Smooth transition er jonyo speed barano holo (1 second)
                speed={1000}
                pagination={{ clickable: true }}
                // Navigation custom button er class use kora holo
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full bannerSwiper"
            >
                {/* 2. Swiper Slides Mapping */}
                {banners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* ✅ Image Layer */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out hover:scale-105"
                            />

                            {/* ✅ Overlay Layer and Text Content */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                                <h2 className="text-2xl md:text-6xl lg:text-7xl font-extrabold mb-4  tracking-tight shadow-text">
                                    {item.title}
                                </h2>
                                <p className="text-sm md:text-xl lg:text-2xl max-w-3xl font-light mb-8  opacity-90">
                                    {item.text}
                                </p>
                                {/* 🌟 Conditional Button Rendering 🌟 */}
                                {item.button && (
                                    <button className="px-10 py-4 bg-white text-black font-bold text-lg uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 hover:text-white transform hover:scale-105">
                                        {item.button}
                                    </button>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 3. Custom Navigation Buttons (Modern Design) */}
            {/* Aage er theke aro modern and better navigation buttons add kora holo jate 'real' button feel ashe */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer p-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all duration-300 shadow-2xl opacity-70 hover:opacity-100">
                <ChevronLeft className="w-6 h-6 text-white" />
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer p-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all duration-300 shadow-2xl opacity-70 hover:opacity-100">
                <ChevronRight className="w-6 h-6 text-white" />
            </div>

            {/* 4. Custom Styling for Swiper and Buttons */}
            <style jsx global>{`
                /* Default Swiper icons hide kora holo */
                .bannerSwiper .swiper-button-prev:after,
                .bannerSwiper .swiper-button-next:after {
                    content: '';
                    font-size: 0;
                }

                /* Custom button gulor icon styling remove kora holo, karon ekhon amra 'lucide-react' icons use korchi */
                .swiper-button-prev-custom:after,
                .swiper-button-next-custom:after {
                    content: none; 
                }

                /* Prev/Next button positions adjust kora holo jodi chaowa hoy */
                .bannerSwiper .swiper-button-prev-custom {
                    left: 20px;
                }
                .bannerSwiper .swiper-button-next-custom {
                    right: 20px;
                }

                /* Pagination (Dots) Styling - same as before, clean and modern */
                .bannerSwiper .swiper-pagination-bullet-active {
                    background: #3b82f6 !important; 
                    width: 12px;
                    height: 12px;
                }
                .bannerSwiper .swiper-pagination-bullet {
                    background: white; 
                    opacity: 0.7;
                    transition: all 0.3s;
                }

                /* Extra Text Shadow */
                .shadow-text {
                    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
                }

            `}</style>
        </div>
    );
};

export default AboutBanner;


