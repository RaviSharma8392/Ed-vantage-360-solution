import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layouts
import Layout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermAndService";
import CookiePrivacyPolicy from "./pages/Cokkies";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import PricingPage from "./pages/PricingPage";

// Components
import Team from "./components/Team";
import ServiceComponent from "./components/ServiceCard";
import Blog from "./components/Blog";
import Careers from "./components/Careers";

// Admin
import AdminDashboard from "./screen/AdminDashbord";
import User from "./User";
import Events from "./pages/Awards/Event";
import EventDashboard from "./pages/session/SessionDashboard";
import PopupRedirect from "./Popup/Popup";
import AdminEvents from "./screen/AdminEvent";
DubaiEvents;
import KolkataEvent from "./pages/Awards/KolkataEvent";
import DubaiEvents from "./pages/Awards/DubaiEvents";
import Calc from "./Calc";
import TechStarAwards from "./pages/Awards/Noida_Event4thEdition";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {/* Show Popup only on home page */}
      {location.pathname === "/" && <PopupRedirect />}

      <Routes>
        {/* Public Routes */}
        <Route path="/GSSA" element={<Events />} />
        <Route path="/ela-kolkata-edition" element={<KolkataEvent />} />
        {/* added 4th edition */}
        <Route path="/ELTSA" element={<TechStarAwards />} />

        <Route path="/GSLSA" element={<DubaiEvents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/adminevent" element={<AdminEvents />} />
        {/* User Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="event" element={<EventDashboard />} />

          <Route path="team" element={<Team />} />
          <Route path="services" element={<ServiceComponent />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="calc" element={<Calc />} />
        </Route>
        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
