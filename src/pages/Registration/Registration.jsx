import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbitReg = async (e) => {
    e.preventDefault();

    try {
      const data = await api.auth.registration({
        name: name,
        login: name,
        password: password,
      });
      console.log(data);
      //navigate('/adminpanel')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="submit" onSubmit={handleSumbitReg}>
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
      <Link to="/">
        <span>Login</span>
      </Link>
    </div>
  );
}

export default Registration;
