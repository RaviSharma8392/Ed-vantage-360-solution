import React from "react";
import HeroBanner from "../../components/Event/HeroBanner";
import AwardsList from "../../components/Event/AwardsList";

import EventFooter from "../../components/Event/Footer/EventFooter";
import EventNavbar from "../../components/Event/EventNavbar";
import VenueLocations from "../../components/Event/VenueLocations/VenueLocations";
import AboutPage from "../../components/Event/AboutSection";
import ProcessPage from "./ProcessPage";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import PartnerSchools from "../../components/Event/PartnerSchools/PartnerSchools";
import RegistrationCard from "../../components/Event/Ragistration/RegistrationCard";

const Events = () => {
  return (
    <div>
      <EventNavbar />
      <HeroBanner />
      <AwardsList />
      <ProcessPage />

      <AboutPage />
      <PartnerSchools />
      <BenefitsSection />
      <VenueLocations />
      <RegistrationCard />

      <EventFooter />
    </div>
  );
};

export default Events;
