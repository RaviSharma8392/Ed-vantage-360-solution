import React from "react";
import HeroBanner from "../../components/Event/HeroBanner";
import EventAward from "../../components/Event/AwardsList";
import EventFooter from "../../components/Event/Footer/EventFooter";
import EventNavbar from "../../components/Event/EventNavbar";
import AboutPage from "../../components/Event/AboutSection";
import ProcessPage from "./ProcessPage";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import RegistrationCard from "../../components/Event/Ragistration/RegistrationCard";
import SubmissionProcess from "../../components/Event/VenueLocations/VenueLocations";
import { Award, BookOpen, Briefcase, Star, Users } from "lucide-react";

const Events = () => {
  /** ------------------------------
   * Registration Card Details
   * ------------------------------ */
  const RagistrationCardDetails = {
    header: {
      title: "EdVantage Global School Summit & Awards 2025",
      tagline: '"Education with Purpose, Values for Life"',
    },
    registration: {
      sectionTitle: "School Registration",
      description: "Join us in recognizing schools that go beyond academics...",
      detailsTitle: "Registration Details",
      fee: "₹11,000 per school",
      registrationDeadline: "25th September 2025",
      submissionDeadline: "30th September 2025",
    },
    awards: {
      title: "Awards Ceremony",
      date: "26th October 2025",
      venues: ["New Delhi", "Abu Dhabi"],
      note: "Charges Applicable (for Abu Dhabi will be shared after receiving the form)",
    },
    submission: {
      title: "Submission Requirements",
      items: [
        "Statement of Purpose (max 500 words)",
        "Evidence of Achievement (photos, certificates, videos, testimonials)",
        "Project reports and NGO internship details",
      ],
    },
    note: "Payment confirmation must be uploaded along with the Google Form submission.",
    links: {
      form: "https://forms.gle/BfuSZkmqVTYWknby8",
      formText: "Register via Google Form",
      contact: "edvantage360.info@gmail.com",
      contactText: "Contact for Queries",
    },
    payment: {
      title: "Payment QR Code",
      subtitle: "Scan to complete payment",
      qrSrc: "/qr.png",
    },
    neft: {
      title: "NEFT Details",
      details: {
        Bank: "Bank of Baroda",
        "Account No": "96250200001416",
        "Account Holder": "EDVANTAGE 360 SOLUTIONS",
        IFSC: "BARB0DBBAHA",
      },
    },
    venues: {
      title: "Venue Details",
      items: [
        "New Delhi",
        "Abu Dhabi — Charges Applicable (will be mentioned after receiving the form)",
      ],
    },
  };

  /** ------------------------------
   * Event Data
   * ------------------------------ */
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
      title: "EdVantage Global School Summit & Awards 2025 (GSSA)",
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
        { type: "phone", value: "+91 8700356606 / +91 97349 99961" },
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

  /** ------------------------------
   * Awards Data
   * ------------------------------ */
  const schoolAwardsData = {
    header: {
      title: "EdVantage Global School Summit & Awards 2025",
      subtitle: "Honoring schools that inspire transformation and innovation.",
    },
    categories: [
      {
        title: "For Schools",
        awards: [
          "EdVantage Life Skills Excellence School Award – Shaping Students for Life, Not Just Exams",
          "EdVantage Community Impact School Award – Educating Beyond Classrooms",
          "EdVantage Innovation in Education Award – Teaching with a Difference",
          "EdVantage Holistic Development Champion Award – Balancing Mind, Body & Soul",
          "EdVantage Best Mentorship & Guidance School Award – Guiding the Path to Greatness",
          "EdVantage Sustainable Development Champion Award – Building a Better Tomorrow Today",
          "EdVantage Green School Award – Learning in Harmony with Nature",
          "EdVantage Social Service Leadership Award – Service Above Self",
          "EdVantage Digital Learning Excellence Award – Empowering Students in the Digital Age",
          "EdVantage Cultural Heritage & Values Award – Rooted in Tradition, Ready for the Future",
          "EdVantage Student Well-being & Inclusion Award – A School for Every Child.",
          "EdVantage Value Education Excellence Award – Instilling Ethics & Morals for Life",
          "EdVantage Emotional Intelligence Champion Award – Nurturing Hearts, Not Just Minds",
          "EdVantage Global Citizenship School Award – Preparing Students for the World Stage",
          "EdVantage Health & Fitness Excellence Award – Strong Bodies, Strong Minds",
          "EdVantage Safety & Security Excellence Award – Ensuring Safe Havens for Learning",
          "EdVantage Innovative Co-Curricular Integration Award – Blending Learning Beyond Books",
          "EdVantage Teacher Empowerment Award – Strengthening Educators, Enriching Futures",
          "EdVantage Parental Engagement Excellence Award – Building Strong School-Home Partnerships",
          "EdVantage Inclusive Growth Award – Leaving No Child Behind",
        ],
      },
    ],
  };

  // Benefits Data
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Plaque + Certificate",
      desc: "Schools receive a plaque, certificate, and national recognition on EdVantage 360 platforms.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      title: "Life Skill Training",
      desc: "Exclusive student life skill training sessions as part of the award recognition.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "NGO Partnerships",
      desc: "Collaboration with NGOs for internships and impactful social service programmes.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      title: "Career Fairs",
      desc: "Awarded schools gain access to curated career fairs for student growth.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "Leadership Training",
      desc: "Special leadership training programmes designed for students of the awarded schools.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "EdVantage Global School Summit & Awards 2025",
    description:
      "Celebrating Excellence Beyond Borders. Recognizing schools with Plaque, Certificate, National Recognition, Life Skill Training, NGO Partnerships, Career Fairs, and Leadership Training.",
    eventType: "Education & Awards Summit",
    startDate: "2025-12-04",
    endDate: "2025-12-07",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Abu Dhabi, UAE",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Venue Address Here",
        addressLocality: "Abu Dhabi",
        addressRegion: "UAE",
        postalCode: "00000",
        addressCountry: "AE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "EdVantage 360",
      url: "https://edvantage360.com",
    },
    offers: {
      "@type": "Offer",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe9ZvvFmEIrTS0V0iJfoF_PFku50-1_xgwNDDXjfFIeZZH6YQ/viewform",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
    },
  };

  const summary =
    "• Plaque + Certificate + Recognition on EdVantage 360 Platforms + Life Skill Training Sessions for students + Partnership with NGOs for internships & Social Impact programmes + Career Fairs in the schools + Student Leadership Training for the school.";

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
      <EventAward data={schoolAwardsData} />

      {/* Process */}
      <ProcessPage />

      {/* About Section */}
      <AboutPage
        mainTitle={eventData.aboutData.mainTitle}
        subTitle={eventData.aboutData.subTitle}
        tagline={eventData.aboutData.tagline}
        sections={eventData.aboutData.sections}
      />

      {/* Benefits Section */}
      <BenefitsSection
        benefits={benefits}
        schemaData={schemaData}
        title="Benefits Of The Awards"
        image="pngtree-trophy-gold-high-quality-png-image_15125965-removebg-preview.png"
        summary={summary}
        buttonLink={eventData.ctaButton.href}
      />
      {/* Submission Process */}
      <SubmissionProcess />

      {/* Registration Card */}
      <RegistrationCard data={RagistrationCardDetails} />

      {/* Google Form */}
      <section className="w-full flex flex-col items-center bg-gray-100 p-6">
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
