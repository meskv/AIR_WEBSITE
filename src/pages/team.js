import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileList from "../components/ProfileList";

export default function Team(props) {
  return (
    <>
      <Navbar />
      <section>
        <div className="page-title">
          <h3>
            Our <span>Team</span>
          </h3>
          <div className="underline" />
        </div>
        <div>
          <div className="page-subtitle centre-subtitle">
            <h3>Joint Seceratory</h3>
          </div>
          <div className="container flex">
            <ProfileList userList={props.userList} />
          </div>
        </div>
        <div>
          <div className="page-subtitle centre-subtitle">
            <h3>Executives</h3>
          </div>
          <div className="container flex">
            <ProfileList userList={props.userList} />
          </div>
        </div>
        <div>
          <div className="page-subtitle centre-subtitle">
            <h3>Members</h3>
          </div>
          <div className="container flex">
            <ProfileList userList={props.userList} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
