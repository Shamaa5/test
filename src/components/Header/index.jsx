import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
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
