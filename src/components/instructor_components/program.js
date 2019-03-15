import React from "react";
import ProgramPunches from "./programPunches";
import EditProgram from "./editProgram";
import Type from "./type";

// class Program extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       program: props.program
//     };
//   }
//   render() {
const Program = props => {
  console.log(props);
  return (
    <div className="program">
      <h3>Program/class</h3>
      <div className="program-details">
      <p className="title">{props.program.class_name}</p>
        <p>times: {props.program.times}</p>
        <p>price: {props.program.price}</p>
        <p>location: {props.program.location}</p>
        <br />
        <div className="types">
        {props.program.types.map(type => (
          <Type type={type} refresh={props.refresh} />
        ))}
        </div>
      </div>
      <button onClick={(e) => props.toggleEdit(e, props.program.id)}>{props.edit === props.program.id ? 'cancel' : 'Edit Program'}</button>
      {props.edit === props.program.id && <EditProgram
        program={props.program}
        refresh={props.refresh}
        user={props.user}
      />}
      <ProgramPunches
        id={props.program.id}
        user={props.user}
        refresh={props.refresh}
      />
    </div>
  );
};
// }

export default Program;
