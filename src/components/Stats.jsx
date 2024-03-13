import React from 'react'
import '../styles/stats.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Stats = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true, 
        });
      }, []);
  return (
    <div className="statsMain" >
        <div className="statsColumn">
            <p className='statsHeading'>100K<span style={{color:"blue"}}>+</span></p>
            <p className='statsParagraph'>Active Users</p>
            </div>

            <div className="statsColumn">
            <p className='statsHeading'>1M<span style={{color:"blue"}}>+</span></p>
            <p className='statsParagraph'>Holding Assets</p>
            </div>

            <div className="statsColumn">
            <p className='statsHeading'>100K<span style={{color:"blue"}}>+</span></p>
            <p className='statsParagraph'>Active Users</p>
            </div>

            <div className="statsColumn">
            <p className='statsHeading'>100K<span style={{color:"blue"}}>+</span></p>
            <p className='statsParagraph'>Active Users</p>
            </div>
    </div>
  )
}

export default Stats