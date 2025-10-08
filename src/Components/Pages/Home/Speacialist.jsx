import React from 'react';
import { motion } from 'framer-motion';

const Specialist = () => {
    const specialists = [
        {
            id: 1,
            title: 'Fashion Photography',
            description: 'Capturing style and elegance in every frame',
            image: 'https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww'
        },
        {
            id: 2,
            title: 'Lifestyle Photography',
            description: 'Documenting real moments with authentic emotion',
            image: 'https://i.ibb.co.com/gNpgh31/pexels-nickoloui-986733.jpg'
        },
        {
            id: 3,
            title: 'Nature Photography',
            description: 'Exploring the beauty of the natural world',
            image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D' // Note: This image is a duplicate, you might want to change it.
        },
        {
            id: 4,
            title: 'Portrait Photography',
            description: 'Revealing the unique personality in every subject',
            image: 'https://images.unsplash.com/photo-1542458579-bc6f69b5ce6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D'
        }
    ];

    // Variants for the overall grid container to stagger the children's animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Variants for each specialist item (for entrance animation)
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Variants for the image container (for the rounded-full to less-rounded hover effect)
    const imageVariants = {
        normal: {
            borderRadius: "50%", // Fully rounded (rounded-full)
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
        hover: {
            borderRadius: "20%", // Less rounded shape
            scale: 1.05,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className='mt-20 py-16 bg-gradient-to-b from-white to-gray-50'>
            <div className='container mx-auto px-4'>
                {/* Header Section */}
                <motion.div
                    className='text-center mb-16'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h1 className='md:text-4xl text-2xl font-bold text-gray-800 mb-4'>
                        Our Chitromul Specialist
                    </h1>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Meet our team of professional photographers specializing in different genres.
                        Each brings unique expertise and creative vision to capture your perfect moments.
                    </p>
                </motion.div>

                {/* Specialist Grid */}
                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {specialists.map((specialist) => (
                        <motion.div
                            key={specialist.id}
                            variants={itemVariants}
                            className='group text-center'
                        >
                            {/* Image Container */}
                            <motion.div
                                className='w-72 h-72 mx-auto overflow-hidden relative shadow-lg'
                                variants={imageVariants}
                                initial="normal" // Apply initial state (fully rounded)
                                whileHover="hover" // Animate to hover state (less rounded)
                            >
                                <motion.img
                                    src={specialist.image}
                                    alt={specialist.title}
                                    className='w-full h-full object-cover'
                                    // Use whileHover={{ scale: 1.1 }} on the image itself for a slight zoom effect
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                />

                                {/* Optional: Hover Effect Ring (Tailwind only) */}
                                {/* This div acts as a surrounding border that also changes shape on hover */}
                                <div className='absolute inset-0   rounded-full group-hover:rounded-[20%] transition-all duration-400 ease-in-out'></div>
                            </motion.div>

                            {/* Content */}
                            <motion.h3
                                className='text-xl font-semibold text-gray-800 mt-6 mb-2'
                                whileHover={{ color: "#3B82F6" }} // Tailwind blue-500 color
                                transition={{ duration: 0.3 }}
                            >
                                {specialist.title}
                            </motion.h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                {specialist.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Specialist;