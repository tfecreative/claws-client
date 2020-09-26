import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "Home";

const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default Routes;
