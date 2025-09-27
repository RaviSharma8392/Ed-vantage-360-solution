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
  // Unified event data
  const eventData = {
    logoSrc: "/LOGO[1].png",
    navLinks: [
      { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Awards", href: "#awards" },
      { name: "Contact", href: "#contact" },
      { name: "School Registration", href: "#register" },
    ],
    ctaButton: {
      label: "Register via Google Form",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform",
    },
    bannerData: {
      backgroundImage: "/image.png",
      title: "EdVantage Education Laureates Awards 2025 – 3rd Edition",
      tagline:
        "In Collaboration with Orange House | 15th November 2025 | Tollygunj Club, Kolkata",
      multilingualTexts: [
        "“शिक्षा और संस्कार पुरस्कार”",
        "“Education & Values Awards”",
        "“Prix de l'Éducation et des Valeurs”",
        "“教育と価値観賞”",
        "“교육과 가치상”",
        "“รางวัลการศึกษาและคุณธรรม”",
        "“අධ්‍යාපන හා අගය සම්මානය”",
      ],
      buttons: [
        { label: "Learn More", href: "#about", primary: false },
        {
          label: "Register Now",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform",
          primary: true,
          target: "_blank",
        },
      ],
    },
    aboutData: {
      mainTitle: "About EdVantage Global School Summit",
      // subTitle: "3rd Edition – Kolkata – 15th November 2025",
      tagline:
        "शिक्षा और संस्कार पुरस्कार\n\n“Education with Purpose, Values for Life”",
      sections: [
        {
          title: "Theme of Transformation",
          desc: "Recognising schools as catalysts of transformation—shaping character, inspiring innovation, and building inclusive, future-ready communities.",
        },
        {
          title: "Purpose with Heart",
          desc: `EdVantage Global School Summit & Awards 2025 honour schools across the globe that go beyond academics to nurture the holistic growth of students. The awards celebrate institutions that integrate life skills, values, and innovation into education, preparing students not just for exams, but for life. They recognise schools as change-makers and mentors of change, inspiring students to lead with empathy, integrity, resilience, and responsibility towards society. Through this initiative, GSSA seeks to build a global movement and purpose-driven, value-based education, where marks may fade but values last for life. ✨ This positioning ensures the awards stand not just as a recognition program, but as a movement towards value-based, future-ready education across the globe.`,
        },
        {
          title: "Award as a Movement",
          desc: "EdVantage Global School Summit & Awards 2025 is more than recognition—it’s a nationwide movement celebrating schools that nurture values, life skills, and innovation, preparing students not just for exams, but for life.",
        },
        {
          title: "Organisers & NGO",
          desc: "Organised by EdVantage 360 Solutions in partnership with Hope & Care Foundation, this award bridges education, values, and social impact.",
        },
      ],
    },

    registrationForm: {
      title:
        "EdVantage Education Laureates Awards 2025 – 3rd Edition (Kolkata)",
      description: `Welcome to the official registration for the EdVantage Education Laureates Awards 2025 – 3rd Edition in Kolkata.
Theme: “Recognising Leaders as Catalysts of Transformation – Shaping Character, Inspiring Innovation, and Building Inclusive, Future-Ready Communities.”

📌 Last Date of Registration: 7th November 2025
📌 For queries: edvantage360.info@gmail.com | +91 8700356606`,
      src: "https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform?embedded=true",
      height: 1500,
    },
    footerData: {
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
          facebook:
            "https://www.facebook.com/share/16Mc8BeLgx/?mibextid=wwXIfr",
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
    },
  };

  return (
    <div>
      {/* Navbar */}
      <EventNavbar
        logoSrc={eventData.logoSrc}
        links={eventData.navLinks}
        cta={eventData.ctaButton}
      />

      {/* Hero Banner */}
      <HeroBanner {...eventData.bannerData} />

      {/* Awards */}
      <AwardsList />

      {/* Process */}
      <ProcessPage />

      {/* About Section */}
      <AboutPage
        mainTitle={eventData.aboutData.mainTitle}
        subTitle={eventData.aboutData.subTitle}
        tagline={eventData.aboutData.tagline}
        sections={eventData.aboutData.sections}
      />

      {/* Benefits */}
      <BenefitsSection />

      {/* Submission */}
      <SubmissionProcess />

      {/* Registration Card */}
      <RegistrationCard />

      {/* Google Form */}
      <section className="w-full flex flex-col items-center bg-gray-100 p-6">
        {/* <h2 className="text-3xl font-bold mb-4 text-center">
          {eventData.registrationForm.title}
        </h2>
        <p className="text-gray-700 mb-6 text-center whitespace-pre-line">
          {eventData.registrationForm.description}
        </p> */}
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

      {/* Footer */}
      <EventFooter footerData={eventData.footerData} />
    </div>
  );
};

export default Events;
