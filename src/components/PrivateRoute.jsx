import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { Navigate } from "react-router";

const PrivateRoute = () => {
  const user = useSelector((store) => store.user.user);
  const name = user.name;
  const redirect = useNavigate();

  return name === "" ? <Outlet/>: <Navigate to={"/"}/>;
};

export default PrivateRoute;
