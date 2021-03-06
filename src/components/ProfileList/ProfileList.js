import React from "react";
import Profile from "./Profile/Profile";

export default function ProfileList(props) {
  return props.userList.length > 0 ? (
    props.userList.map((member, i) => {
      return (
        <>
          <Profile member={member} index={i} />
        </>
      );
    })
  ) : (
    <h1>No members exists</h1>
  );
}
