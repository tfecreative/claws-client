import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "Home";
import { Submission } from "Submission";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/submission" component={Submission} />
    </Switch>
  </>
);

export default Routes;
