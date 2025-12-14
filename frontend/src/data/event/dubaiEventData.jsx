import { Award, BookOpen, Users, Briefcase, Star } from "lucide-react";

const dubaiEventData = {
  registrationDeadline: "15-07-2028",

  eventData: {
    logoSrc: "/LOGO[1].png",
    navLinks: [
      { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Awards", href: "#awards" },
      { name: "Contact", href: "#contact" },
      { name: "School Registration", href: "#register" }
    ],
    ctaButton: {
      label: "Register via Google Form",
      href: "https://docs.google.com/forms/..."
    },
    bannerData: {
      backgroundImage: "/dubaievnt.png",
      title:
        "EdVantage Global School Leaders Summit & Awards 2025, 4th Edition – Abu Dhabi & Dubai",
      tagline:
        "20+ Award Categories | Global Recognition | Networking | Student & School Benefits"
    }
  },

  awardData: {
    header: {
      title: "EdVantage Global School Leaders Summit & Awards 2025",
      subtitle: "Celebrating leaders and educators shaping the future"
    },
    categories: []
  },

  benefitsTitle: "Benefits Of The Awards",
  benefitsImage:
    "pngtree-trophy-gold-high-quality-png-image_15125965-removebg-preview.png",

  benefits: [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Plaque + Certificate",
      desc:
        "Schools receive a plaque, certificate, and national recognition."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      title: "Life Skill Training",
      desc: "Exclusive student life skill training sessions."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "NGO Partnerships",
      desc: "Collaboration with NGOs for social impact programmes."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      title: "Career Fairs",
      desc: "Access to curated career fairs for students."
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "Leadership Training",
      desc: "Leadership training programmes for students."
    }
  ],

  summary:
    "Plaque + Certificate + Recognition + Life Skill Training + NGO Partnerships + Career Fairs + Leadership Training",

  registrationCard: {
    header: {
      title:
        "EdVantage Global School Leaders Summit & Awards 2025, 4th Edition",
      tagline: "Education with Purpose, Values for Life"
    }
  },

  pastMedia: {
    images: [],
    videos: []
  },

  schemaData: {
    "@type": "Event",
    name: "EdVantage Global School Summit & Awards 2025"
  },

  footerData: {
    organization: { name: "EdVantage 360 Solutions" }
  }
};

export default dubaiEventData;
