import React from "react";
import { useParams, Navigate, useNavigate } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroPage = ({ history }) => {
  // const params = useParams(); Esto lo desestructuro para sacar el heroeID
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const hero = getHeroById(heroeId);

  const { superhero, alter_ego, first_appearance, publisher, characters } =
    hero;

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="./" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 p-4">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flash">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p> {characters} </p>.
        <button className="btn btn-outline-primary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
