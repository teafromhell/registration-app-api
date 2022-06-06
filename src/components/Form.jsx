import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Form.module.scss";

function Form({ title, handleClick, empty, handleValid, valid, handleEmpty }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    handleEmpty(false);
    handleValid(false);
  }, [name, password, handleEmpty, handleValid]);

  return (
    <div className={styles.form}>
      {empty && <p style={{ color: "brown" }}>Fill in all fields</p>}
      {valid && title === "Login" && (
        <p style={{ color: "brown" }}>Wrong name / password</p>
      )}
      {valid && title === "Register" && (
        <p style={{ color: "brown" }}>This name is already taken</p>
      )}
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="login"
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(name, password)}>{title}</button>
      {title === "Register" && (
        <Link to="/" className={styles.link}>
          <span>Login</span>
        </Link>
      )}
      {title === "Login" && (
        <Link to="/registration" className={styles.link}>
          <span>Create an account</span>
        </Link>
      )}
    </div>
  );
}

export default Form;
