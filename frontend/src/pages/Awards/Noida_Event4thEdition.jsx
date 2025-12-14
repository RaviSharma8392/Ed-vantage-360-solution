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
import PastEditions from "../../components/Event/PastEditions";

/* ============================================================================
   📌 Page Data
============================================================================ */
const pastMedia = {
  images: [
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/577033826_122138036102952660_7182624574828691026_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YEtcBGu3oSsQ7kNvwGe1InQ&_nc_oc=AdkFWo6OYN5CuqQX4VzkMT2tJCiuLtptNYmz0ncCOrZW4fxljTh5l9FAkrGbK7vfCqU&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=WPbDnAd-rXIcjatRqR3p1w&oh=00_AfkOeDY9-KycYidho17v-9CU2WXDULNDfnw_xwQJo0CnPg&oe=69431308",
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/597972951_122145473150952660_1152247363199395630_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NuCK-BdAqO0Q7kNvwEKnBle&_nc_oc=AdkiIATzOQx2tiukPQhuXvW1DJ7HH6OQAIXINZc9q0GFSbCBjIokUY5F-dG_52PABeY&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=lhC0IMPpWA9YM-YQYgiQSQ&oh=00_AfnCmf5t_am4eX9WAuz-5CxdQFq8m1ddT8ywUNyn3-XijA&oe=69433A91",
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/594966481_122145473018952660_1249551650482582950_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JvVuLsLc7ocQ7kNvwEs0dh5&_nc_oc=Adn4F3z49uuNEu92UOncPn4fO-flOOCLxHsB_S_4ZTMjaYYDB7N4IW58onQefZpRAK4&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=dt4sHgiaHUwY2DekRMsqwA&oh=00_Afmh_GnDZKdsUk5BvDQMn3th3EW8B01X8qNB4kyj1IasTQ&oe=69434397",
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/597493519_122145473162952660_6010494506277937092_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7Og8QLujJxYQ7kNvwFua3ry&_nc_oc=AdnD_hyaerbRuXAVVKTmWbjB-iLOl1IHKpXiHFfnB2GYGjTHQcTjp1DSHaux3Y926fU&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=ewJmm3oUeWZbbA06CpfO0A&oh=00_Afldo8q5xLQ16n8hMSx_VXa9CPDA7ZTrPR-FLCKvubE4Bw&oe=694332B5",
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/597395620_122145472874952660_5839789688691468937_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KCVvvP_TacIQ7kNvwFUzRmp&_nc_oc=Adl4tjfpVDEXD_sa3wf02qlz8nQsj897rEHGlbjCzVcktUlGrakUgtiFsA_xEzs5m3Q&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=WUy3dyB2z3aWEKq3pz6zVA&oh=00_AfklanbKQXVRJHNtIrqW_Bpk4LN_pF96zATN1jJkFUON2w&oe=69431AC3",
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/594972794_122145472814952660_3203031144274766251_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=62UyL6RGBjsQ7kNvwFGmvUk&_nc_oc=AdmuJB912MKJRx8a-CDjJ-JpguG95tSq32qgH9OneS_xO2wumAM1zJXNbRpkadI7CIQ&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=MmCwYz5MERJqDsLlaTTfwQ&oh=00_AfkTGb8zYrxEn8XY2LZCePNg56UqeBUK6nzNkxI0rcJ9yw&oe=69434180",
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/596716814_122145473288952660_8194135737020316402_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=T2A-DZcsoG8Q7kNvwHwzR6M&_nc_oc=Adm3SLR_mGPYrwKcx7MfKzT6hRQV8lpjXggnfAnaI60D9suDgvQeUjsnO2JbTQTmz74&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=pzSce62fSE18Yfp-g6rlqQ&oh=00_AfmaugicTQQMYHtMV5y9DvgZ4IRC1yAK7EfSVOgy6pZGeQ&oe=694314AE",
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/596811796_122145473312952660_6722834164196287060_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-nFDHm5gnI8Q7kNvwFvR2A3&_nc_oc=AdnGUavGVMjIIuY6_eYU0nf26tdYpaNWtlnwMqmiD2cMVAwFSDeNFT1_L8Aw9H__S1w&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=JGNDIpUL0YEFrEn7YRtFKA&oh=00_AflSEf_vWC8gATpoKmyi6MuNgy2OMs2ANeTCjmVLcrT0xQ&oe=69431448",
    "https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/594546867_122144622710952660_800986012649657375_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LG-QTbJXIB0Q7kNvwEqvjPz&_nc_oc=Adn11HyEMXmmbUaG7E7bts7V6GdrqSpwu16rVNxoTUaR5iFbaHfMZ5l436e8CilYQSc&_nc_zt=23&_nc_ht=scontent.fdel14-2.fna&_nc_gid=-V5KsjDT3DB42YPkeQ4DDg&oh=00_AfkoZm7K3ex9PSI7kwOtYdY7OxilgmOm4syEai1AWhcaIA&oe=694319CF",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758961920/5affe09a-be1e-44e6-acfd-a2a8ad72d26d_rd4tlq.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758962270/5db41e3d-9e98-48cb-b9d0-8205d1a36e98_bsnbi9.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758962016/dde2941e-9525-465b-afae-1678e27a3f72_ask6j7.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758962030/4eba1d78-bde6-491e-b8d3-b5e1fd1bc7b6_q6xi25.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758961981/31ab59b1-ad7c-4a15-a9c7-fa692664ddd5_ptm14e.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758961959/02dc942e-02d5-46ca-88db-23e45c7b9bc3_fzg9ho.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758962040/c2eb64ed-e707-4026-91a3-6aa40061a414_v0tmcl.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758961938/76fab571-b7f7-43e7-9bb5-105e993d224e_ledvs2.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758961951/2981fc5f-e94e-4aa4-b789-20b168888a72_rhul2e.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758980241/3ab0e793-ef03-4b0d-a0f3-6257b1709aca_clqahy.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758980262/46d74d42-1e96-44b7-bc41-d92baf61f179_plpwhd.jpg",
    "https://res.cloudinary.com/dbcciugyn/image/upload/v1758980300/5a9737ee-98b6-4bac-b76d-c4cf3abe9d7c_hj4ww8.jpg",
  ],
  videos: [
    "     https://scontent-bom5-2.xx.fbcdn.net/o1/v/t2/f2/m412/AQPfId4fUpoRy5gMcmZN3raxP5avQlvczJWA1ZopiTtjSPG2LEILgbRTSUnXsDwM8jH_QC3biqjRzvSxymdClSIRvGDCgFVWo6MZjoCj9g.mp4?_nc_cat=100&_nc_sid=8bf8fe&_nc_ht=scontent-bom5-2.xx.fbcdn.net&_nc_ohc=2dO6HuavgWkQ7kNvwGGUJ6U&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMjk2LnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6MTMzNTg2MjEzMTYyNTY2NSwiYXNzZXRfYWdlX2RheXMiOjQsInZpX3VzZWNhc2VfaWQiOjEwMTIzLCJkdXJhdGlvbl9zIjoxNzUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=GZd8a5oYOc7K1W9rZWGIIQ&_nc_zt=28&_nc_rml=0&oh=00_Afm_pD4Vz3kQDW31I81_AcbPRw-DOHZaq8GrsPY3hQivgg&oe=694342D2&bitrate=293019&tag=sve_sd",
    "https://www.youtube.com/embed/htq-NfTpRvU?si=DlQbVWHkIrq5PGhz",
  ],
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
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdor0_bSJVFoVCFDwAwad8PY_G7W84YQg3JycIAYBWPWFfn0Q/viewform?pli=1",
  },
  bannerData: {
    backgroundImage: "/noidaEvent.png",
    title: "EdVantage Laureates – Tech Star Awards 2026 4th Edition",
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
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdor0_bSJVFoVCFDwAwad8PY_G7W84YQg3JycIAYBWPWFfn0Q/viewform?pli=1",
        primary: true,
        target: "_blank",
      },
    ],
  },
  aboutData: {
    mainTitle: "About EdVantage Laureates – Tech Star Awards 2026 4th Edition ",
    tagline:
      "शिक्षा और संस्कार पुरस्कार\n\n“Education with Purpose, Values for Life”",
    sections: [
      {
        title: "Theme of Transformation",
        desc: "Recognising schools as catalysts of transformation—shaping character, inspiring innovation, and building inclusive, future-ready communities.",
      },
      {
        title: "Purpose with Heart",
        desc: "We are proud to announce India’s Biggest Teacher Awards Series dedicated to honouring Science, AI, Coding, STEM & Computer Science Educators who are shaping the future with their vision and innovation.Join us at the EdVantage Laureates – Tech Star Awards 2026 (4th Edition) and celebrate the extraordinary educators who inspire change and drive transformative learning.",
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
    title: "EdVantage Laureates – Tech Star Awards 2026 4th Edition ",
    subtitle:
      "Celebrating leaders and educators shaping the future of learning.",
  },
  categories: [
    {
      //   title: "For Principals",
      awards: [
        "AI Education Pioneer Award",
        "Outstanding STEM Educator Award",
        "Tech Integration Champion Award",
        "Trailblazer in Experiential Learning Award",
        "Inspiring Innovator Award",
      ],
    },
    // {
    //   title: "For Directors",
    //   awards: [
    //     "Exemplary School Director Award",
    //     "Global Leadership in Education Management",
    //     "Outstanding Contribution to School Excellence Award",
    //     "Strategic Leadership in Education Award",
    //     "Distinguished Educational Director Honor",
    //   ],
    // },
    // {
    //   title: "For Teachers",
    //   awards: [
    //     "Global Teacher of Excellence Award",
    //     "Innovative Teaching Practices Award",
    //     "Inspirational Educator Recognition",
    //     "Excellence in Classroom Innovation Award",
    //     "Lifetime Contribution to Teaching Excellence",
    //   ],
    // },
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
  name: "EdVantage Laureates – Tech Star Awards 2026 4th Edition",
  description:
    "Celebrating Excellence Beyond Borders. Recognizing schools with Plaque, Certificate, National Recognition, Life Skill Training, NGO Partnerships, Career Fairs, and Leadership Training.",
  eventType: "Education & Awards Summit",
  startDate: "2026-13-01",
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

const TechStarAwards = () => {
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
      <PastEditions media={pastMedia} />

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

      {/* Footer */}
      <EventFooter footerData={eventData.footerData} />
    </div>
  );
};

export default TechStarAwards;
