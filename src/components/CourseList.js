import React from "react";
import Course from "./Course";

export default function courseList(props) {
  return props.courseList.length > 0 ? (
    props.courseList.map((course, i) => {
      return (
        <>
          <Course course={course} index={i} />
        </>
      );
    })
  ) : (
    <h1>No courses exists</h1>
  );
}
