import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "../../Pages/Login";

const index = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </>
  );
};

export default index;
