import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero, alter_ego, first_appearance }) => {
  return (
    <div className="card ms-2 mb-4" style={{ maxWidth: 325 }}>
      <img
        src={`./assets/heroes/${id}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-center">{superhero}</h5>
        <p className="card-text text-center">{alter_ego}</p>
        <small className="text-center"> {first_appearance}</small> <br />
        <Link to={`./hero/${id}`}>More...</Link>
      </div>
    </div>
  );
};
