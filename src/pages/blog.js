import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CardList from "../components/CardList";

export default function Blog(props) {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-title">
          <h3>
            Our <span>Blog</span>
          </h3>
          <h5 className="page-subtitle">Tagline here</h5>
          <div className="underline" />
        </div>
        <div className="post-wrapper container">
          {/* article posts */}
          <CardList cardList={props.cardList} />
          {/* article posts */}
        </div>
      </main>
      <Footer />
    </>
  );
}
