import React from "react";
import { Link } from "react-router-dom";
import Registration from "../components/Registration";

function RegistrationPage() {
  return (
    <div>
      <Registration />
      <Link to="/">
        <span>Login</span>
      </Link>
    </div>
  );
}

export default RegistrationPage;
