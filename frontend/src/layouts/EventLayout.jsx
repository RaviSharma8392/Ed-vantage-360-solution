import { Outlet } from "react-router-dom";
import EventFooter from "../components/Event/Footer/EventFooter";
import { footerData } from "../data/event/eventNavbar";

const EventLayout = () => {
  return (
    <>
      <Outlet />
      <EventFooter footerData={footerData} />
    </>
  );
};

export default EventLayout;
