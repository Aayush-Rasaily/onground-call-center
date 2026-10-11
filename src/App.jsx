import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Plan from "./pages/Plan";
import Calendar from "./pages/Calendar";
import Pulse from "./pages/Pulse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="plan" element={<Plan />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="pulse" element={<Pulse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;