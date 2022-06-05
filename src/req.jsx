import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Req({ children }) {
  const { user } = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/registration" />;
  }
  return children;
}

export default Req;
