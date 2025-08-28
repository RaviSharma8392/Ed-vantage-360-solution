import React from "react";
import HeroBanner from "../../components/Event/HeroBanner";
import AwardsList from "../../components/Event/AwardsList";

import EventFooter from "../../components/Event/Footer/EventFooter";
import EventNavbar from "../../components/Event/EventNavbar";
import AboutPage from "../../components/Event/AboutSection";
import ProcessPage from "./ProcessPage";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import RegistrationCard from "../../components/Event/Ragistration/RegistrationCard";
import SubmissionProcess from "../../components/Event/VenueLocations/VenueLocations";

const Events = () => {
  return (
    <div>
      <EventNavbar />
      <HeroBanner />
      <AwardsList />
      <ProcessPage />

      <AboutPage />
      <BenefitsSection />
      <SubmissionProcess />
      <RegistrationCard />
      <div className="w-full   flex justify-center items-center bg-gray-100 p-4">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform?embedded=true"
          width="100%"
          height="1500"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded-xl shadow-lg"
          title="EdVantage Registration Form">
          Loading…
        </iframe>
      </div>

      <EventFooter />
    </div>
  );
};

export default Events;
