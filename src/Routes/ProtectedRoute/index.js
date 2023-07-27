import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  permission,
  location,
  ...rest
}) => {
  const permissions = useSelector((state) => state.auth.permissions);
  const isSuperUser = useSelector((state) => state.auth.isSuperUser);
  return (
    <>
      {permissions === "" ||
      isSuperUser ||
      permissions?.some((element) => permission.indexOf(element) !== -1) ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      )}
    </>
  );
};

export default ProtectedRoute;
