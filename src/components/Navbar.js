import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="black" role="navigation">
          <div className="nav-wrapper container">
            <div className="logo">
              <div className="logo-img">
                <a href="/" style={{ display: "block" }}>
                  <img src="./images/logo.png" alt="logo-img" />
                </a>
              </div>
              <div className="logo-text">
                <h5>AI &amp; Robotics Club</h5>
                <h5>
                  <span>NIT ANDHRA PRADESH</span>
                </h5>
              </div>
            </div>
            <div className="nav-links right hide-on-med-and-down ">
              <li>
                <a href="/" className="white-text text-lighten-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="white-text text-lighten-2">
                  Events
                </a>
              </li>
              <li>
                <a href="/courses" className="white-text text-lighten-2">
                  Courses
                </a>
              </li>
              <li>
                <a href="/team" className="white-text text-lighten-2">
                  Team
                </a>
              </li>
              <li>
                <a href="/blog" className="white-text text-lighten-2">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="white-text text-lighten-2">
                  Contact Us
                </a>
              </li>
            </div>
            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
            <a data-target="nav-mobile" className="sidenav-trigger" href="#!">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
