import React, { useEffect } from "react";
// import heroVideo from './pexels-aykut-suvari-19920671 (1080p).mp4';
// import heroPic from '../assests/heroPic.png';
import "../styles/hero.css";
import ScrollVideoPlayer from "./ScrollableVideo";
import video from "./video2_2020.mp4";
import Aos from "aos";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="heroMain">
      <div className="heroTop" data-aos="fade-down">
        <h1 className="topHeading">
          Best <span className="blueText">Web3</span> Wallet Entrance To <br />{" "}
          Crypto World 🚀
        </h1>
      </div>
      <div className="midDiv">
        <img
          className="svgImage"
          data-aos="fade-left"
          src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
          alt="Get it on Google Play"
        />
        <img
          className="svgImage"
          data-aos="fade-right"
          src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
          alt="Get it on App Store"
        />
      </div>
      <div className="heroVideo">
        <ScrollVideoPlayer className="video" videoUrl={video} />
      </div>
    </div>
  );
};

export default Hero;
