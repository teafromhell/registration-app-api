import React, { useState } from "react";

function ListForm({ items, handleDelete, handleEdit, title, handleCreate }) {
  const [input, setInput] = useState({});
  const [edit, setEdit] = useState(-1);
  //console.log(items);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    //console.log(input);
  };

  const handleSubmit = (item) => {
    handleEdit(item, input);
    setEdit(-1);
    setInput({});
  };

  return (
    <>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        defaultValue={input.name || ""}
        onChange={handleChange}
      />
      <label htmlFor="comment">Comment</label>
      <input
        type="text"
        name="comment"
        defaultValue={input.comment || ""}
        onChange={handleChange}
      />
      <label htmlFor="login">Login</label>
      <input
        type="text"
        name="login"
        defaultValue={input.login || ""}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        defaultValue={input.password || ""}
        onChange={handleChange}
      />
      <button onClick={() => handleCreate(input)}>Create {title}</button>

      {items.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.comment}</div>
            <div>{item.login}</div>
            <div>{item.password}</div>
            <button onClick={() => setEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            {item.id === edit && (
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={item.name || input.name}
                  onChange={handleChange}
                />
                <label htmlFor="comment">Comment</label>
                <input
                  type="text"
                  name="comment"
                  defaultValue={item.comment || input.comment}
                  onChange={handleChange}
                />
                <label htmlFor="login">Login</label>
                <input
                  type="text"
                  name="login"
                  defaultValue={item.login || input.login}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  defaultValue={item.password || input.password}
                  onChange={handleChange}
                />

                <button onClick={() => handleSubmit(item)}>Save</button>
                <button
                  onClick={() => {
                    setEdit(-1);
                  }}
                >
                  Back
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ListForm;
