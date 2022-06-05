import React from "react";
import api from "../services/api";
import { useSelector } from "react-redux";
import Logout from "../components/Logout";
import { Link } from "react-router-dom";

function AdminPanel() {
  const { user } = useSelector((state) => state.user);
  const handleGet = async () => {
    try {
      const response = await api.auth.me();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <div>
      <Link to='stations'><span>Stations</span></Link>
      <Link to='users'><span>Users</span></Link>
      <Logout />
      <div>{user.name}</div>
      <button onClick={handleGet}>check</button>
    </div>
  );
}

export default AdminPanel;
