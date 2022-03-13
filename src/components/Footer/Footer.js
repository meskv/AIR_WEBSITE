import React from "react";
import ScrollButton from "../ScrollToTop";

const Footer = () => {
  return (
    <>
      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12 footer-info">
              <h3 className="footer-header white-text">
                AI &amp; Robotics Club
              </h3>
              <p className="grey-text text-lighten-4">
                <i className="fa fa-map-marker" /> NIT Andhra Pradesh
                Tadepalligudem, <br />
                West Godavari, Andhra Pradesh, 534101
                <br />
                <i className="fa fa-phone" /> +91 9876543210
                <br />
                <i className="fa fa-envelope">
                  {" "}
                  <a href="mailto:airclub@nitandhra.ac.in">
                    airclub@nitandhra.ac.in
                  </a>
                </i>
              </p>
            </div>
            <div className="col l3 s12 useful-links">
              <h3 className="footer-header white-text">Useful Links</h3>
              <ul>
                <li>
                  <a className="white-text" href="https://nitandhra.ac.in/main">
                    NIT Andhra Pradesh
                  </a>
                </li>
                <li>
                  <a
                    className="white-text"
                    href="https://nitandhra.ac.in/main/departments"
                  >
                    Departments
                  </a>
                </li>
                <li>
                  <a
                    className="white-text"
                    href="https://nitandhra.ac.in/main/wan"
                  >
                    Web and Networking
                  </a>
                </li>
                <li>
                  <a
                    className="white-text"
                    href="https://nitandhra.ac.in/main/btech"
                  >
                    BTECH
                  </a>
                </li>
                <li>
                  <a
                    className="white-text"
                    href="https://nitandhra.ac.in/main/mtech"
                  >
                    MTECH
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l3 s12 footer-contact">
              <h3 className="footer-header white-text">Social Media</h3>
              <ul className="social-links">
                <a className="white-text" href="mailto:airclub@nitandhra.ac.in">
                  <i className="fas fa-envelope-square btn btn-social btn-dark" />
                </a>
                <a
                  className="white-text"
                  href="https://www.instagram.com/airclub_nitandhra/"
                >
                  <i className="fab fa-instagram btn btn-social btn-dark" />
                </a>
                <a
                  className="white-text"
                  href="https://in.linkedin.com/in/airclubnitandhra?trk=people_directory"
                >
                  <i className="fab fa-linkedin btn btn-social btn-dark" />
                </a>
                <a
                  className="white-text"
                  href="https://www.youtube.com/channel/UCliLUa5C9zV9MnKRxGR-CHw!"
                >
                  <i className="fab fa-youtube btn btn-social btn-dark" />
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <p style={{ textAlign: "center" }}>
              Made with <i className="fa fa-heart" aria-hidden="true" /> by
              <a href="/webteam"> Webteam</a>
            </p>
          </div>
        </div>
        <ScrollButton />
      </footer>
    </>
  );
};

export default Footer;
