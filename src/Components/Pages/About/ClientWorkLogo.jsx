import React from 'react';
import { motion } from 'framer-motion';


const ClientWorkLogo = () => {

    // Define the client logos with public paths and company names
    const clientLogos = [
        { id: 1, src: '/clientworks/MBSTU_logo.png', alt: 'MBSTU University' },
        { id: 2, src: '/clientworks/ছায়া নীড়.png', alt: 'Chhaya Nir Community' },
        { id: 3, src: '/clientworks/3.png', alt: 'Chhaya Nir Community' },
        { id: 4, src: '/clientworks/4.png', alt: 'Chhaya Nir Community' },
        { id: 5, src: '/clientworks/5.png', alt: 'Chhaya Nir Community' },
        { id: 6, src: '/clientworks/Kureghor.jpg', alt: 'Kureghor Band' },
        { id: 7, src: '/clientworks/New.jpg.jpg', alt: 'BGIFT Institute of Science & Technology' },
        { id: 8, src: '/clientworks/Chiklee Resort And Convention Center.jpg', alt: 'Chiklee Resort And Convention Center' },
        { id: 9, src: '/clientworks/Daily Intizar.jpg', alt: 'Daily Intizar Newspaper' },
        { id: 10, src: '/clientworks/VBD.jpg', alt: 'Volunteer for Bangladesh' },
        { id: 11, src: '/clientworks/11.png', alt: 'Chhaya Nir Community' },
    ];

    // Framer Motion variant for simple, static entrance
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-extrabold text-center text-gray-800 mb-3"
                >

                    Successfully completed visual Project with


                </motion.h2>

                <p className='max-w-2xl mx-auto text-lg md:text-xl text-center mb-12   font-semibold'>we're proud to have collaborated with these amazing clients on their visual projects.</p>

                {/* Static Logo Grid */}
                <div
                    className="grid 
                                grid-cols-2    /* 2 columns on small devices */
                                md:grid-cols-4 /* 3 columns on medium devices */
                                
                                gap-8 md:gap-12 justify-items-center"
                >
                    {clientLogos.map((client, index) => (
                        <motion.div
                            key={client.id}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }} // Staggered delay for nice entrance effect
                            className="flex flex-col items-center text-center p-4"
                        >
                            {/* Logo Image Container */}
                            <div className="w-full h-20 flex items-center justify-center mb-3">
                                <img
                                    src={client.src}
                                    alt={client.alt}
                                    // Set full opacity and object-contain to ensure logo fits nicely
                                    className="max-h-full max-w-full object-contain opacity-90 transition duration-300 hover:opacity-100 hover:scale-105"
                                />
                            </div>

                            {/* Company Name */}
                            <p className="text-sm font-semibold text-gray-600 mt-2">
                                {client.alt}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientWorkLogo;
