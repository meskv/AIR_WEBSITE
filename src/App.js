import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events/events";
import Courses from "./pages/Courses/courses";
import Team from "./pages/Team/team";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/Contact/contact";
import Webteam from "./pages/Webteam/webteam";

import { memberDetails } from "./config/memberDetails";
import { webTeamDetails } from "./config/webTeamDetails";
import { courseDetails } from "./config/courseDetails";
import { cardDetails } from "./config/cardDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route
          path="/courses"
          element={<Courses courseList={courseDetails} />}
        />
        <Route path="/team" element={<Team userList={memberDetails} />} />
        <Route path="/blog" element={<Blog cardList={cardDetails} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/webteam"
          element={<Webteam webTeamList={webTeamDetails} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
