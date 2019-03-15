import React, { Component } from "react";
import Axios from "axios";

class PDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class_name: "",
      instructorName: "",
      times: "",
      location: ""
    };
  }
  componentDidMount() {
    const id = this.props.id;
    Axios.get(`https://airfitness.herokuapp.com/api/classes/${id}`)
      .then(res =>
        this.setState({
          class_name: res.data.class_name,
          instructorName: res.data.instructorName,
          times: res.data.times,
          location: res.data.location
        })
      )
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        Class Name: {this.state.class_name}
        <br />
        Instructor Name: {this.state.instructorName}
        <br />
        Times: {this.state.times}
        <br />
        Location: {this.state.location}
      </div>
    );
  }
}

export default PDetails;
