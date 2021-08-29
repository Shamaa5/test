import React from "react";
import {NavLink, useParams} from "react-router-dom";
import styles from './header.module.css'

function Header() {
  const params = useParams()
    return (
    <header className={(params.id = 'auth') ?  styles.none : ''}>
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
