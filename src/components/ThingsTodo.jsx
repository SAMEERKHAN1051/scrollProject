import React from 'react';
import "../styles/thingstodo.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ThingsTodo = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true,
        });
      }, []);
  return (
    <div className="thingsTodoMain">
      <div className="thingsTodoTop" data-aos="fade-up">
        <p className='thingsTodoHeading' data-aos="fade-up">Things You Can Do</p>
        <p className='thingsTodoParagraph' data-aos="fade-up">With lots of unique blocks, you can easily build a page <br className='brClass'/>
        without coding. Build your next landing page.</p>
      </div>

      <div className="thingsTodoBottom" data-aos="fade-up">
        {/* Group 1: 3 cards */}
        <div className="cardGroup">
          <div className="card1">
            <CheckCircleIcon sx={{color:"#0094FF"}} /> 
            <p className='thingsTodoCardText'>How to find a perfect niche</p>
          </div>
          <div className="card1">
            <CheckCircleIcon sx={{color:"#0094FF"}} /> 
            <p className='thingsTodoCardText'>How to find a perfect niche</p>
          </div>
          <div className="card1">
            <CheckCircleIcon sx={{color:"#0094FF"}} /> 
            <p className='thingsTodoCardText'>How to find a perfect niche</p>
          </div>
        </div>

        {/* Group 2: 2 cards */}
        <div className="cardGroup">
          <div className="card1">
            <CheckCircleIcon sx={{color:"#0094FF"}} /> 
            <p className='thingsTodoCardText'>How to find a perfect niche</p>
          </div>
          <div className="card1">
            <CheckCircleIcon sx={{color:"#0094FF"}} /> 
            <p className='thingsTodoCardText'>How to find a perfect niche</p>
          </div>
        </div>

        {/* Group 3: 3 cards */}
        <div className="cardGroup">
          <div className="card1">
            <CheckCircleIcon sx={{color:"#0094FF"}} /> 
            <p className='thingsTodoCardText'>How to find a perfect niche</p>
          </div>
          <div className="card1">
            <CheckCircleIcon sx={{color:"#0094FF"}} /> 
            <p className='thingsTodoCardText'>How to find a perfect niche</p>
          </div>
          <div className="card1">
            <CheckCircleIcon sx={{color:"#0094FF"}} /> 
            <p className='thingsTodoCardText'>How to find a perfect niche</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThingsTodo;
