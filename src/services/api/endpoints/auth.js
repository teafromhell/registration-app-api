import axios from "../axios/global";


// if (JSON.parse(localStorage.getItem("user"))) {
//   var auth = {
//     headers: {
//       "user-jwt": JSON.parse(localStorage.getItem("user")).token,
//     },
//   };
// }


const endpoints = {
  registration: (data) => axios.post("/users", data),
  login: (data) => axios.post("/users/auth", data),
  users: () => axios.get("/users", {
    headers: {
      "user-jwt": JSON.parse(localStorage.getItem("user")).token,
    },
  }),
  deleteUser: (id) => axios.delete(`/users/${id}`, {
    headers: {
      "user-jwt": JSON.parse(localStorage.getItem("user")).token,
    },
  }),
  patchUser: (id, data) => axios.patch(`/users/${id}`, data, {
    headers: {
      "user-jwt": JSON.parse(localStorage.getItem("user")).token,
    },
  }),
  stations: () => axios.get("/stations", {
    headers: {
      "user-jwt": JSON.parse(localStorage.getItem("user")).token,
    },
  }),
  createStation: (data) => axios.post("/stations", data, {
    headers: {
      "user-jwt": JSON.parse(localStorage.getItem("user")).token,
    },
  }),
  deleteStation: (id) => axios.delete(`/stations/${id}`, {
    headers: {
      "user-jwt": JSON.parse(localStorage.getItem("user")).token,
    },
  }),
  patchStation: (id, data) => axios.patch(`/stations/${id}`, data, {
    headers: {
      "user-jwt": JSON.parse(localStorage.getItem("user")).token,
    },
  }),
};

export default endpoints;
