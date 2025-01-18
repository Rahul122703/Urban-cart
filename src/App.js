import React from "react";
import Navbar from "./components/navbar/navbar";
import Sublinks from "./components/navbar/sublinks";
import SubSublinks from "./components/navbar/subsublink";
// import Bgvideo from "./assets/videos/HomePageBg.mp4";

const App = () => {
  return (
    <div className="parent_container">
      {/* <video className="video-bg" autoPlay muted loop>
        <source src={Bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Navbar />
      <Sublinks />
      <SubSublinks />
    </div>
  );
};

export default App;
