import React, { Component } from "react";
import "./App.css";
import "./components/user_components/users.css";
import "./hocComponents/auth.css";
import Instructor from "./components/instructor_components/instructor";
import User from "./components/user_components/user";
import "./hocComponents/auth.css";
import './components/instructor_components/css/instructor.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }
  componentDidMount() {
    // this.setState({
    //   user: {}
    // });
  }
  render() {
    if (this.state.user.priv === "instructor") {
      return <Instructor user={this.state.user} />;
    }
    if (this.state.user.priv === "user") {
      return <User user={this.state.user} />;
    }
    return (
      <div className="App">
        <header className="App-header">
          Access Denied No user information
        </header>
      </div>
    );
  }
}

export default App;
