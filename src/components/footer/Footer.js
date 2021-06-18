import React from "react";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <span>&copy; Movie Den 2021. By{" "}</span>
        <a href="https://github.com/nibble0101" className="footer__link">
          Joseph Mawa
        </a>
      </p>
    </footer>
  );
}
