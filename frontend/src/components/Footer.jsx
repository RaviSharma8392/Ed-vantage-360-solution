import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { SiVisa, SiMastercard, SiPaypal, SiGooglepay } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Footer = () => {
  const HOST = import.meta.env.VITE_API_HOST;

  const [email, setEmail] = useState({ userEmail: "" });
  // const [message,setMessage]=useState()
  const handelChange = (e) => {
    const { name, value } = e.target;
    setEmail((prev) => ({ ...prev, [name]: value }));
  };
  const submitEmail = async (e) => {
    e.preventDefault();
    if (!email.userEmail) {
      return window.alert("please write email!");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validEmail = emailRegex.test(email);
    if (!validEmail) window.alert("please write correct email!");

    try {
      const res = await axios.post(`${HOST}/newsLetter`, email, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      setEmail({ userEmail: "" });
      console.log(email);
      setEmail({
        userEmail: "",
      });
    } catch (error) {}
  };
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
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
          <p className="text-gray-600 leading-relaxed">
            Empowering educational institutions with data-driven insights,
            leadership development, and transformative strategies for the modern
            learning environment.
          </p>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Stay updated</h4>
            <div className="flex rounded-lg overflow-hidden shadow-sm">
              <input
                name="userEmail"
                value={email.userEmail}
                onChange={handelChange}
                type="email"
                placeholder="Email address"
                className="px-4 py-3 text-sm border-none focus:ring-2 focus:ring-green-500 focus:outline-none w-full"
              />
              <button
                onClick={submitEmail}
                className="  text-white px-4 py-3  bg-green-500 hover:bg-orange-400 transition-opacity text-sm font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-orange-500">
            Explore
          </h3>
          <ul className="space-y-3">
            {[
              // { label: "Services", href: "/services" },
              // { label: "Case Studies", href: "/case-studies" },
              // { label: "Resources", href: "/resources" },
              // // { label: "Blog", href: "/blog" },

              { label: "FAQ", href: "/faq" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-green-600 hover:underline transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-orange-500">
            Get in touch
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <HiOutlineLocationMarker
                className="mt-1 shrink-0 text-orange-500"
                size={18}
              />
              <span className="text-gray-600">
                B2/901, Cherry County, Techzone-IV,
                <br />
                Greater Noida West,
                <br />
                Gautam Budha Nagar - 201301
              </span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlinePhone className="shrink-0 text-orange-500" size={18} />
              <a
                href="tel:+918700356606"
                className="text-gray-600 hover:text-green-600 hover:underline transition-colors">
                +91 8700356606, +91 9813198272
              </a>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineMail className="shrink-0 text-orange-500" size={18} />
              <a
                href="mailto:info@edvantage360.com"
                className="text-gray-600 hover:text-green-600 hover:underline transition-colors">
                edvantage360.info@gmail.com{" "}
              </a>
            </div>

            {/* Business Hours */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <FiClock className="shrink-0 text-orange-500" size={18} />
                <h4 className="font-medium text-gray-900">Working Hours</h4>
              </div>
              <div className="pl-6 mt-1 space-y-1">
                <p className="text-gray-600 text-sm">Mon-Fri: 9AM - 6PM</p>
                <p className="text-gray-600 text-sm">Sat: 10AM - 2PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Payments */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-orange-500">
            Connect
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
              { icon: <FaTwitter />, href: "#", label: "Twitter" },
              { icon: <FaInstagram />, href: "#", label: "Instagram" },
              { icon: <FaFacebookF />, href: "#", label: "Facebook" },
              { icon: <FaYoutube />, href: "#", label: "YouTube" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-white p-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer">
                {social.icon}
              </a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Payment Methods</h4>
            <div className="flex gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <SiVisa className="text-blue-900" size={24} />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <SiMastercard className="text-red-600" size={24} />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <SiPaypal className="text-blue-600" size={24} />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <SiGooglepay className="text-gray-800" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} EdVantage 360 Solutions. All rights
          reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <NavLink
            to="/privacy"
            className="hover:text-green-600 hover:underline">
            Privacy Policy
          </NavLink>

          <NavLink
            to="/cookies"
            className="hover:text-green-600 hover:underline">
            Cookie Policy
          </NavLink>

          <NavLink to="/terms" className="hover:text-green-600 hover:underline">
            Terms of Service
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;