import React from "react";
import "./user_styles/userPunch.css";

const UserPunch = props => {
  return (
    <div className="punchCard">
      punch card class id: {props.userPunch.classId}
      punch card qty left: {props.userPunch.punches_available}
    </div>
  );
};
export default UserPunch;
