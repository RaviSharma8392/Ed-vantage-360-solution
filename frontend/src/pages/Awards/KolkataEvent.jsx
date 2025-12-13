import AboutSection from "../../components/Event/AboutSection";
import EventNavbar from "../../components/Event/EventNavbar";
import HeroBanner from "../../components/Event/HeroBanner";
import EventFooter from "../../components/Event/Footer/EventFooter";
import PastEditions from "../../components/Event/PastEditions";

const KolkataEvent = () => {
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
      "      https://www.youtube.com/embed/PuMVzdeVpkk?si=zoTtbz57x7EHqBTd",
      "https://www.youtube.com/embed/htq-NfTpRvU?si=DlQbVWHkIrq5PGhz",
    ],
  };
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
      href: "https://docs.google.com/forms/d/e/1FAIpQLSerE1V-Ns0ftY8NSODYE09ZrWVgO_IxRyevcFyf6Yq6_5E1rA/viewform",
    },
    banner: {
      backgroundImage: "/8e5417a5-bcec-4981-b8f9-b74ad3710d97.jpeg",
      title: "EdVantage Education Laureates Awards 2025",
      tagline: "3rd Edition – Kolkata | 22nd November 2025 | Tollygunj Club",
      foundation: "In Collaboration with Orange House",

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
          href: "https://docs.google.com/forms/d/e/1FAIpQLSerE1V-Ns0ftY8NSODYE09ZrWVgO_IxRyevcFyf6Yq6_5E1rA/viewform",
          primary: true,
          target: "_blank",
        },
      ],
    },
    about: {
      eventTitle: "EdVantage Education Laureates Awards 2025",
      edition: "3rd Edition – Kolkata – 22nd November 2025",
      dateAndVenue:
        "National Conclave on Life Skill, Value Education & Child Safeguarding ",
      newTagLine:
        "Not Just Another Conclave – Education Reimagined (In Collaboration with Orange House)",

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
          email: "edvantage360.info@gmail.com",
          phone: "+91 8700356606",
          website: "https://edvantage360solution.netlify.app",
          foundation: {
            name: "Hope & Care Foundation (In Collaboration with Orange House)",
            website: "https://thehopecarefoundation.org",
          },
        },
      ],
    },
    registrationForm: {
      title:
        "EdVantage Education Laureates Awards 2025 – 3rd Edition (Kolkata) (In Collaboration with Orange House)",
      description: `Welcome to the official registration for the EdVantage Education Laureates Awards 2025 – 3rd Edition in Kolkata.
Theme: “Recognising Leaders as Catalysts of Transformation – Shaping Character, Inspiring Innovation, and Building Inclusive, Future-Ready Communities.”

📌 Last Date of Registration: 15th November 2025
📌 For queries: edvantage360.info@gmail.com | +91 97349 99961`,
      src: "https://docs.google.com/forms/d/e/1FAIpQLSerE1V-Ns0ftY8NSODYE09ZrWVgO_IxRyevcFyf6Yq6_5E1rA/viewform",
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
  };

  return (
    <div>
      <EventNavbar
        logoSrc={eventData.logoSrc}
        links={eventData.navLinks}
        cta={eventData.ctaButton}
      />
      <HeroBanner {...eventData.banner} />
      <PastEditions media={pastMedia} />
      <AboutSection
        mainTitle={eventData.about.eventTitle}
        subTitle={eventData.about.edition}
        tagline={eventData.about.dateAndVenue}
        sections={eventData.about.sections}
        newTagLine={eventData.about.newTagLine}
      />
      <div className="flex bg-black justify-center md:justify-start">
        <img
          src="pngtree-trophy-gold-high-quality-png-image_15125965-removebg-preview.png"
          alt="Trophy"
          className="w-72 md:w-[400px] drop-shadow-2xl"
        />
      </div>

      <section className="w-full flex flex-col items-center bg-black text-gray-200 p-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">
          {eventData.registrationForm.title}
        </h2>
        <p className="text-gray-300 mb-6 text-center whitespace-pre-line">
          {eventData.registrationForm.description}
        </p>

        <a
          href={eventData.registrationForm.src}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition">
          Register Now
        </a>
      </section>

      <EventFooter footerData={footerData} />
    </div>
  );
};

export default KolkataEvent;
