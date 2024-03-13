import React from "react";
import "../styles/download.css";
import Download1 from "../assests/download1.png";
import Download2 from "../assests/download2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="downloadMain" data-aos="fade-up">
      <div className="downloadInner">
        <p className="downloadHeading">Love Our Applications?</p>
        <p className="downloadSecHeading">Download Now</p>
        <p className="downloadParagraph">
          Frybix delivered blazing fast performance, striking word solution
        </p>
        <div className="downloadButton">
          <img className="firstImage" src={Download1} alt="picture1" />
          <img className="secImage" src={Download2} alt="picture2" />
        </div>
      </div>
    </div>
  );
};

export default Download;
