import React from 'react'
import '../styles/reducerisk.css'
import ReduceImage from '../assests/reducerisk.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ReduceRisk = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true,
        });
      }, []);
    
  return (
    <div className="reduceRiskMain">
        <div className="reduceRiskLeft" data-aos="fade-right">
            <p className='reduceRiskHeading'>Reduce Your Risk Of Errors <br/> And Missed Deadlines</p>
            <p className='reduceRiskParagraph'>The profile of tax has become much more visible not only from <br className='brClass'/>an investor and board perspective but also from a tax authority<br className='brClass'/> and public perspectivealso needs to take direct control of risk.</p>
            <button className='bookCallButton'>Book A Call</button>
        </div>
        <div className="reduceRiskRight" data-aos="fade-left">
            <img className='reduceImage' src={ReduceImage} alt="picture3" />
        </div>
    </div>
  )
}

export default ReduceRisk