import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router";

import Homepage from "./pages/homepage/Homepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Registerpage from "./pages/Registerpage/Registerpage";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
