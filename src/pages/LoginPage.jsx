import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div>
      <Login />
      <Link to="/registration">
        <span>Create an account</span>
      </Link>
    </div>
  );
}

export default LoginPage;
