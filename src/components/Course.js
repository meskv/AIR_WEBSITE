import React from "react";

export default function Course(props) {
  return (
    <div className="course-wrapper">
      <div className="course-image item">
        <img src={props.course.image} alt="" />
        <div className="image" />
      </div>
      <div className="course-info item">
        <div className="course-title title">
          <h3>{props.course.title}</h3>
        </div>
        <div className="course-desc">
          <p>
            {props.course.description}
          </p>
        </div>
        <a href={props.course.link} className="button">
          course Link
        </a>
      </div>
    </div>
  );
}
