import React from "react";

const UserPunch = props => {
  return (
    <div className="punchCard">
    <p className="punch">Punch Card</p>
    <p className="classId">class id: {props.userPunch.classId}</p>
    <p className="qty">qty left: {props.userPunch.punches_available}</p>
    </div>
  );
};
export default UserPunch;
