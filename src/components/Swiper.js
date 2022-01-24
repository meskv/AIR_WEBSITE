import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import SliderList from "./SliderList";

export default (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      direction="horizontal"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SliderList swiperList={props.swiperList} /> */}


      <SwiperSlide>
        <div className="swiper-slide">
          <div
            className="bg-image"
            style={{
              background: "url(./images/Home/bg1.jpg) no-repeat right bottom",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="overlay" />
          <div className="content-box">
            <div className="content">
              <h1 className="slider-heading">
                AI, ROBOTICS, AND THE FUTURE OF JOBS
              </h1>
              <p className="slider-desc">
                Automation is Voldemort: the terrifying force nobody is willing
                to name.
              </p>
              <a href="#about" className="button">
                Know More
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div
            className="bg-image"
            style={{
              background: "url(./images/Home/bg2.jpeg) no-repeat right bottom",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="overlay" />
          <div className="content-box">
            <div className="content">
              <h1 className="slider-heading">ROBOTS, US, AND THE FUTURE</h1>
              <p className="slider-desc">
                We're fascinated with robots because they are reflections of
                ourselves.
              </p>
              <a href="#about" className="button">
                Know More
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div
            className="bg-image"
            style={{
              background: "url(./images/Home/bg3.jpg) no-repeat right bottom",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="overlay" />
          <div className="content-box">
            <div className="content">
              <h1 className="slider-heading">
                AI, ROBOTICS, AND THE FUTURE OF JOBS
              </h1>
              <p className="slider-desc">
                Automation is Voldemort: the terrifying force nobody is willing
                to name.
              </p>
              <a href="#about" className="button">
                Know More
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
