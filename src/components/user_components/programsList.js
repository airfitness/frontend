import React from "react";
import Aprogram from "./aProgram";
import "./user_styles/programsList.css";

const ProgramsList = props => {
  return (
    <div className="programs">
      <h3>programs list:</h3>
      {props.programsList.map(aProgram => (
        <Aprogram
          aProgram={aProgram}
          user={props.user}
          refresh={props.refresh}
        />
      ))}
    </div>
  );
};

export default ProgramsList;
