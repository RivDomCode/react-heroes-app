import React from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <div className="row d-flex justify-content-around animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
