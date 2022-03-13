import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfileList from "../../components/ProfileList/ProfileList";
import { webTeamDetails } from "../../static data/webTeamDetails";

const Webteam = (props) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-title">
          <h3>
            Web <span>Team</span>
          </h3>
          <div className="underline" />
        </div>
        <div>
          <div className="page-subtitle centre-subtitle">
            <h3>Developers</h3>
          </div>
          <div className="container flex">
            <ProfileList userList={webTeamDetails} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Webteam;
