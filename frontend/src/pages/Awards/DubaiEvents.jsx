import EventNavbar from "../../components/Event/EventNavbar";
import HeroBanner from "../../components/Event/HeroBanner";
import PastEditions from "../../components/Event/PastEditions";
import EventAward from "../../components/Event/AwardsList";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import SubmissionProcess from "../../components/Event/VenueLocations/VenueLocations";
import RegistrationCard from "../../components/Event/Ragistration/RegistrationCard";
import EventFooter from "../../components/Event/Footer/EventFooter";
import { isRegistrationOpen } from "../../datefunction";

import data from "../../data/event/dubaiEventData";

const DubaiEvents = () => {
  const registrationOpen = isRegistrationOpen(data.registrationDeadline);

  return (
    <div>
      <EventNavbar
        logoSrc={data.eventData.logoSrc}
        links={data.eventData.navLinks}
        cta={data.eventData.ctaButton}
      />

      <HeroBanner {...data.eventData.bannerData} />

      <PastEditions media={data.pastMedia} />

      {registrationOpen && <EventAward data={data.awardData} />}

      {registrationOpen && (
        <BenefitsSection
          benefits={data.benefits}
          schemaData={data.schemaData}
          title={data.benefitsTitle}
          image={data.benefitsImage}
          summary={data.summary}
          buttonLink={data.eventData.ctaButton.href}
        />
      )}

      {registrationOpen && <SubmissionProcess />}

      {registrationOpen && <RegistrationCard data={data.registrationCard} />}

      <EventFooter footerData={data.footerData} />
    </div>
  );
};

export default DubaiEvents;
