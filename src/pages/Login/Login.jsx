import React, { useState } from "react";

import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("qq");
  const [password, setPassword] = useState("qq");

  const handleSumbitLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await api.auth.login({ login: name, password: password });
      console.log(data);
      navigate("/adminpanel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSumbitLogin}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <Link to="/registration">
        <span>Create an account</span>
      </Link>
    </div>
  );
}

export default Login;
