import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="menu">
      <li className="menut__item">
        <NavLink activeClassName="menut__active-item" to="/">
          Home
        </NavLink>
      </li>
      <li className="menut__item">
        <NavLink activeClassName="menut__active-item" to="/nominations">
          Nominations
        </NavLink>
      </li>
    </ul>
  );
}
