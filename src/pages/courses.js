import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseList from "../components/CourseList";

export default function Courses(props) {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-title">
          <h3>
            Our <span>Courses</span>
          </h3>
          <div className="underline" />
        </div>
        <div className="wrapper">
          <CourseList courseList={props.courseList} />
        </div>
      </main>

      <Footer />
    </>
  );
}
