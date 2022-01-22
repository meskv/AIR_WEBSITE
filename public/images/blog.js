import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

class Blog extends React.Component {
  state = {};
  render() {
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
            <div className="post-container col s12 m4">
              <div className="banner">
                <img className="banner-image" src="../background1.jpg" alt="" />
              </div>
              <div className="post-body">
                <div className="post-info">
                  <p className="author-name">Author Name</p>
                  <p className="publish-date">Jan 01 2022</p>
                </div>
                <h5 className="post-title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <p className="post-description">
                  This post will present it amet consectetur, adipisicing elit.
                  Optio ea explicabo aspernatur. Voluptates eligendi explicabo
                  provident, iusto voluptatibus itaque ut ab vel incidunt!
                </p>
              </div>
            </div>
            <div className="post-container col s12 m4">
              <div className="banner">
                <img className="banner-image" src="../background1.jpg" alt="" />
              </div>
              <div className="post-body">
                <div className="post-info">
                  <p className="author-name">Author Name</p>
                  <p className="publish-date">Jan 01 2022</p>
                </div>
                <h5 className="post-title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <p className="post-description">
                  This post will present it amet consectetur, adipisicing elit.
                  Optio ea explicabo aspernatur. Voluptates eligendi explicabo
                  provident, iusto voluptatibus itaque ut ab vel incidunt!
                </p>
              </div>
            </div>
            <div className="post-container col s12 m4">
              <div className="banner">
                <img className="banner-image" src="../background1.jpg" alt="" />
              </div>
              <div className="post-body">
                <div className="post-info">
                  <p className="author-name">Author Name</p>
                  <p className="publish-date">Jan 01 2022</p>
                </div>
                <h5 className="post-title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <p className="post-description">
                  This post will present it amet consectetur, adipisicing elit.
                  Optio ea explicabo aspernatur. Voluptates eligendi explicabo
                  provident, iusto voluptatibus itaque ut ab vel incidunt!
                </p>
              </div>
            </div>
            {/* article posts */}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Blog;
