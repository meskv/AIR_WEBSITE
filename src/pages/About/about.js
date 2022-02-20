import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


class About extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <h1>This is about page</h1>
        <Footer />
      </>
    );
  }
}

export default About;
