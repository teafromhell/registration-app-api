import React, { useState } from "react";

function Form({ title, handleClick }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="login"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(name, password)}>{title}</button>
    </div>
  );
}

export default Form;
