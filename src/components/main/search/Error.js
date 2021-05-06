import React from "react";

export default function Error(props) {
  return (
    <p className="error">
      {props.message ? props.message : "Unknown error has occurred"}
    </p>
  );
}
