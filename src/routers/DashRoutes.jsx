import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { DcPage } from "../components/dc/DcPage";
import { HeroPage } from "../components/heroes/HeroPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { SearchPage } from "../components/search/SearchPage";
import { Navbar } from "../components/ui/Navbar";

export const DashRoutes = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelPage} />
          <Route exact path="/hero/:heroeId" component={HeroPage} />
          <Route exact path="/dc" component={DcPage} />
          <Route exact path="/search" component={SearchPage} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
