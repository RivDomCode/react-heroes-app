import React from "react";

export const LoginPage = ({ history }) => {
  const handleLogin = () => {
    history.push("/");
  };

  return (
    <div className="p-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
