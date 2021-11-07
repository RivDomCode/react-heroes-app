import React from "react";
import { HeroList } from "../heroes/HeroList";

export const DcPage = () => {
  return (
    <div>
      <h2>DC heroes page</h2>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};
