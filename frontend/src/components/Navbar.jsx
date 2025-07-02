import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "8700356606"; // Replace with your number (include country code if needed)
  const message = encodeURIComponent(
    "Hi, I am redirected from your website and would like to make an enquiry."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/team", label: "Our Team" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-white border-b border-orange-500 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4 md:px-6">
          {/* Mobile menu button and logo */}
          <div className="flex items-center justify-between w-full md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-orange-500 focus:outline-none p-2">
              <GiHamburgerMenu size={24} />
            </button>

            <div className="font-[Nunito] text-lg font-extrabold tracking-wide text-center flex-1">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-600">
                EdVantage 360
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:bg-green-500 text-white text-sm font-semibold py-2 px-3 rounded-md shadow-md transition-colors duration-300">
              Enquiry Now
            </a>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <div className="font-[Nunito] text-2xl font-extrabold tracking-wide">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <img
                    src="/Logo.png"
                    alt="EdVantage 360 Solutions Logo"
                    className="h-12 w-auto"
                    loading="lazy"
                  />
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-600">
                    EdVantage 360
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <ul className="flex items-center space-x-8 font-[Merriweather] text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-green-600 border-b-2 border-orange-500 pb-1"
                          : "text-gray-700 hover:text-green-500 transition-colors"
                      }`
                    }>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Enquiry button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-colors duration-300">
              Enquiry Now
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-white border-t border-orange-400 shadow-md transition-max-height duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}>
          <ul className="flex flex-col items-center space-y-4 font-[Merriweather] text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.path} className="w-full text-center">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 w-full ${
                      isActive
                        ? "text-orange-600 border-b-2 border-green-500"
                        : "text-gray-700 hover:text-green-500 transition-colors"
                    }`
                  }
                  onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer to avoid content hidden behind fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
