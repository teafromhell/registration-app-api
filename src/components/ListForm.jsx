import React, { useState } from "react";
import CreateForm from "./CreateForm";
import styles from "../styles/ListForm.module.scss";

function ListForm({ items, handleDelete, handleEdit, title, handleCreate }) {
  const [input, setInput] = useState({});
  const [edit, setEdit] = useState(-1);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (item) => {
    handleEdit(item, input);
    setEdit(-1);
    setInput({});
  };

  return (
    <div className={styles.wrapper}>
      <div style={{ alignSelf: "center" }}>
        <button
          style={{ cursor: "pointer", marginTop: "10px", padding: "5px 10px" }}
          onClick={() => setOpen(!open)}
        >
          Create New {title}
        </button>
        {open && (
          <div className={styles.editWrapper}>
            <CreateForm
              title={title}
              handleCreate={handleCreate}
              handleOpen={setOpen}
            />
          </div>
        )}
      </div>
      <div className={styles.form}>
        {items.length ? (
          items
            .sort((a, b) => (a.id < b.id ? 1 : -1))
            .map((item) => {
              return (
                <div key={item.id} className={styles.singleCard}>
                  <label>id:{item.id} </label>
                  <label>Name: {item.name}</label>

                  <label>Comment: {item.comment}</label>
                  {title === "User" && (
                    <>
                      <label>Login: {item.login}</label>
                    </>
                  )}
                  <div className={styles.btns}>
                    <button onClick={() => setEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                  {item.id === edit && (
                    <div className={styles.editWrapper}>
                      <div className={styles.edit}>
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          defaultValue={item.name || input.name}
                          onChange={handleChange}
                        />
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          type="text"
                          name="comment"
                          defaultValue={item.comment || input.comment}
                          onChange={handleChange}
                        />
                        {title === "User" && (
                          <>
                            <label htmlFor="login">Login</label>
                            <input
                              type="text"
                              name="login"
                              defaultValue={item.login || input.login}
                              onChange={handleChange}
                            />
                            {/* <label htmlFor="password">Password</label>
                            <input
                              type="text"
                              name="password"
                              defaultValue={item.password || input.password}
                              onChange={handleChange}
                            /> */}
                          </>
                        )}
                        <div className={styles.btns}>
                          <button onClick={() => handleSubmit(item)}>
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setEdit(-1);
                            }}
                          >
                            Back
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
        ) : (
          <div className={styles.no}>
            <h4>No {title}s yet</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListForm;
