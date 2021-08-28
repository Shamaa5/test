import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import styles from './container.module.css'

function Container() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
      </Switch>
    </div>
  );
}

export default Container;
