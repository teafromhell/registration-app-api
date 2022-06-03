import axios from "../axios";

const endpoints = {
    registration: (data) => axios.post('/users', data),
    login: (data) => axios.post('/users/auth', data),
    me: (data) => axios.post("/users/me", data),
  };
  
  export default endpoints;