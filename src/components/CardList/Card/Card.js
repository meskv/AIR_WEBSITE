import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="post-container col s12 m4">
        <div className="banner">
          <img className="banner-image" src= {props.card.image} alt="" />
        </div>
        <div className="post-body">
          <div className="post-info">
            <p className="author-name">{props.card.author}</p>
            <p className="publish-date">Jan 01 2022</p>
          </div>
          <h5 className="post-title">
            Lorem ipsum dolor sit amet consectetur.
          </h5>
          <p className="post-description">
            This post will present it amet consectetur, adipisicing elit. Optio
            ea explicabo aspernatur. Voluptates eligendi explicabo provident,
            iusto voluptatibus itaque ut ab vel incidunt!
          </p>
          <a href="/article">Read More</a>
        </div>
      </div>
    </>
  );
}
