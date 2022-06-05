import axios from "../axios/global";

const auth = {
  headers: {
    "user-jwt": JSON.parse(localStorage.getItem("user")).token || null,
  },
};

const endpoints = {
  registration: (data) => axios.post("/users", data),
  login: (data) => axios.post("/users/auth", data),
  me: () => axios.get("/users/me", auth),
  users: () => axios.get("/users", auth),
  deleteUser: (id) => axios.delete(`/users/${id}`, auth),
  patchUser: (id, data) => axios.patch(`/users/${id}`, data, auth),
};

export default endpoints;
