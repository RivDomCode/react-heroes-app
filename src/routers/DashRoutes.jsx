import React from "react";
import { Route, Routes } from "react-router";
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
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/hero/:heroeId" element={<HeroPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<MarvelPage />} />
        </Routes>
      </div>
    </>
  );
};
