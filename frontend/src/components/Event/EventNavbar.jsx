import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
    { name: "School Registration", href: "#register" },
  ];

  return (
    <nav className="bg-black backdrop-blur-md font-[poppins] text-white shadow-lg sticky top-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/LOGO[1].png"
              alt="Logo"
              className="h-10 w-auto rounded-full shadow hover:scale-105 transition-transform"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 font-semibold text-lg">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-yellow-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-400 transition-colors shadow">
              Register via Google Form
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu">
              <svg
                className="h-7 w-7 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 space-y-3 bg-black px-4 py-4 rounded-lg">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium hover:text-yellow-400 transition-colors">
                  {link.name}
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform"
                https:target="_blank" //docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform
                rel="noopener noreferrer"
                className="block text-center bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                Register via Google Form
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default EventNavbar;
