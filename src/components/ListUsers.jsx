import api from "../services/api";
import React, { useEffect, useState } from "react";
import ListForm from "./ListForm";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.auth.users();
        const data = await response.data;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    try {
      await api.auth.deleteUser(`${id}`);
    } catch (error) {
      console.log(error);
    }
    setUsers(
      users.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const editUser = async (edit, input) => {
    setUsers(
      users.map((item) => {
        if (item.id === edit.id) {
          return { ...item, ...input };
        }
        return item;
      })
    );
    try {
      await api.auth.patchUser(`${edit.id}`, {
        ...edit,
        ...input,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (input) => {
    console.log(input);
    try {
      await api.auth.registration(input);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ListForm
        items={users}
        handleDelete={deleteUser}
        handleEdit={editUser}
        title="User"
        handleCreate={createUser}
      />
    </div>
  );
}

export default ListUsers;
