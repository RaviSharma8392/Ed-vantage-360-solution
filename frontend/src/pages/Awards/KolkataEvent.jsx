import React from "react";
import AboutSection from "../../components/Event/AboutSection";
import EventNavbar from "../../components/Event/EventNavbar";
import HeroBanner from "../../components/Event/HeroBanner";
import EventFooter from "../../components/Event/Footer/EventFooter";
import AwardsList from "../../components/Event/AwardsList";
import ProcessPage from "./ProcessPage";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import RegistrationCard from "../../components/Event/Ragistration/RegistrationCard";
import SubmissionProcess from "../../components/Event/VenueLocations/VenueLocations";

const KolkataEvent = () => {
  const eventData = {
    logoSrc: "/LOGO[1].png",
    navLinks: [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Awards", href: "#awards" },
      { name: "Contact", href: "#contact" },
      { name: "School Registration", href: "#register" },
    ],
    ctaButton: {
      label: "Register via Google Form",
      href: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSerE1V-Ns0ftY8NSODYE09ZrWVgO_IxRyevcFyf6Yq6_5E1rA/formResponse",
    },
    banner: {
      backgroundImage: "/8e5417a5-bcec-4981-b8f9-b74ad3710d97.jpeg",
      title: "EdVantage Education Laureates Awards 2025",
      tagline: "3rd Edition – Kolkata | 15th November 2025 | Tollygunj Club",
      multilingualTexts: [
        "“शिक्षा और संस्कार पुरस्कार”",
        "“Education & Values Awards”",
        "“Prix de l'Éducation et des Valeurs”",
        "“教育と価値观賞”",
        "“교육과 가치상”",
        "“รางวัลการศึกษาและคุณธรรม”",
        "“අධ්‍යාපන හා අගය සම්මානය”",
      ],
      buttons: [
        { label: "Learn More", href: "#about", primary: false },
        {
          label: "Register Now",
          href: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSerE1V-Ns0ftY8NSODYE09ZrWVgO_IxRyevcFyf6Yq6_5E1rA/formResponse",
          primary: true,
          target: "_blank",
        },
      ],
    },
    about: {
      eventTitle: "EdVantage Education Laureates Awards 2025",
      edition: "3rd Edition – Kolkata – 15th November 2025",
      dateAndVenue:
        "National Conclave on Life Skill, Value Education & Child Safeguarding “Not Just Another Conclave – Education Reimagined” (In Collaboration with Orange House)",
      sections: [
        {
          title: "Theme of Transformation",
          desc: "Recognising Leaders as catalysts of transformation—shaping character, inspiring innovation, and building inclusive, future-ready communities.",
        },
        {
          title: "Purpose & Objective",
          desc: "EdVantage Education Laureates Awards honour leaders across the globe that go beyond academics to nurture the holistic growth of students. The awards celebrate educators that integrate life skills, values, and innovation into education, preparing students not just for exams, but for life. They recognise EdVantage Laureates as change-makers and mentors of change, inspiring students to lead with empathy, integrity, resilience, and responsibility towards society. Through this initiative, ELA seeks to build a global movement and purpose-driven, value-based education, where marks may fade but values last for life. ✨ This positioning ensures the awards stand not just as a recognition program, but as a movement towards value-based, future-ready education across the globe.",
        },
        {
          title: "Awards",
          desc: "EdVantage The Transformative Educator Award – celebrating impact beyond the classroom",
        },
        {
          title: "Organisers & NGO",
          desc: "EdVantage 360 Solutions\nEmail: edvantage360.info@gmail.com\nPhone: 8700356606\nWebsite: https://edvantage360solution.netlify.app\n\nHope & Care Foundation\nWebsite: https://thehopecarefoundation.org",
        },
      ],
    },
    registrationForm: {
      title:
        "EdVantage Education Laureates Awards 2025 – 3rd Edition (Kolkata) (In Collaboration with Orange House)",
      description: `Welcome to the official registration for the EdVantage Education Laureates Awards 2025 – 3rd Edition in Kolkata.
Theme: “Recognising Leaders as Catalysts of Transformation – Shaping Character, Inspiring Innovation, and Building Inclusive, Future-Ready Communities.”

📌 Last Date of Registration: 7th November 2025
📌 For queries: edvantage360.info@gmail.com | +91 8700356606`,
      src: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSerE1V-Ns0ftY8NSODYE09ZrWVgO_IxRyevcFyf6Yq6_5E1rA/formResponse",
      height: 1500,
    },
  };

  const footerData = {
    logo: { src: "/LOGO[1].png", alt: "EdVantage Logo" },
    organization: { name: "EdVantage 360 Solutions" },
    description:
      "EdVantage is a global education awards initiative that recognises schools as catalysts of transformation. We celebrate institutions that nurture innovation, life skills, and values—preparing students not just for exams, but for life.",
    ngoPartner: {
      name: "EdVantage 360 Solutions",
      partner: "Hope & Care Foundation",
      note: "NGO Partner",
    },
    partner: {
      description:
        "Working together to bring impactful, value-driven education across India.",
      logo: {
        src: "https://thehopecarefoundation.org/wp-content/uploads/2023/04/logo-300x158-png.png",
        alt: "Hope & Care Foundation",
      },
    },
    contacts: [
      {
        type: "email",
        value: "edvantage360.info@gmail.com",
        href: "mailto:edvantage360.info@gmail.com",
      },
      { type: "phone", value: "+91 8700356606 / +91 9813198272" },
      {
        type: "website",
        value: "edvantage360solution.netlify.app",
        href: "https://edvantage360solution.netlify.app",
      },
    ],
    socials: {
      description:
        "Follow us on social platforms to stay updated about upcoming events, school recognitions, and education initiatives.",
      links: {
        facebook: "https://www.facebook.com/share/16Mc8BeLgx/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/edvantage_360_solutions",
        linkedin: "https://linkedin.com",
      },
      website: "https://thehopecarefoundation.org",
    },
    bottomBar: {
      organization: "EdVantage 360 Solutions",
      designer: {
        name: "Ravi",
        link: "https://ravi-portfolio-web.netlify.app/",
      },
    },
  };

  return (
    <div>
      <EventNavbar
        logoSrc={eventData.logoSrc}
        links={eventData.navLinks}
        cta={eventData.ctaButton}
      />
      <HeroBanner {...eventData.banner} />
      {/* <AwardsList /> */}
      {/* <ProcessPage /> */}
      <AboutSection
        mainTitle={eventData.about.eventTitle}
        subTitle={eventData.about.edition}
        tagline={eventData.about.dateAndVenue}
        sections={eventData.about.sections}
      />
      <BenefitsSection />
      {/* <SubmissionProcess /> */}
      {/* <RegistrationCard /> */}
      <section className="w-full flex flex-col items-center bg-black text-gray-200 p-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">
          {eventData.registrationForm.title}
        </h2>
        <p className="text-gray-300 mb-6 text-center whitespace-pre-line">
          {eventData.registrationForm.description}
        </p>
        <iframe
          src={eventData.registrationForm.src}
          width="100%"
          height={eventData.registrationForm.height}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded-xl shadow-lg"
          title="EdVantage Registration Form"
        />
      </section>

      <EventFooter footerData={footerData} />
    </div>
  );
};

export default KolkataEvent;
