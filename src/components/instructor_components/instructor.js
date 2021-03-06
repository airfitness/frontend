import React, { Component } from "react";
import axios from "axios";
import Programs from "./programs";
import CreateProgram from "./createProgram";
import InstructorChange from "./instructorChange";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      programs: [],
      isCreate: false,
      edit: "",
      delete: "",
      instructorInfo: null
    };
  }
  componentDidMount() {
    const Id = this.state.user.id;
    axios
      .get(`https://airfitness.herokuapp.com/api/instructors/${Id}`)
      .then(res =>
        this.setState({
          programs: res.data.classes,
          instructorInfo: res.data
        })
      )
      .catch(error => console.log(error));
  }
  refresh = () => {
    console.log("fired");
    this.componentDidMount();
  };

  toggleCreate = e => {
    e.preventDefault();
    this.setState(prev => ({
      isCreate: !prev.isCreate
    }));
  };

  toggleEdit = (e, id) => {
    e.preventDefault();
    this.setState(prev => ({
      edit: id === prev.edit ? "" : id
    }));
  };

  toggleDelete = (e, id) => {
    e.preventDefault();
    this.setState(prev => ({
      delete: id === prev.delete ? "" : id
    }));
  };

  render() {
    return (
      <div className="instructor">
        <h1>Welcome {this.state.user.username}</h1>
        {this.state.instructorInfo ? (
          <InstructorChange
            instructorInfo={this.state.instructorInfo}
            user={this.state.user}
            refresh={this.refresh}
          />
        ) : (
          <></>
        )}
        <button onClick={this.toggleCreate}>
          {this.state.isCreate ? "Cancel" : "Create a new Program"}
        </button>
        {this.state.isCreate && (
          <CreateProgram
            className="createProgram"
            user={this.state.user}
            refresh={this.refresh}
          />
        )}
        <Programs
          programs={this.state.programs}
          refresh={this.refresh}
          user={this.state.user}
          toggleDelete={this.toggleDelete}
          toggleEdit={this.toggleEdit}
          edit={this.state.edit}
          delete={this.state.delete}
        />
      </div>
    );
  }
}

export default Instructor;
