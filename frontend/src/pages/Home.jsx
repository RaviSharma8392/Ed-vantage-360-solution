
// import WhyChooseUs from "../components/ChooseUs";
import WhyChooseUs from "../components/ChooseUs";
import UniqueAdvantage from "../components/DevolpmentProposel";
import TeacherTrainingProposal from "../components/DevolpmentProposel";
import Header from "../components/Header";
// import ModuleCard from "../components/Module";
// import ModuleCard from "../components/Module";
import Reviews from "../components/Reviews";
import ServiceComponent from "../components/ServiceCard";
import ShowText from "../components/ShowText";
import About from "./About";
// import PricingPage from "./PricingPage";

const Home = () => {
  return (
    <div>
      <Header />
      <ShowText />
       <About />

      <ServiceComponent />
      {/* <PricingPage/> */}
      {/* <WhyChooseUs /> */}
      <UniqueAdvantage/>
     {/* < ModuleCard/> */}
      
      <Reviews />
    </div>
  );
};
export default Home