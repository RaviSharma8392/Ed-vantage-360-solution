import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
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
//
const App = () => {
  return (
    <div>
      <Routes>
        {" "}
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
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/pricing" element={<PricingPage />} />{" "}
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />{" "}
          <Route path="/admin/users" element={<User />} />{" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App