import { React } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events/events";
import Courses from "./pages/Courses/courses";
import Team from "./pages/Team/team";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/Contact/contact";
import Webteam from "./pages/Webteam/webteam";
import NotFound from "./pages/NotFound";

import Article from "./pages/Article/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webteam" element={<Webteam />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
