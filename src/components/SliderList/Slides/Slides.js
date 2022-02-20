import React from "react";
import { SwiperSlide } from "swiper/react";

export default function Slides(props) {
  return (
    <>
      <SwiperSlide>
        <div classname="swiper-slide">
          <div
            classname="bg-image"
            style={{
              backgroundImage: `url(${props.slide.bgImage})`,
              background: "no-repeat right bottom",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div classname="overlay"></div>
        <div classname="content-box">
          <div classname="content">
            <h1 classname="slider-heading">{props.slide.swiperHeading}</h1>
            <p classname="slider-desc">{props.slide.swiperDescription}</p>
            <a href="#about" classname="button">
              Know More
            </a>
          </div>
        </div>
      </SwiperSlide>
    </>
  );
}
