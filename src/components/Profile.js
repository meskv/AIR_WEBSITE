import React from "react";

export default function Profile(props) {

  return (
    <>
      <div className="profile-box">
        <div className="profile-img">
          <img className="banner-image round" src={props.member.image} alt="" />
        </div>
        <div className="member-info">
          <h3 className="member-name"> {props.member.name} </h3>
          <p className="position"> {props.member.position} </p>
        </div>
        <div className="social-handle">
          <a
            className="btn btn-dark btn-social mx-2"
            href={props.member.mailId}
          >
            <i className="fas fa-envelope" />
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href={props.member.github}
          >
            <i className="fab fa-github" />
          </a>
          <a className="btn btn-dark btn-social mx-2" href={props.member.insta}>
            <i className="fab fa-instagram" />
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href={props.member.linkedIn}
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </>
  );
}
