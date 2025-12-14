import React from "react";
import HeroBanner from "../../components/Event/HeroBanner";
import EventFooter from "../../components/Event/Footer/EventFooter";
import EventNavbar from "../../components/Event/EventNavbar";
import AboutPage from "../../components/Event/AboutSection";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import EventAward from "../../components/Event/AwardsList";
import PastEditions from "../../components/Event/PastEditions";
import { eventNavbar, logoSrc } from "../../data/event/eventNavbar";

import {
  eventData,
  aboutData,
  pastMedia,
  awardData,
  benefits,
  registrationConfig,
} from "../../data/event/techStarAwards.data";

/* ===================== REGISTRATION CHECK ===================== */
const registrationOpen = new Date() <= new Date(registrationConfig.endDate);

const TechStarAwards = () => {
  return (
    <div>
      {/* Navbar */}
      <EventNavbar
        logoSrc={logoSrc}
        links={eventNavbar}
        cta={
          registrationOpen
            ? eventData.ctaButton
            : { label: "Registrations Closed" }
        }
      />

      {/* Hero Banner */}
      <HeroBanner
        data={eventData.bannerData}
        buttons={
          registrationOpen
            ? eventData.bannerData.buttons
            : [
                { label: "Learn More", href: "#about", primary: false },
                { label: "Registrations Closed", primary: true },
              ]
        }
      />

      {/* Past Editions */}
      <PastEditions media={pastMedia} />
      {/* Awards Section */}
      <EventAward data={awardData} />
      {/* About */}
      <AboutPage
        sections={aboutData.sections}
        mainTitle={aboutData.mainTitle}
        tagline={aboutData.tagline}
        newTagLine={aboutData.otherTagLine}
      />

      {/* Benefits Section */}
      <BenefitsSection
        title="Benefits Of The Awards"
        image="/pngtree-trophy-gold-high-quality-png-image_15125965-removebg-preview.png"
        benefits={benefits}
        summary="Plaque, certificate, life skill training, NGO partnerships, career fairs, and leadership programmes."
        buttonLink={registrationOpen ? registrationConfig.formLink : null}
        buttonLabel={registrationOpen ? "Register Now" : ""}
      />
    </div>
  );
};

export default TechStarAwards;
