import React from "react";
import { Navigate, Route } from "react-router-dom";
import { ROUTE_LOGIN } from "../common/routes";
import { LS_ESHOP_ACCESS_TOKEN } from "../common/constants";

const ProtectedRoute = ({ location, ...props }) => {
  const isLoggedIn = !!localStorage.getItem(LS_ESHOP_ACCESS_TOKEN)

  console.log({loggedin: isLoggedIn})
  if (!isLoggedIn) {
    return (
      <Route path={ROUTE_LOGIN} element={<Navigate replace to="/login" />} />
    );
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
