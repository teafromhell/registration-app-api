import React from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { setUser } from "../store/userSlice";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReg = async (login, password) => {
    try {
      const response = await api.auth.registration({
        name: login,
        login: login,
        password: password,
      });

      //console.log(response);

      if (response) {
        const response = await api.auth.login({
          login: login,
          password: password,
        });
        //console.log(response.data);
        dispatch(
          setUser({
            name: login,
            login: login,
            password: password,
            token: response.data.user_jwt,
          })
        );
      }
      navigate("/adminpanel");
    } catch (error) {
      console.log(error);
    }
  };
  return <Form title="Register" handleClick={handleReg} />;
}

export default Registration;
