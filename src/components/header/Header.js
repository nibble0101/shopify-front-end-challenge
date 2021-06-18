import React from "react";
import Menu from "./Menu";
import "../../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <span>MOVIE</span><span className="header__blue-text">DEN</span>
      </h1>
      <Menu />
    </header>
  );
}
