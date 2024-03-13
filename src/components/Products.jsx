import React from 'react'
import '../styles/products.css'
import Product1 from '../assests/products1.png'
import Product2 from '../assests/products2.png'
import Product3 from '../assests/products3.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Products = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true,
        });
      }, []);
  return (
    <div className="productsMain" data-aos="fade-up">
        <div className="productsTop">
            <p className='productsHeading'>The Product We Work With</p>
            <p className='productsParagraph'>Frybix delivered blazing fast performance, striking word solution</p>
        </div>
        <div className="productsBottom">
            <div className="productsCard">
                <img className='productsCardIcon' src={Product1} alt="pic" height="60px"/>
                <p className='productsCardHeading'>Core PHP</p>
                <p className='productsCardParagraph'>Create customized popups and show <br className='brClass'/> the right message at the </p>
            </div>

            <div className="productsCard">
                <img className='productsCardIcon' src={Product2} alt="pic" height="60px"/>
                <p className='productsCardHeading'>Easy Customizable</p>
                <p className='productsCardParagraph'>Create customized popups and show <br className='brClass'/>the right message at the </p>
            </div>

            <div className="productsCard">
                <img className='productsCardIcon' src={Product3} alt="pic" height="60px"/>
                <p className='productsCardHeading'>Fast Support</p>
                <p className='productsCardParagraph'>Create customized popups and show <br className='brClass'/> the right message at the </p>
            </div>
        </div>
    </div>
  )
}

export default Products