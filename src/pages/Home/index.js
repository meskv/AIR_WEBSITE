import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Swiper from "../../components/Swiper/Swiper";
import Body from "../../components/Body/Body";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Swiper swiperList={props.swiperList} />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
