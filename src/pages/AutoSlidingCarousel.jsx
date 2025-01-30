import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

import { Carousel } from "react-bootstrap";

const AutoSlidingCarousel = () => {
  const [index, setIndex] = useState(0);

  // Function to handle the slide change
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 5); // Change slide every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={3000}
      className="slider"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={assets.mru_poster}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-[164px] sm:h-[200px] md:h-[350px] lg:h-[704px] object-cover"
          src={assets.manav_rachna}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={assets.mru_poster}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={assets.mru_poster}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={assets.mru_poster}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default AutoSlidingCarousel;
