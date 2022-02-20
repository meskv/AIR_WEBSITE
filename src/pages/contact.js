import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <main className="contact-page">
          <div className="page-title">
            <h3>
              <span>Contact</span> Us
            </h3>
            <div className="underline" />
          </div>
          <div className="top-contact-wrapper">
            <div className="item address-info">
              <h3 className="contact-title">Find us at</h3>
              <div className="desc">
                <i className="fa fa-map-marker-alt" />
                <p>
                  Gurjada SAC, NIT Andhra Pradesh Tadepalligudem, West Godavari,
                  Andhra Pradesh, 534101
                </p>
              </div>
              <p href />
            </div>
            <div className="item">
              <div className="contact-info">
                <h3 className="contact-title">Feel Free to contact</h3>
                <div className="desc">
                  <div>
                    <i className="fa fa-phone" />
                    <p>+91 9876543210</p>
                  </div>
                  <div>
                    <i className="fa fa-envelope" />
                    <p>
                      <a href="mailto:airclub@nitandhra.ac.in">
                        airclub@nitandhra.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-section">
            <div className="contact-card">
              <div className="profile-img center">
                <img
                  className="banner-image round"
                  src="../images/dummy_pic.jpg"
                  alt=""
                />
              </div>
              <div className="profile-info">
                <div className="contact-card-title center">Faculty Advisor</div>
                <p>
                  Faculty Advisor, AI &amp; Robotics Club <br />
                  NIT Andhra Pradesh Tadepalligudem, 534101
                </p>
                <br />
                <i className="material-icons">phone</i> +91 9876543210
                <br />
                <i className="material-icons">email</i>
                <a href="mailto:abc@gmail.com">random@nitandhra.ac.in</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="profile-img center">
                <img
                  className="banner-image round"
                  src="../images/dummy_pic.jpg"
                  alt=""
                />
              </div>
              <div className="profile-info">
                <div className="contact-card-title center">Name Here</div>
                <p>
                  Seceratory, AI &amp; Robotics Club <br />
                  NIT Andhra Pradesh Tadepalligudem, 534101
                </p>
                <br />
                <i className="material-icons">phone</i> +91 9876543210
                <br />
                <i className="material-icons">email</i>
                <a href="mailto:abc@gmail.com">random@nitandhra.ac.in</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="profile-img center">
                <img
                  className="banner-image round"
                  src="../images/dummy_pic.jpg"
                  alt=""
                />
              </div>
              <div className="profile-info">
                <div className="contact-card-title center">Vishal</div>
                <p>
                  Joint Seceratory, AI &amp; Robotics Club <br />
                  NIT Andhra Pradesh Tadepalligudem, 534101
                </p>
                <br />
                <i className="material-icons">phone</i> +91 9876543210
                <br />
                <i className="material-icons">email</i>
                <a href="mailto:abc@gmail.com">random@nitandhra.ac.in</a>
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="collapsible container">
              <li>
                <div className="page-subtitle collapsible-header">
                  <h3 className="page-subtitle center">Google Form</h3>
                </div>
                <div className="collapsible-body">
                  <p>Google form here</p>
                </div>
              </li>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default Contact;
