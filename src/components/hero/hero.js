import Carousel from "../carousel/carousel";
import React from "react";
import imageData from "../carousel/imageData";

import { NavbarGlobalContext } from "../context/navbarContext";

import "./hero.css";

const Hero = () => {
  const { closeSubmenu } = NavbarGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains(".nav-link")) {
      closeSubmenu();
    }
  };

  return (
    <div
      className="border border-none flex flex-col md:flex md:flex-row mt-1 md:mt-unset p-4 md:p-unset z-1 border border-black relative"
      onMouseOver={handleSubmenu}>
      <div className="border border-gray-300 min-w-[60%] p-6 rounded-3xl bg-white shadow-md flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-gray-800 tracking-tight">
          URBAN CART
        </h1>
        <p className="mt-4 text-base text-gray-600 text-center leading-relaxed text-3xl ">
          Your one-stop shop for all your urban lifestyle needs. Explore our
          wide range of products tailored just for you.
        </p>
        <div className="mt-6 text-center">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200">
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
