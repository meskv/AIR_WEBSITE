import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardList from "../../components/CardList/CardList";
import Categories from "../../components/Blog Components/Categories/Categories";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="page-title">
        <h3>
          Our <span>Blog</span>
        </h3>
        <h5 className="page-subtitle">Tagline here</h5>
        <div className="underline" />
      </div>

      <hr />

      <div className="blog-container">
        <div className="sidebar">
          <Categories />
        </div>
        <div className="blog-post-container post">
          <CardList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
