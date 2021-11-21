import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginPage = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: { name: "Pedro" },
    });

    navigate(-1);
  };

  return (
    <div className="p-5 d-flex flex-column ">
      <h1 className="text-center text-danger">LOGIN</h1>
      <hr />

      <button
        className="btn btn-outline-dark p-3 w-25 text-center fw-bolder m-auto"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
