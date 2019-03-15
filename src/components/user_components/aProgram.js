import React from "react";
import Atype from "./aType";
import PunchCard from "./punchCard";
import "./user_styles/aProgram.css";

const Aprogram = props => {
  return (
    <div className="program">
      <div className="program-details">
        <p className="title">{props.aProgram.class_name}</p>
        <p>times: {props.aProgram.times}</p>
        <p>price: {props.aProgram.price}</p>
        <p>location: {props.aProgram.location}</p>
        <div className="types">
          {props.aProgram.types.map(aType => (
            <Atype aType={aType} />
          ))}
        </div>
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
