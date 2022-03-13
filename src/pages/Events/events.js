import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Events = () => {
  return (
    <>
      <div className="event-page">
        <Navbar />
        <section className="past-events">
          <h1 className="event-header">
            Past <span>Events</span>
          </h1>
          <div className="underline" />
        </section>
        <div className="event-container">
          <div className="event">
            <div className="box">
              <div className="image-wrapper">
                <img src="../images/Home/bg2.jpeg" alt="bg2" />
              </div>
              <div className="content">
                <h3>This is heading</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto ex iure suscipit itaque eos, harum
                  provident adipisci enim? Impedit incidunt velit dolores
                  
                  dicta fugiat ipsam rem voluptas quam placeat!
                </p>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="box">
              <div className="image-wrapper">
                <img src="../images/Home/bg2.jpeg" alt="bg2" />
              </div>
              <div className="content">
                <h3>This is heading</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto ex iure suscipit itaque eos, harum
                  provident adipisci enim? Impedit incidunt velit dolores
                  dicta fugiat ipsam rem voluptas quam placeat!
                </p>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="box">
              <div className="image-wrapper">
                <img src="../images/Home/bg2.jpeg" alt="bg2" />
              </div>
              <div className="content">
                <h3>This is heading</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto ex iure suscipit itaque eos, harum
                  provident adipisci enim? Impedit incidunt velit dolores
                  dicta fugiat ipsam rem voluptas quam placeat!
                </p>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="box">
              <div className="image-wrapper">
                <img src="../images/Home/bg2.jpeg" alt="bg2" />
              </div>
              <div className="content">
                <h3>This is heading</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto ex iure suscipit itaque eos, harum
                  provident adipisci enim? Impedit incidunt velit dolores
                  dicta fugiat ipsam rem voluptas quam placeat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
