import React, { useState } from "react";
import styles from "../styles/CreateForm.module.scss";

function CreateForm({ title, handleCreate, handleOpen }) {
  const [inputCreate, setInputCreate] = useState({});
  const handleChangeCreate = (e) => {
    setInputCreate({ ...inputCreate, [e.target.name]: e.target.value });
  };
  const handleSubmitCreate = () => {
    handleCreate(inputCreate);
    setInputCreate({});
    handleOpen(false);
  };
  return (
    <div className={styles.form}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        value={inputCreate.name || ""}
        onChange={handleChangeCreate}
      />
      <label htmlFor="comment">Comment</label>
      <textarea
        type="text"
        name="comment"
        value={inputCreate.comment || ""}
        onChange={handleChangeCreate}
      />

      {title === "User" && (
        <>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            name="login"
            value={inputCreate.login || ""}
            onChange={handleChangeCreate}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={inputCreate.password || ""}
            onChange={handleChangeCreate}
          />
        </>
      )}
      {title === "User" ? (
        <button
          disabled={
            (!inputCreate.name ||
              !inputCreate.login ||
              !inputCreate.password) &&
            true
          }
          onClick={handleSubmitCreate}
        >
          Create {title}
        </button>
      ) : (
        <button
          disabled={!inputCreate.name && true}
          onClick={handleSubmitCreate}
        >
          Create {title}
        </button>
      )}
      <button onClick={() => handleOpen(false)}>Back</button>
    </div>
  );
}

export default CreateForm;
