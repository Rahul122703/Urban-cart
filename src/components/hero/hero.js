import Carousel from "../carousel/carousel";
import React from "react";
import imageData from "../carousel/imageData";

import { NavbarGlobalContext } from "../context/navbarContext";

import "./hero.css";

// import bgimage from "../../assets/hero-left.jpg";

const Hero = () => {
  const { closeSubmenu } = NavbarGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains(".nav-link")) {
      closeSubmenu();
    }
  };

  return (
    <div
      className="border border-none flex flex-col md:flex md:flex-row mt-1 md:mt-unset p-4 md:p-unset z-1 relative"
      onMouseOver={handleSubmenu}>
      <div className="min-w-[60%] p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl filter blur-lg opacity-30 w-full h-full absolute"></div>

        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            URBAN CART
          </h1>
          <p className="text-lg lg:text-xl font-medium text-gray-700 mb-6">
            Your one-stop shop for all your urban lifestyle needs. Explore our
            wide range of products tailored just for you.
          </p>
          <button className="cursor-pointer bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      <Carousel autoSlide={true}>
        {imageData.map((source, index) => (
          <div
            key={index}
            className="w-full h-full phone-height-carousel flex-shrink-0 flex items-center justify-center z-1">
            <video
              className="object-cover h-[38rem] w-full rounded-3xl z-1"
              autoPlay
              muted
              loop>
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
