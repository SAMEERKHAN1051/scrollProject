import React from 'react'
import '../styles/somecontent.css'
// import BlockChainPic from '../assests/somecontent.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import BlockChainVid from './video1.mp4'

const SomeContent = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true,
        });
      }, []);
  return (
    <div className="someContentMain">
        <div className="someContentTop" data-aos="fade-right">
        <p className='someContentHeading'>Some More <br/> Content Goes Here</p>
        <p className='someContentParagraph' data-aos="fade-left">Nunc donec sed nunc sit pharetra id nunc <br className='brClass'/>elementum.
         Integer rutrum eget habitasse odio. <br className='brClass'/>Interdum  dui odio
         semper pharetra elit eget at vitae  <br className='brClass'/>feugiat.Arcu sit et 
         erat neque. Sed at pellentesque a <br className='brClass'/>justo nulla.</p>
        </div>

        <div className="someContentBottom" data-aos="fade-up">
          <video style={{borderRadius:"20px"}}  width="80%" autoPlay muted  src={BlockChainVid}></video>
        </div>
    </div>
  )
}

export default SomeContent