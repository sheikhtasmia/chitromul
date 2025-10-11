import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- Icon Definitions ---
const IconCamera = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconHeart = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const IconStar = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const IconCompass = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M14 10a4 4 0 11-8 0V7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1.5M14 10h4.5a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V12a2 2 0 012-2h4.5M15 10v4.5a2 2 0 01-2 2H9.5a2 2 0 01-2-2V10M12 15h.01M12 12V9m-2 1h4m-4 4h4M12 20h.01M12 4V1m0 19v3m9-9h3M1-9h-3" /></svg>;
const IconLightbulb = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17.48a1 1 0 00-.174.484l-.512 1.638C8.598 20.472 9.69 21 11 21h2c1.31 0 2.402-.528 1.923-1.428l-.512-1.638a1 1 0 00-.174-.484M15 11a3 3 0 11-6 0 3 3 0 016 0zm3 0v.01M6 11v.01M12 3v.01M12 19v.01M21 9v.01M3 9v.01M12 15a4 4 0 100-8 4 4 0 000 8z" /></svg>;
const IconDiamond = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" /></svg>;
const IconRings = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m21-12a2 2 0 100-4m0 4a2 2 0 110-4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4" /></svg>;

// --- Modern Value Card with Advanced Hover Effects ---
const ModernValueCard = ({ title, description, icon: Icon, color, bgColor, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    const colorMap = {
        "text-green-600": {
            gradient: "from-green-500/20 via-green-400/30 to-green-300/40",
            light: "bg-green-50",
            medium: "bg-green-100",
            dark: "bg-green-500"
        },
        "text-purple-600": {
            gradient: "from-purple-500/20 via-purple-400/30 to-purple-300/40",
            light: "bg-purple-50",
            medium: "bg-purple-100",
            dark: "bg-purple-500"
        },
        "text-yellow-600": {
            gradient: "from-yellow-500/20 via-yellow-400/30 to-yellow-300/40",
            light: "bg-yellow-50",
            medium: "bg-yellow-100",
            dark: "bg-yellow-500"
        },
        "text-blue-600": {
            gradient: "from-blue-500/20 via-blue-400/30 to-blue-300/40",
            light: "bg-blue-50",
            medium: "bg-blue-100",
            dark: "bg-blue-500"
        }
    };

    const currentColor = colorMap[color] || colorMap["text-purple-600"];

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    const hoverVariants = {
        rest: {
            scale: 1,
            y: 0,
            rotate: 0
        },
        hover: {
            scale: 1.02,
            y: -8,
            rotate: -1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    };

    const iconVariants = {
        rest: {
            scale: 1,
            rotate: 0
        },
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    const bgVariants = {
        rest: {
            opacity: 0,
            scale: 0.8
        },
        hover: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            animate={isHovered ? "hover" : "rest"}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group cursor-pointer h-full"
        >
            {/* Animated Background Glow */}
            <motion.div
                variants={bgVariants}
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentColor.gradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Main Card Container */}
            <motion.div
                variants={hoverVariants}
                initial="rest"
                whileHover="hover"
                className={`
                    relative h-full bg-white p-8 rounded-3xl 
                    shadow-2xl border border-gray-100 
                    overflow-hidden transition-all duration-500
                    backdrop-blur-sm
                `}
            >
                {/* Animated Color Wave from Inside */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                        scale: 1.5,
                        opacity: 1,
                        transition: {
                            duration: 0.6,
                            ease: "easeOut"
                        }
                    }}
                    className={`absolute top-1/2 left-1/2 w-32 h-32 rounded-full ${currentColor.dark} opacity-20 blur-2xl -translate-x-1/2 -translate-y-1/2`}
                />

                {/* Floating Particles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }}
                    className="absolute inset-0"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{
                                scale: 1,
                                opacity: 0.6,
                                transition: {
                                    delay: i * 0.1,
                                    duration: 0.5
                                }
                            }}
                            className={`absolute w-2 h-2 rounded-full ${currentColor.dark} opacity-0`}
                            style={{
                                top: `${20 + i * 15}%`,
                                left: `${10 + i * 20}%`,
                            }}
                        />
                    ))}
                </motion.div>

                <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div
                        variants={iconVariants}
                        className={`${bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                    >
                        <Icon className={`h-8 w-8 ${color} transition-colors duration-300`} />
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                        className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300"
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                    >
                        {description}
                    </motion.p>

                    {/* Animated Underline */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileHover={{
                            width: "100%",
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                ease: "easeOut"
                            }
                        }}
                        className={`h-1 ${currentColor.dark} rounded-full mt-4 opacity-0`}
                    />
                </div>

                {/* Corner Accents */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.3 }
                    }}
                    className={`absolute top-0 right-0 w-6 h-6 ${currentColor.medium} rounded-bl-2xl rounded-tr-3xl`}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.3, delay: 0.1 }
                    }}
                    className={`absolute bottom-0 left-0 w-4 h-4 ${currentColor.light} rounded-tr-2xl rounded-bl-3xl`}
                />
            </motion.div>
        </motion.div>
    );
};

