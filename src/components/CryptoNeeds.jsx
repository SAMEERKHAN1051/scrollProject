import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/cryptoneeds.css";
import { useState } from "react";

// import firstPic from "../assests/first.png";
import secPic from "../assests/second.png";
// import thirdPic from "../assests/third.png";
import fourthPic from "../assests/fourth.png";
// import fifthPic from "../assests/fifth.png";

const CryptoNeeds = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const containerRef = React.useRef(null);

  const images = [fourthPic, secPic, fourthPic, secPic, fourthPic];

  const slideWidth = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      return containerWidth / 5; // Divide container width by the number of slides
    }
    return "auto";
  };

  const isCenterSlide = (index) => {
    // Calculate center slide index
    let centerIndex = (currentSlide + 1) % images.length; // This might need adjustment for infinite looping
    return index === centerIndex;
  };

  return (
    <div className="cryptoMain" ref={containerRef}>
      <div className="cryptoTop" data-aos="fade-up">
        <h1 className="cryptoTopHeading">One App For All Your Crypto Needs</h1>
      </div>

      <div className="cryptoBottom" data-aos="fade-up" style={{ width: "99%" }}>
        <Slider {...settings} slideWidth={slideWidth()}>
          {images.map((image, index) => (
            <div
              key={index}
              className={isCenterSlide(index) ? "highlightCard" : ""}
            >
              <img src={image} alt={`slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <div className="blurOverlay"></div>
      </div>
    </div>
  );
};

export default CryptoNeeds;
