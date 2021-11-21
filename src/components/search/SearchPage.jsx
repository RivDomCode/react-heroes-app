import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchPage = ({ history }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(queryString.parse(location.search));
  const { query = "" } = queryString.parse(location.search);
  console.log(query);

  const [formValues, handleInputChange] = useForm({
    searchText: query,
  });

  const { searchText } = formValues;

  const filteredHeroes = useMemo(() => getHeroesByName(query), [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?query=${searchText}`);
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />

      <div className="row">
        <div className="col-6 p-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Search
            </button>
          </form>
        </div>

        <div className="col-6 p-5 d-flex flex-column">
          <h4>Results</h4>
          <hr />

          {query === "" && (
            <div className=" alert alert-warning text-danger fw-bolder">
              Search a hero
            </div>
          )}

          {query !== "" && filteredHeroes.length === 0 && (
            <div className="alert alert-danger text-dark fw-bolder">
              There is no hero with {query} name!! Try again please!!
            </div>
          )}
          <div className="m-auto mt-3">
            {filteredHeroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