// --- Modern Feature Card for Mission Section ---
const ModernFeatureCard = ({ icon: Icon, title, color, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
            whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="text-center p-6 rounded-2xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
        >
            {/* Animated Background */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-${color}-300/20 rounded-2xl`}
            />

            <div className="relative z-10">
                <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    className={`w-14 h-14 bg-${color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${color}-200 transition-colors duration-300`}
                >
                    <Icon className={`h-7 w-7 text-${color}-600`} />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{title}</h3>
            </div>
        </motion.div>
    );
};

// --- Main Component ---
const AboutChitromul = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const sectionTextVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Mission Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-full mx-auto px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        {/* Text Content */}
                        <motion.div variants={sectionTextVariants}>
                            <motion.h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
                                Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mission</span>
                            </motion.h2>

                            <motion.p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed border-l-4 border-purple-500 pl-6 py-3 bg-purple-50/50 rounded-lg">
                                At our core, we believe that every moment tells a story worth preserving. Our mission is to transform fleeting instants into <strong>timeless visual narratives</strong> that resonate with emotion and authenticity.
                            </motion.p>

                            <motion.p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                                We don't just take pictures; we craft visual heirlooms that capture the essence of your journey, the depth of relationships, and the beauty of life's milestones.
                            </motion.p>

                            {/* Modern Feature Cards */}
                            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <ModernFeatureCard
                                    icon={IconCamera}
                                    title="Storytelling"
                                    color="purple"
                                    delay={0.4}
                                />
                                <ModernFeatureCard
                                    icon={IconHeart}
                                    title="Emotion"
                                    color="pink"
                                    delay={0.5}
                                />
                                <ModernFeatureCard
                                    icon={IconStar}
                                    title="Excellence"
                                    color="blue"
                                    delay={0.6}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Modern Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 3 }}
                            animate={isVisible ? { opacity: 1, x: 0, rotate: 0 } : {}}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                {/* Image */}
                                <div className="aspect-[4/5] md:aspect-[3/4] w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        src="https://plus.unsplash.com/premium_photo-1674389878102-fe66cd2bc29e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1pc3Npb24lMjBwaG90b2dyYXBoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
                                        alt="Mission Photography"
                                    />
                                </div>

                                {/* Floating Decorative Elements */}
                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full shadow-lg"
                                />
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-6 left-6 w-8 h-8 bg-pink-400 rounded-full shadow-lg"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/* Our Story Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-full mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">

                        {/* Text Content */}
                        <motion.div
                            variants={sectionTextVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                                Our Story
                            </h2>

                            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed border-l-4 border-pink-500 pl-6 py-3 bg-pink-50/50 rounded-lg">
                                Our journey began over a <strong>decade ago</strong> when our founder, Sazzadul Bari, discovered her passion for photography during a backpacking trip across Europe.
                            </p>

                            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                                In 2015, we officially opened our studio with a simple philosophy: every photograph should tell a story. Today, our team continues this legacy, blending technical expertise with artistic vision to create images that preserve feelings for generations to come.
                            </p>

                            {/* Statistics Cards */}
                            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
                                {[
                                    { value: "10+", label: "Years of Storytelling", color: "purple" },
                                    { value: "5000+", label: "Moments Captured", color: "pink" },
                                    { value: "98%", label: "Client Satisfaction", color: "blue" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.4 + index * 0.2 }}
                                        className="bg-white p-6 rounded-xl shadow-lg flex-1 min-w-[160px] text-center border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-600 font-medium">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotate: -2 }}
                            animate={isVisible ? { opacity: 1, x: 0, rotate: 0 } : {}}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl aspect-[4/3] flex items-center justify-center shadow-2xl overflow-hidden group">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1674389991716-c85ddd942811?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlzc2lvbiUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                                    alt="Our Story"
                                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <IconCompass className="h-16 w-16 text-white mb-4" />
                                    <p className="text-white font-semibold text-lg">Our Journey</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutChitromul;