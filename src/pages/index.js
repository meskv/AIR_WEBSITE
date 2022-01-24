import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import Body from "../components/Body";


export default function Home(props) {
  return (
    <>
      <Navbar />
      <Swiper swiperList={props.swiperList} />
      <Body />
      <Footer />
    </>
  );
}
