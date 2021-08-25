import React from "react";
import { Route, Switch } from "react-router-dom";
import Avtorization from "./Avtorization";
import Home from "./Home";
import News from "./News";

function Container() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/singUp" component={Avtorization} />
      </Switch>
    </div>
  );
}

export default Container;
