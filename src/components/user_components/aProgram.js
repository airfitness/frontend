import React from "react";
import Atype from "./aType";
import PunchCard from "./punchCard";
import "./user_styles/aProgram.css";

const Aprogram = props => {
  const words = ['fitness', 'hiking', 'yoga', 'running', 'swim', 'strong', 'flexible', 'strength', 'jogging', 'gym'];
  const num = Math.floor(Math.random() * 10);
  return (
    <div className="program">
    <img className="post-photo" src={`https://source.unsplash.com/1600x1200/?${words[num]}`} alt="random" />
      <div className="words">
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
          <PunchCard
        punchCard={props.aProgram}
        user={props.user}
        refresh={props.refresh}
      />
        </div>
      </div>

    </div>
  );
};

export default Aprogram;
