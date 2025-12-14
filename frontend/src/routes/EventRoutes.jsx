import { Routes, Route } from "react-router-dom";

// Event Pages
import GSSA from "../pages/Awards/GSSA";
import KolkataEvent from "../pages/Awards/Ela-kolkata-edition";
import DubaiEvents from "../pages/Awards/GSLSA";
import TechStarAwards from "../pages/Awards/ELTSA";
import EventLayout from "../layouts/EventLayout";

const EventRoutes = () => {
  return (
    <Routes>
      <Route element={<EventLayout />}>
        <Route path="/GSSA" element={<GSSA />} />
        <Route path="/ela-kolkata-edition" element={<KolkataEvent />} />
        <Route path="/ELTSA" element={<TechStarAwards />} />
        <Route path="/GSLSA" element={<DubaiEvents />} />
      </Route>
    </Routes>
  );
};

export default EventRoutes;
