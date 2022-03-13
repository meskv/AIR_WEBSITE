import React from "react";

const Body = () => {
  return (
    <>
      <div>
        <div id="about" className="container">
          <div className="page-title">
            <h3>
              <span>About</span> Us
            </h3>
            <div className="underline" />
          </div>
          <div className="section">
            {/*   Icon Section   */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center black-text">
                    <i className="fas fa-brain" />
                  </h2>
                  <h5 className="center">Artificial Intelligence</h5>
                  <p className="light p-info">
                    Artificial intelligence is the simulation of human
                    intelligence processes by machines, especially computer
                    systems. Specific applications of AI include expert systems,
                    natural language processing, speech recognition and machine
                    vision.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center black-text">
                    <i className="material-icons">group</i>
                  </h2>
                  <h5 className="center">You</h5>
                  <p className="light p-info">
                    By utilizing elements and principles of Artificial
                    Intelligence and Robotics, you would be able to build
                    components and learn elements that help you in your
                    placements as well as in your own personal development as it
                    teaches you how to be a team player.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center black-text">
                    <i className="fas fa-robot" />
                  </h2>
                  <h5 className="center">Robotics</h5>
                  <p className="light p-info">
                    Robotics is an interdisciplinary field that integrates
                    computer science and engineering. Robotics involves design,
                    construction, operation, and use of robots. The goal of
                    robotics is to design machines that can help and assist
                    humans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container valign-wrapper">
          <div className="no-pad-bot mid">
            <div className="container">
              <div className="row center overlay">
                <h1>AI &amp; Robotics Club</h1>
                <p>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo, praesentium?
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia accusamus architecto dolorem placeat?
                  <br />
                </p>
                {/* <a href="" class="hero-button"><b>Click Here to Know More</b></a> */}
              </div>
            </div>
          </div>
          <div className="parallax">
            <img
              src="./images/Home/bg2.jpeg"
              alt="Unsplashed background img 2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
