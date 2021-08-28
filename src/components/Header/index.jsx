import React from "react";
import { NavLink } from "react-router-dom";
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/news">
          <li>News</li>
        </NavLink>
        <NavLink to="/auth">
          <li>SingUp</li>
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
