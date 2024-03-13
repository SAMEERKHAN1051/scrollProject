import React from 'react'
import '../styles/customers.css'
import Icon1 from '../assests/icon1.png'
import Icon2 from'../assests/icon2.png'
import Icon3 from'../assests/icon3.png'
import Icon4 from'../assests/icon4.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Customers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true,
    });
  }, []);
  return (
    <div className="customersMain" data-aos="fade-up">
      <div className="customersTop">
        <p className='customersHeading'>3,583 Customers Are Using Mixland</p>
      </div>

      <div className="customersBottom">
      <div className="customersCard">
      <div className="customersBottomLeft">
      <img className='customersCardIcon' src={Icon1} alt="picture4" />
      </div>
      <div className="customersBottomRight">

        
      <p className='customersCardHeading'>Made for Developers</p>
        <p className='customersCardParagraph'>Amet minim mollit non deserunt ullamco est <br className='brClass'/> sit aliqua dolor do amet sint. Velit officia<br className='brClass'/> consequat duis enim velit mollit.</p>

      </div>
      </div>

      <div className="customersCard">
      <div className="customersBottomLeft">
      <img className='customersCardIcon' src={Icon2} alt="picture5" />
      </div>
      <div className="customersBottomRight">

        
      <p className='customersCardHeading'>Helpful Video Tutorials</p>
        <p className='customersCardParagraph'>Amet minim mollit non deserunt ullamco est<br className='brClass'/> sit aliqua dolor do amet sint. Velit officia<br className='brClass'/> consequat duis enim velit mollit.</p>

      </div>
      </div>

      <div className="customersCard">
      <div className="customersBottomLeft">
      <img className='customersCardIcon' src={Icon3} alt="picture6" />
      </div>
      <div className="customersBottomRight">

        
      <p className='customersCardHeading'>120+ Coded Blocks</p>
        <p className='customersCardParagraph'>Amet minim mollit non deserunt ullamco est <br className='brClass'/>sit aliqua dolor do amet sint. Velit officia<br className='brClass'/> consequat duis enim velit mollit.</p>

      </div>
      </div>

      <div className="customersCard">
      <div className="customersBottomLeft">
      <img className='customersCardIcon' src={Icon4} alt="picture7" />
      </div>
      <div className="customersBottomRight">

        
      <p className='customersCardHeading'>Secured Payments</p>
        <p className='customersCardParagraph'>Amet minim mollit non deserunt ullamco est <br className='brClass'/> sit aliqua dolor do amet sint. Velit officia<br className='brClass'/> consequat duis enim velit mollit.</p>

      </div>
      </div>

      </div>
    </div>
  )
}

export default Customers