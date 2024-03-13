import React from 'react'
import '../styles/happyclients.css'
import ClientPic from '../assests/happyclients.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const HappyClients = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true,
        });
      }, []);
  return (
    <div className="clientsMain"data-aos="fade-up">
        <div className="clientsTop">
            <p className='clientsHeading'>Our Happy Clients</p>
            <p className='clientsParagraph'>Frybix delivered blazing fast performance, striking word solution</p>
            <img className='clientsPic' src={ClientPic} alt="" />
        </div>
    </div>
  )
}

export default HappyClients