import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import Body from "../components/Body";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Swiper />
        <Body />
        <Footer />
      </>
    );
  }
}

export default Home;
