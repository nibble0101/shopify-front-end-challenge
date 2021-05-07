import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="header">
      <h1>
        MOVIE<span className="header__blue-text">DEN</span>
      </h1>
      <Menu />
    </header>
  );
}
