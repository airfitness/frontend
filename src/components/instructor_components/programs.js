import React from "react";
import Program from "./program";

// class Programs extends Component {
//   constructor(props) {
//     console.log(props.programs);
//     super(props);
//     this.state = {
//       programs: props.programs
//     };
//   }
const Programs = props => {
  // render() {
  return (
    <div>
      programs list:
      {props.programs.map(program => (
        <Program program={program} user={props.user} refresh={props.refresh} />
      ))}
    </div>
  );
};
// }

export default Programs;
