import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseList from "../../components/CourseList/CourseList";

import { courseDetails } from "../../static data/courseDetails";

const Courses = (props) => {
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
          <CourseList courseList={courseDetails} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Courses;
