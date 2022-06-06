import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { setUser } from "../store/userSlice";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(false);
  const [valid, setValid] = useState(false);
  const handleReg = async (login, password) => {
    if (login && password) {
      try {
        const response = await api.auth.registration({
          name: login,
          login: login,
          password: password,
        });

        if (response) {
          const response = await api.auth.login({
            login: login,
            password: password,
          });
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
        setValid(true);
        console.log(error);
      }
    } else {
      setEmpty(true);
    }
  };
  return (
    <Form
      title="Register"
      handleClick={handleReg}
      handleEmpty={setEmpty}
      empty={empty}
      valid={valid}
      handleValid={setValid}
    />
  );
}

export default Registration;
