import React from "react";
import HeroBanner from "../../components/Event/HeroBanner";
import AwardsList from "../../components/Event/AwardsList";
import EventFooter from "../../components/Event/Footer/EventFooter";
import EventNavbar from "../../components/Event/EventNavbar";
import AboutPage from "../../components/Event/AboutSection";
import BenefitsSection from "../../components/Event/Benefit/BenefitsSection";
import RegistrationCard from "../../components/Event/Ragistration/RegistrationCard";
import SubmissionProcess from "../../components/Event/VenueLocations/VenueLocations";
import EventAward from "../../components/Event/AwardsList";
import { Award, BookOpen, Users, Briefcase, Star } from "lucide-react";

/* ============================================================================
   📌 Page Data
============================================================================ */

// Registration Card Details
const RagistrationCardDetails = {
  header: {
    title:
      "EdVantage Global School Leaders Summit & Awards 2025, 4th Edition – Abu Dhabi & Dubai",
    tagline: '"Education with Purpose, Values for Life"',
  },
  registration: {
    sectionTitle: "School Registration",
    description: "Join us in recognizing schools that go beyond academics...",
    detailsTitle: "Registration Details",
    fee: "₹1,50,000 per school.",
    registrationDeadline: ": 15th November 2025 ",
  },
  awards: {
    title: "Awards Ceremony",
    date: "4th – 7th Dec 2025",
    venues: ["Abu Dhabi"],
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
    form: "https://docs.google.com/forms/d/e/1FAIpQLSe9ZvvFmEIrTS0V0iJfoF_PFku50-1_xgwNDDXjfFIeZZH6YQ/viewform",
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
    items: ["Abu Dhabi"],
  },
};

// Event Data (navbar, banner, about, footer)
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
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe9ZvvFmEIrTS0V0iJfoF_PFku50-1_xgwNDDXjfFIeZZH6YQ/viewform",
  },
  bannerData: {
    backgroundImage: "/dubaievnt.png",
    title:
      "EdVantage Global School Leaders Summit & Awards 2025, 4th Edition – Abu Dhabi & Dubai",
    tagline:
      "20+ Award Categories | Global Recognition | Networking | Student & School Benefits",
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
        href: "https://docs.google.com/forms/d/e/1FAIpQLSe9ZvvFmEIrTS0V0iJfoF_PFku50-1_xgwNDDXjfFIeZZH6YQ/viewform",
        primary: true,
        target: "_blank",
      },
    ],
  },
  aboutData: {
    mainTitle: "About EdVantage Global School Leaders Summit & Awards 2025",
    tagline:
      "शिक्षा और संस्कार पुरस्कार\n\n“Education with Purpose, Values for Life”",
    sections: [
      {
        title: "Theme of Transformation",
        desc: "Recognising schools as catalysts of transformation—shaping character, inspiring innovation, and building inclusive, future-ready communities.",
      },
      {
        title: "Purpose with Heart",
        desc: `EdVantage Global School Summit & Awards 2025 honour schools across the globe that go beyond academics to nurture the holistic growth of students. The awards celebrate institutions that integrate life skills, values, and innovation into education, preparing students not just for exams, but for life. They recognise schools as change-makers and mentors of change, inspiring students to lead with empathy, integrity, resilience, and responsibility towards society.`,
      },
      {
        title: "Award as a Movement",
        desc: "More than recognition—it’s a nationwide movement celebrating schools that nurture values, life skills, and innovation, preparing students not just for exams, but for life.",
      },
      {
        title: "Organisers & NGO",
        desc: "Organised by EdVantage 360 Solutions in partnership with Hope & Care Foundation, this award bridges education, values, and social impact.",
      },
    ],
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
  },
};

// Awards Data
const awardData = {
  header: {
    title:
      "EdVantage Global School Leaders Summit & Awards 2025, 4th Edition – Abu Dhabi & Dubai",
    subtitle:
      "Celebrating leaders and educators shaping the future of learning.",
  },
  categories: [
    {
      title: "For Principals",
      awards: [
        "Visionary Principal Leadership Award",
        "Global Excellence in School Leadership Award",
        "Transformational Principal Award",
        "Innovative School Leadership Excellence Award",
        "Lifetime Achievement in Educational Leadership",
      ],
    },
    {
      title: "For Directors",
      awards: [
        "Exemplary School Director Award",
        "Global Leadership in Education Management",
        "Outstanding Contribution to School Excellence Award",
        "Strategic Leadership in Education Award",
        "Distinguished Educational Director Honor",
      ],
    },
    {
      title: "For Teachers",
      awards: [
        "Global Teacher of Excellence Award",
        "Innovative Teaching Practices Award",
        "Inspirational Educator Recognition",
        "Excellence in Classroom Innovation Award",
        "Lifetime Contribution to Teaching Excellence",
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

/* ============================================================================
   📌 Page Component
============================================================================ */

const DubaiEvents = () => {
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
      <EventAward data={awardData} />

      {/* About Section */}
      <AboutPage
        mainTitle={eventData.aboutData.mainTitle}
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

      {/* Venue / Submission */}
      <SubmissionProcess />

      {/* Registration Card */}
      <RegistrationCard data={RagistrationCardDetails} />

      {/* Footer */}
      <EventFooter footerData={eventData.footerData} />
    </div>
  );
};

export default DubaiEvents;
