import React from "react";
import UserPunch from "./userPunch";
import "./user_styles/userInfo.css";

// class UserInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
const UserInfo = props => {
  return (
    <div className="punchCards">
      {props.userInfo.punchCards.map(userPunch => (
        <UserPunch userPunch={userPunch} />
      ))}
    </div>
  );
};
// }

export default UserInfo;
