import Header from "../components/Header";
import ShowText from "../components/ShowText";

// Pages / Sections
import About from "./About";
// import CompletedWebinar from "./Webinar";

// Components
import ServiceComponent from "../components/ServiceCard";
import UniqueAdvantage from "../components/DevolpmentProposel";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Hero / Intro Text */}
      <ShowText />

      {/* Completed Webinars */}
      {/* <CompletedWebinar /> */}

      {/* About Section */}
      <About />

      {/* Services Offered */}
      <ServiceComponent />

      {/* Unique Advantage / Proposal */}
      <UniqueAdvantage />

      {/* Customer / Student Reviews */}
      <Reviews />
    </div>
  );
};

export default Home;
