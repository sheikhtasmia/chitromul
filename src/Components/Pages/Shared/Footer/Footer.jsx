import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/chitromul",
      color: "from-pink-500 to-yellow-500",
    },

    {
      icon: IoLogoYoutube,
      href: "https://www.youtube.com/@chitromul",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/@chitromul",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/chitromul",
      color: "from-blue-600 to-cyan-400",
    },
  ];

  return (
    <motion.footer
      className="relative bg-gradient-to-b from-gray-950 to-black text-white pt-16 pb-10 px-4 md:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* subtle animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,0,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-full mx-auto relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Section */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <img className="w-[90px]" src="/navbar/chitromul.png" alt="" />
            <p className="text-gray-400 leading-relaxed">
              Capturing Moments, Creating Memories
            </p>

            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group p-[2px] rounded-full bg-gradient-to-r ${color}`}
                  variants={iconVariants}
                  whileHover="hover"
                  initial="initial"
                >
                  <div className="bg-gray-900 p-3 rounded-full group-hover:bg-opacity-80 transition-all duration-300">
                    <Icon className="text-white text-lg" />
                  </div>
                  <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-75 bg-gradient-to-r ${color} transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white border-b-2 border-amber-500 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "About ", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Portfolio", link: "/portfolio" },
                { name: "Contact us", link: "/contact" },
              ].map(({ name, link }, index) => (
                <motion.li key={index} whileHover={{ x: 6 }}>
                  <a
                    href={link}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white border-b-2 border-amber-500 pb-2 inline-block">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Wedding & Main Ceremony",
                // "Wedding Cinematography",
                "Gaye Holud",
                "Reception",
                "Pre & Post Wedding shoots",
                "Outdoor & Portfolio Shoots",
                "Birthday/Annaprashan",
                "Corporate & Commercial Events",
                "Documentary Film Making",
                "Music Video Production",
                "Event Management",
              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 6 }}>
                  <span className="text-gray-400 hover:text-amber-400 cursor-pointer transition-colors">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white border-b-2 border-amber-500 pb-2 inline-block">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 6 }}
              >
                <div className="bg-amber-500 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <span className="text-gray-400">
                  South college para Tangail,Dhaka,Bangladesh.
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 6 }}
              >
                <div className="bg-amber-500 p-2 rounded-full">
                  <FaPhone className="text-white" />
                </div>
                <span className="text-gray-400">+8801778974133</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-gray-700 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Stay Connected With Us
              </h3>
              <p className="text-gray-400">
                Get exclusive updates, offers, and photography tips.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
              />
              <motion.button
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-r-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-amber-400 font-semibold">Chitromul</span>. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-amber-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
