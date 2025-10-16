import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaFacebookF } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Sazzadul Bari",
    passion: "Founder & Core Photographer",
    img: "/Team members/Sazzadul Bari.jpg",
    fb: "https://www.facebook.com/sazzadul.bari.79/",
  },
  {
    name: "Emin EmRan",
    passion: "Co-Founder & Photographer",
    img: "/Team members/Emin EmRan.jpg",
    fb: "https://www.facebook.com/mgkemran/",
  },
  {
    name: "Hafijur Rahman",
    passion: "Cinematographer",
    img: "/Team members/Hafijur.jpg",
  },
  {
    name: "Ariyan Khan Abir",
    passion: "Chief Event Organizer",
    img: "/Team members/Ariyan Khan Abir.jpg",
  },
];

const OurFaces = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-900">
          The Faces Behind <span className="text-blue-600">Chitromul</span> 📸
        </h1>
        <p className="text-lg text-gray-600 mb-16">
          Meet the creative minds shaping our vision.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-56"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden relative">
                <div className="relative w-full h-[580px] sm:h-[550px] md:h-[600px] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 translate-y-full group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-md font-light text-blue-300 mb-3">
                      {member.passion}
                    </p>
                    <div className="flex gap-3">
                      {member.fb && (
                        <a
                          href={member.fb}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-blue-600 transition"
                        >
                          <FaFacebookF className="text-white text-lg" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gray-50 text-center transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-md text-gray-600">{member.passion}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination-custom mt-10 mb-4 flex justify-center"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default OurFaces;
