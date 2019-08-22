import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import React from "react";
import Question from "./Question";
export const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/question/:order" component={Question} />
      </Switch>
    </Router>
  </div>
);
