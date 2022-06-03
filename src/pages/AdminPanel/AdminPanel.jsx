import React from "react";
//import api from "../../services/api";
import axios from "axios";

function AdminPanel() {

  const handleGet = async () => {

    const user_jwt = JSON.parse(localStorage.getItem("token"));

    const auth = {
      headers: {
        "user-jwt": user_jwt,
      },
    };

    try {
      const res = await axios.get("https://test-api.piar.ee/users/me", auth);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleGet}>check</button>
    </div>
  );
}

export default AdminPanel;
