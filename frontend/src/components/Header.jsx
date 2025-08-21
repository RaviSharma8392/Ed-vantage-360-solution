import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-[#fcd2b0] flex items-center justify-center min-h-screen p-4">
      <div className="text-center max-w-xl">
        {/* Logo */}
        <img
          src="/LOGO[1].png"
          alt="EdVantage 360 Solutions Logo"
          className="mx-auto mb-6 w-60 rounded-full shadow-lg border border-orange-400"
        />

        {/* Animated Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold italic text-gray-800">
            Empowering Educators, Enriching Classrooms!
          </h1>
          <h2 className="text-xl md:text-2xl italic text-gray-700">
            Transforming Teaching for Tomorrow’s Learners!
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            Explore Our Programs
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
