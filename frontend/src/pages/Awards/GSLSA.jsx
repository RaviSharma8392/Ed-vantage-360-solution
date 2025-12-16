import HeroBanner from "../../components/Event/HeroBanner";
import EventNavbar from "../../components/Event/EventNavbar";
import AboutPage from "../../components/Event/AboutSection";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import RegistrationCard from "../../components/Event/Ragistration/RegistrationCard";
import SubmissionProcess from "../../components/Event/VenueLocations/VenueLocations";
import EventAward from "../../components/Event/AwardsList";
import PastEditions from "../../components/Event/PastEditions";

import {
  eventData,
  aboutData,
  awardData,
  pastMedia,
  benefits,
  registrationConfig,
} from "../../data/event/GSLSA";
import { eventNavbar, logoSrc } from "../../data/event/eventNavbar";

/* ============================================================================ 
   📌 Dubai Events Page Component
============================================================================ */
const DubaiEvents = () => {
  /* ===================== Check Registration Status ===================== */
  const registrationOpen = new Date() <= new Date(registrationConfig.endDate);

  /* ===================== Hero Banner Buttons ===================== */
  const heroButtons = registrationOpen
    ? eventData.bannerData.buttons
    : [
        { label: "Learn More", href: "#about", primary: false },
        { label: "Registrations Closed", primary: true },
      ];

  /* ===================== CTA Button for Navbar ===================== */
  const navbarCta = registrationOpen
    ? eventData.ctaButton
    : { label: "Registrations Closed" };

  return (
    <div>
      {/* ===================== Navbar ===================== */}
      {registrationOpen && (
        <EventNavbar logoSrc={logoSrc} links={eventNavbar} cta={navbarCta} />
      )}

      {/* ===================== Hero Banner ===================== */}
      {registrationOpen && (
        <HeroBanner data={eventData.bannerData} buttons={heroButtons} />
      )}

      {/* ===================== Past Editions ===================== */}
      <PastEditions media={pastMedia} />

      {/* ===================== Awards Section ===================== */}
      {registrationOpen && <EventAward data={awardData} />}

      {/* ===================== About Section ===================== */}
      {registrationOpen && (
        <AboutPage
          sections={aboutData.sections}
          mainTitle={aboutData.mainTitle}
          tagline={aboutData.tagline}
          newTagLine={aboutData.otherTagLine}
        />
      )}

      {/* ===================== Benefits Section ===================== */}
      {registrationOpen && (
        <BenefitsSection
          title="Benefits Of The Awards"
          image="/pngtree-trophy-gold-high-quality-png-image_15125965-removebg-preview.png"
          benefits={benefits}
          summary="Plaque, certificate, life skill training, NGO partnerships, career fairs, and leadership programmes."
          buttonLink={registrationOpen ? registrationConfig.formLink : null}
          buttonLabel={registrationOpen ? "Register Now" : ""}
        />
      )}

      {/* ===================== Submission Process ===================== */}
      {registrationOpen && <SubmissionProcess />}
    </div>
  );
};

export default DubaiEvents;
