import React, { Component } from "react";
import Axios from "axios";

class UserChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userInfo.name,
      email: props.userInfo.email
    };
  }
  editInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    const id = this.props.user.id;
    const token = this.props.user.token;
    const headers = {
      headers: {
        authorization: token
      }
    };
    let updatedInfo = {
      name: this.state.name,
      email: this.state.email
    };
    Axios.put(
      `https://airfitness.herokuapp.com/api/users/${id}`,
      updatedInfo,
      headers
    )
      .then(res => this.props.refresh())
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <div>
          Name: {this.state.name} <br />
          E-mail: {this.state.email}
        </div>
        <div>
          <form onSubmit={this.submitHandler}>
            <div>Update Info</div>
            name:{" "}
            <input
              name="name"
              type="text"
              onChange={this.editInputHandler}
              placeholder="name"
              value={this.state.name}
              required
            />
            email:{" "}
            <input
              name="email"
              type="text"
              onChange={this.editInputHandler}
              placeholder="email"
              value={this.state.email}
            />
            <button onClick={this.submitHandler}>Submit info</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserChange;
