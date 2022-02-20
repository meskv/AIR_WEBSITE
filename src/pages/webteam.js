import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProfileList from "../components/ProfileList";

class Webteam extends React.Component {
  state = {};
  render() {
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
              <ProfileList userList={this.props.webTeamList} />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Webteam;
