import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sublinks from "../../components/navbar/sublinks";
import SubSublinks from "../../components/navbar/subsublink";
import Footer from "../../components/footer/Footer";

import { NavbarProvider } from "../../components/context/navbarContext";

import Hero from "../../components/hero/hero";

const App = () => {
  return (
    <div className="parent_container">
      <NavbarProvider>
        <Navbar />
        <Sublinks />
        <SubSublinks />
        <Hero />
        <Footer />
      </NavbarProvider>
    </div>
  );
};

export default App;
