import React from "react";
// import Footer1 from "../assests/footer1.png";
// import Footer2 from "../assests/footer2.png";
// import Footer3 from "../assests/footer3.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import '../styles/footer.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Footer = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true,
        });
      }, []);
  return (
    <>
    <div className="footerMain" data-aos="fade-up">
      <div className="footerLeft">
        <p className="footerLeftText">
          Open an account in minutes, get full <br /> financial control for much
          longer.{" "}
        </p>
        <div className="footerIcons">
          <FacebookIcon
            sx={{
              fontSize: "34px",
              backgroundColor: "blue",
              borderRadius: "50%",
              padding: "5px",
            }}
            className="footericon"
          ></FacebookIcon>
          <InstagramIcon
            sx={{
              fontSize: "34px",
              backgroundColor: "blue",
              borderRadius: "50%",
              padding: "5px",
            }}
            className="footericon"
          ></InstagramIcon>
          <TwitterIcon
            sx={{
              fontSize: "34px",
              backgroundColor: "blue",
              borderRadius: "50%",
              padding: "5px",
            }}
            className="footericon"
          ></TwitterIcon>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerRightColumn">
            <div className="footerRightColumnColumn1">
            <p className="footerRightColumnHeading">Product</p>
            <p className="footerRightColumnItems">Features</p>
            <p className="footerRightColumnItems">Security</p>
            <p className="footerRightColumnItems">Get App</p>
            <p className="footerRightColumnItems">Nightly</p>
        </div>
        </div>

        <div className="footerRightColumn">
            <div className="footerRightColumnColumn1">
            <p className="footerRightColumnHeading">Status</p>
            <p className="footerRightColumnItems">Involved</p>
            <p className="footerRightColumnItems">About</p>
            <p className="footerRightColumnItems">Media Kit</p>
            <p className="footerRightColumnItems">Blog</p>
        </div>
        </div>

        <div className="footerRightColumn">
            <div className="footerRightColumnColumn1">
            <p className="footerRightColumnHeading">About</p>
            <p className="footerRightColumnItems">Jobs</p>
            <p className="footerRightColumnItems">Press</p>
            <p className="footerRightColumnItems">Affiliate</p>
            <p className="footerRightColumnItems">Konstist</p>
        </div>
        </div>
      </div>


    </div>
          <div className="footerBottom">
          <div className="footerLine">
            {/* here add line of grey color */}
          </div>
          <p className="rights">All Rights Reserved</p>
          
        </div>
        </>
  );
};

export default Footer;
