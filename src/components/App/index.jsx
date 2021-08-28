import Header from "../Header";
import Container from "../Container";
import { Route } from "react-router-dom";
import Authorization from "../Authorization";
import React from "react";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Route path="/auth" component={Authorization} />
      <Header />
      <Container />
    </div>
  );
}

export default App;
