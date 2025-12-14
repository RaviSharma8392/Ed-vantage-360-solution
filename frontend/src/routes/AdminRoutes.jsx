import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

// Admin Pages
import AdminDashboard from "../screen/AdminDashbord";
import AdminEvents from "../screen/AdminEvent";
import User from "../User";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<User />} />
      </Route>

      {/* Standalone Admin Pages */}
      <Route path="/adminevent" element={<AdminEvents />} />
    </Routes>
  );
};

export default AdminRoutes;
