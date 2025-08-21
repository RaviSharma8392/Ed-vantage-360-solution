import React from "react";
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const EventFooter = () => {
  return (
    <footer className="bg-black border-t text-gray-300 py-20 px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Column 1: Logo + About */}
        <div className="flex flex-col gap-4">
          <img
            src="https://edvantage360solution.netlify.app"
            alt="EdVantage Udaan Logo"
            className="h-10 w-10 bg-white rounded-lg p-2 shadow"
            loading="lazy"
          />
          <h3 className="text-2xl font-bold text-white mt-2">
            EdVantage Udaan 2025
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            <span className="font-semibold text-white">EdVantage Udaan</span> is
            a national education awards initiative that recognises schools as
            catalysts of transformation. We celebrate institutions that nurture
            innovation, life skills, and values—preparing students not just for
            exams, but for life.
          </p>
          <p className="text-sm leading-relaxed text-gray-400 mt-2">
            Organised by{" "}
            <span className="font-semibold text-white">
              EdVantage 360 Solutions
            </span>
            in collaboration with{" "}
            <span className="font-semibold text-white">
              Hope & Care Foundation
            </span>{" "}
            (NGO Partner).
          </p>
        </div>

        {/* Column 2: Partner */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Our Partner</h3>
          <p className="text-sm text-gray-400 mb-4">
            Working together to bring impactful, value-driven education across
            India.
          </p>
          <div className="flex items-center">
            <img
              src="https://thehopecarefoundation.org/wp-content/uploads/2023/04/logo-300x158-png.png"
              alt="EdVantage Udaan Official Logo"
              className="h-14 w-auto bg-white rounded-lg p-2 shadow"
              loading="lazy"
            />
          </div>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              <a
                href="mailto:edvantage360.info@gmail.com"
                className="hover:text-white">
                edvantage360.info@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span>+91 8700356606 / +91 9813198272</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <a
                href="https://edvantage360solution.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white">
                edvantage360solution.netlify.app
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-4">
            Follow us on social platforms to stay updated about upcoming events,
            school recognitions, and education initiatives.
          </p>
          <div className="flex gap-5 mb-6">
            <a
              href="https://www.facebook.com/share/16Mc8BeLgx/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/edvantage_360_solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <a
            href="https://thehopecarefoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-sm">
            thehopecarefoundation.org
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500 leading-relaxed">
        <p>
          © {new Date().getFullYear()} EdVantage Udaan — A National Education
          Awards. All Rights Reserved.
        </p>
        <p className="mt-2 text-gray-400">
          Designed, Managed & Developed with ❤️ by{" "}
          <a
            href="https://ravi-portfolio-web.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:underline">
            Ravi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default EventFooter;
