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

const Events = () => {
  return (
    <div>
      <EventNavbar />
      <HeroBanner />
      <AboutPage />
      <PartnerSchools />
      <BenefitsSection />
      <VenueLocations />
      <ProcessPage />
      <AwardsList />
      <EventFooter />
    </div>
  );
};

export default Events;
