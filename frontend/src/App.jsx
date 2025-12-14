import React from "react";
import { useLocation } from "react-router-dom";

// Popup
import PopupRedirect from "./Popup/Popup";

// Routes
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import EventRoutes from "./routes/EventRoutes";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <PopupRedirect />}

      <UserRoutes />
      <EventRoutes />
      <AdminRoutes />
    </>
  );
};

export default App;
