import { Routes, Route } from "react-router-dom";

import Layout from "../layouts/UserLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PricingPage from "../pages/PricingPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermAndService";
import CookiePrivacyPolicy from "../pages/Cokkies";
import Login from "../pages/Login";

// Components
import Team from "../components/Team";
import ServiceComponent from "../components/ServiceCard";
import Blog from "../components/Blog";
import Careers from "../components/Careers";

// Others
import EventDashboard from "../pages/session/SessionDashboard";
import Calc from "../Calc";

const UserRoutes = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />

      {/* Static Pages */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiePrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />

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
    </Routes>
  );
};

export default UserRoutes;
