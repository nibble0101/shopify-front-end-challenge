import React from "react";
import "../../../styles/Loader.css";

// Source: https://loading.io/css/

export default function Loader() {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
