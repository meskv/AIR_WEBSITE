import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Events from "./pages/events";
import Courses from "./pages/courses";
import Team from "./pages/team";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Webteam from "./pages/webteam";

function App() {
  const memberDetails = [
    {
      image: "/images/dummy_pic.jpg",
      name: "Member Name",
      position: "Seceratory",
      mailId: "mail@gmail.com",
      github: "https://github.com/username",
      insta: "https://instagram.com/username",
      linkedIn: "https://linkedin.com/username",
    },
    {
      image: "/images/dummy_pic.jpg",
      name: "Member Name",
      position: "Seceratory",
      mailId: "mail@gmail.com",
      github: "https://github.com/username",
      insta: "https://instagram.com/username",
      linkedIn: "https://linkedin.com/username",
    },
  ];

  const webTeamDetails = [
    {
      image: "/images/Team/Web-Team/Suman.JPG",
      name: "Suman Kumar Verma",
      position: "Member",
      mailId: "krsk1495@gmail.com",
      github: "https://github.com/meskv",
      insta: "https://instagram.com/meskv",
      linkedIn: "https://linkedin.com/meskv",
    },
    {
      image: "../images/Team/Web-Team/RITVIK G.jfif",
      name: "Ritvik G",
      position: "Member",
      mailId: "mail@gmail.com",
      github: "https://github.com/Ritvik-G",
      insta: "https://instagram.com/username",
      linkedIn: "https://linkedin.com/username",
    },
  ];

  const courseDetails = [
    {
      image: "/images/Home/bg1.jpg",
      title: "Course 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione et sint unde vel suscipit natus nisi corrupti iure libero dicta error, dolores expedita dolor tempora perferendis inventore molestiae eligendi!",
      link: "link",
    },
    {
      image: "/images/Home/bg1.jpg",
      title: "Course 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione et sint unde vel suscipit natus nisi corrupti iure libero dicta error, dolores expedita dolor tempora perferendis inventore molestiae eligendi!",
      link: "link",
    },
  ];

  const cardDetails = [
    {
      image: "/images/Home/bg1.jpg",
      aurhor: "author name",
      date: "01 01 2022",
      title: "Course 1",
      description: "This post will present it amet consectetur, adipisicing elit. Optio ea explicabo aspernatur. Voluptates eligendi explicabo provident, iusto voluptatibus itaque ut ab vel incidunt!",
      link: "link",
    },
    {
      image: "./images/Home/bg1.jpg",
      aurhor: "author name",
      date: "01 01 2022",
      title: "Course 2",
      description: "This post will present it amet consectetur, adipisicing elit. Optio ea explicabo aspernatur. Voluptates eligendi explicabo provident, iusto voluptatibus itaque ut ab vel incidunt!",
      link: "link",
    },
  ];

  const [userList, setuserList] = useState(memberDetails);
  const [webTeamList, setwebTeamList] = useState(webTeamDetails);
  const [courseList, setcourseList] = useState(courseDetails);
  const [cardList, setcardList] = useState(cardDetails);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" exact element={<Home />} />
        <Route exact path="/events" exact element={<Events />} />
        <Route
          exact
          path="/courses"
          exact
          element={<Courses courseList={courseList} />}
        />
        <Route
          exact
          path="/team"
          exact
          element={<Team userList={userList} />}
        />
        <Route exact path="/blog" exact element={<Blog cardList={cardList} />} />
        <Route exact path="/contact" exact element={<Contact />} />
        <Route
          exact
          path="/webteam"
          exact
          element={<Webteam webTeamList={webTeamList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
