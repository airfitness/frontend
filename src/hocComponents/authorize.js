import React from "react";
import Login from "./login";
import Register from "./register";

// class Authorize extends Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//     this.state = {
//       register: null,
//       typeofmem: null,
//       selected: false
//     };
//   }

const Authorize = props => {
  // console.log(props);
  //   authHandler = e => {
  //       // console.log(`${e.target.name}, ${e.target.value}`);
  //       this.setState({ [e.target.name]: e.target.value });
  //     };
  //   handleAuth = e => {
  //     e.preventDefault();
  //     if (this.state.register === null || this.state.typeofmem === null) {
  //       alert("must fill out register/login and instructor/user");
  //     } else {
  //       this.setState({ ...this.state, selected: true });
  //     }
  //   };

  // render() {
  // console.log(`this.state ${this.state}`);
  if (props.register === "true" && props.selected === true) {
    return (
      <Register
        typeofmem={props.typeofmem}
        usernameInput={props.usernameInput}
        passwordInput={props.passwordInput}
        editInputHandler={props.editInputHandler}
        submitRegisterHandler={props.submitRegisterHandler}
      />
    );
  }
  if (props.register === "false" && props.selected === true) {
    return (
      <Login
        typeofmem={props.typeofmem}
        usernameInput={props.usernameInput}
        passwordInput={props.passwordInput}
        editInputHandler={props.editInputHandler}
        submitLoginHandler={props.submitLoginHandler}
      />
    );
  }
  return (
    <div className="authorize">
      <form onSubmit={props.handleAuth}>
        <div className="registerOrLogin">register or login</div>
        <label className="lable">
          <input
            name="register"
            type="radio"
            onChange={props.authHandler}
            value={true}
          />
          register
          <br />
        </label>
        <label className="lable">
          <input
            name="register"
            type="radio"
            onChange={props.authHandler}
            value={false}
          />
          login
          <br />
        </label>

        <div className="instructorOrUser">instructor or user</div>
        <label className="lable">
          <input
            name="typeofmem"
            type="radio"
            onChange={props.authHandler}
            value={"instructor"}
          />
          instructor
          <br />
        </label>
        <label className="lable">
          <input
            name="typeofmem"
            type="radio"
            onChange={props.authHandler}
            value={"user"}
          />
          user
          <br />
        </label>
        <button type="submit">choice confirm</button>
      </form>
    </div>
  );
};
// }
// }

export default Authorize;
