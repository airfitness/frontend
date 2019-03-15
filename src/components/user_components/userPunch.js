import React from "react";
import PDetails from "./pDetails";

const UserPunch = props => {
  return (
    <div className="punchCard">
      <p className="punch">Punch Card</p>
      <p className="classId">class id: {props.userPunch.classId}</p>
      <p className="qty">qty left: {props.userPunch.punches_available}</p>
      <PDetails id={props.userPunch.classId} />
    </div>
  );
};
export default UserPunch;
