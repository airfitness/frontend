import React from "react";
import Atype from "./aType";
import PunchCard from "./punchCard";
import "./user_styles/aProgram.css";

const Aprogram = props => {
  return (
    <div className="program">
      <div className="program-details">
        <p>class name: {props.aProgram.class_name}</p>
        <p>class times: {props.aProgram.times}</p>
        <p>class price: {props.aProgram.price}</p>
        <p>class location: {props.aProgram.location}</p>
        <br />
        {props.aProgram.types.map(aType => (
          <Atype aType={aType} />
        ))}
      </div>
      <PunchCard
        punchCard={props.aProgram}
        user={props.user}
        refresh={props.refresh}
      />
    </div>
  );
};

export default Aprogram;
