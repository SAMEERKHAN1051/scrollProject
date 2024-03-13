import React from 'react';
import moreContent from '../assests/morecontent.png';
import '../styles/morecontent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MoreContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="moreContentMain">
      <div className="moreContentLeft" data-aos="fade-right">
        <img className="moreContentPic" src={moreContent} alt="more content pic" />
      </div>

      <div className="moreContentRight" data-aos="fade-left">
        <p className="moreContentHeading">Some More <br className="" /> Content Goes Here</p>
        <p className="moreContentParagraph">
          Nunc donec sed nunc sit pharetra id nunc elementum.<br className="br-md" />
          Integer rutrum eget habitasse odio. Interdum dui odio<br className="br-md" />
          semper pharetra elit eget at vitae feugiat. Arcu sit et<br className="br-md" />
          erat neque. Sed at pellentesque a justo nulla.
        </p>
      </div>
    </div>
  );
};

export default MoreContent;
