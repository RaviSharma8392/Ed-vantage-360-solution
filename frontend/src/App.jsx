import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/UserLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./components/Team";
import ServiceComponent from "./components/ServiceCard";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermAndService";
import CookiePrivacyPolicy from "./pages/Cokkies";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import AdminDashboard from "./screen/AdminDashbord";
import AdminLayout from "./layouts/AdminLayout";
import PricingPage from "./pages/PricingPage";
import User from "./User";
import CompletedWebinar from "./pages/Webinar";
import EdVantageWebinar from "./pages/NextEvent";

// 📸 Import the event banner image
import eventBanner from "./assets/image.png";

const EventPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center mt-10 pt-20 bg-transparent">
      <div className="relative w-[90vw] max-w-[450px]  rounded-lg overflow-hidden bg-white shadow-lg">
        {/* Image with smaller height */}
        <img
          src={eventBanner}
          alt="Event Banner"
          className="w-full max-h-[500px] "
        />

        {/* Close button (top-right) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-40 rounded-full p-1 hover:bg-opacity-60">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Action Buttons (overlay bottom) */}
        <div className="absolute bottom-25 left-20 w-full grid justify-center gap-4 px-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSff5GcdE1EKvrjZlPKXvc-aKi0RXb4Q68_LAaaJZm53FO-i6A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 font-bold px-4 py-2 rounded-md text-sm hover:bg-gray-100 shadow-md">
            Register Now
          </a>
          <button
            onClick={onClose}
            className="bg-white bg-opacity-80 text-blue-900 border border-blue-900 font-bold px-4 py-2 rounded-md text-sm hover:bg-blue-900 hover:text-white shadow-md">
            Remind Me Later
          </button>
        </div>
      </div>
    </div>
  );
};
// const EventPopup = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="relative w-[90vw] max-w-[500px] rounded-lg overflow-hidden">
//         {/* Event Image */}
//         <img
//           src={eventBanner}
//           alt="Event Banner"
//           className="w-full h-auto object-contain"
//         />

//         {/* Close button (top-right corner) */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded-full p-1 hover:bg-opacity-80">
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Action Buttons */}
//         <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 px-4">
//           <a
//             href="https://docs.google.com/forms/d/e/1FAIpQLSff5GcdE1EKvrjZlPKXvc-aKi0RXb4Q68_LAaaJZm53FO-i6A/viewform"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white text-blue-900 font-bold px-4 py-2 rounded-md text-sm shadow-md hover:bg-gray-100">
//             Register Now
//           </a>
//           <button
//             onClick={onClose}
//             className="bg-transparent border border-white text-white font-bold px-4 py-2 rounded-md text-sm shadow-md hover:bg-white hover:text-blue-900">
//             Remind Me Later
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* 🎯 Show popup */}
      {showPopup && <EventPopup onClose={() => setShowPopup(false)} />}

      {/* 🔽 App Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<ServiceComponent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/admin/users" element={<User />} />
        </Route>
        {/* Optional additional event routes */}
        {/* <Route path="/web" element={<CompletedWebinar />} />
        <Route path="/next" element={<EdVantageWebinar />} /> */}
      </Routes>
    </div>
  );
};

export default App;
