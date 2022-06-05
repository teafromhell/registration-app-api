import React from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { setUser } from "../store/userSlice";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (login, password) => {
    try {
      const response = await api.auth.login({
        login: login,
        password: password,
      });
      console.log(response.data);
      dispatch(
        setUser({
          name: login,
          login: login,
          password: password,
          token: response.data.user_jwt,
        })
      );
      navigate("/adminpanel");
    } catch (error) {
      console.log(error);
    }
  };

  return <Form title="Login" handleClick={handleLogin} />;
}

export default Login;
