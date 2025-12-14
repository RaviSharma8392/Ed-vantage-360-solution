import HeroBanner from "../../components/Event/HeroBanner";
import EventAward from "../../components/Event/AwardsList";
import EventNavbar from "../../components/Event/EventNavbar";
import AboutPage from "../../components/Event/AboutSection";
import ProcessPage from "./ProcessPage";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import RegistrationCard from "../../components/Event/Ragistration/RegistrationCard";
import SubmissionProcess from "../../components/Event/VenueLocations/VenueLocations";

import {
  RagistrationCardDetails,
  eventData,
  aboutData,
  schoolAwardsData,
  benefits,
  registrationConfig,
  pastMedia,
} from "../../data/event/GSSA";

import { eventNavbar, logoSrc } from "../../data/event/eventNavbar";
import PastEditions from "../../components/Event/PastEditions";

/* ===================== REGISTRATION CHECK ===================== */
const registrationOpen = new Date() <= new Date(registrationConfig.endDate);

const GSSA = () => {
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

      {/* Always visible sections */}
      <PastEditions media={pastMedia} />
      {/* Awards Section */}
      <EventAward data={schoolAwardsData} />

      {/* Process Section */}
      {registrationOpen && <ProcessPage />}

      {/* About Section */}
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

      {/* Submission Process */}
      {registrationOpen && <SubmissionProcess />}

      {/* Registration Card */}
      {registrationOpen && <RegistrationCard data={RagistrationCardDetails} />}
    </div>
  );
};

export default GSSA;
