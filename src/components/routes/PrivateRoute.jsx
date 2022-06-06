import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  if (!user.token) {
    return <Navigate to="/registration" />;
  }
  return children;
}

export default PrivateRoute;