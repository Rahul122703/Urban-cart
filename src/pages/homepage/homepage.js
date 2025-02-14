import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sublinks from "../../components/navbar/sublinks";
import SubSublinks from "../../components/navbar/subsublink";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/hero";
import BannerCarousel from "../../components/bannerCarousel/BannerCarousel";

import { NavbarProvider } from "../../components/context/navbarContext";

const App = () => {
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <Sublinks />
        <SubSublinks />
        <Hero />
        <BannerCarousel />
        <Footer />
      </NavbarProvider>
    </>
  );
};

export default App;
