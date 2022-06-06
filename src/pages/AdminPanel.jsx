import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

function AdminPanel() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "center", marginTop: "40px" }}>
          Welcome, {user.name}
        </h2>
      </div>
    </>
  );
}

export default AdminPanel;
