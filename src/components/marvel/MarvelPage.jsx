import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelPage = () => {
  return (
    <div>
      <h2>Marvel heroes page</h2>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
