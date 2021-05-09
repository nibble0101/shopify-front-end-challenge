import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

export default function Menu() {
  const [isOpen, setIsOPen] = useState(false);
  const menuRef = useRef(null);
  function handleMenuClick() {
    const body = document.querySelector(".body");
    setIsOPen(!isOpen);
    if (isOpen) {
      menuRef.current.classList.remove("display-menu");
      body.classList.remove("lock-scroll");
      return;
    }
    menuRef.current.classList.add("display-menu");
    body.classList.add("lock-scroll");
  }

  return (
    <>
      <ul className="menu" ref={menuRef}>
        <li className="menu__item" onClick={handleMenuClick}>
          <NavLink activeClassName="menu__active-item" to="/">
            Home
          </NavLink>
        </li>
        <li className="menu__item" onClick={handleMenuClick}>
          <NavLink activeClassName="menu__active-item" to="/nominations">
            Nominations
          </NavLink>
        </li>
      </ul>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={handleMenuClick}
        width={18}
        height={15}
        strokeWidth={2}
        rotate={0}
        color="#b1b4ba"
        borderRadius={0}
        animationDuration={0.5}
        className="hamburger-menu-icon"
      />
    </>
  );
}
