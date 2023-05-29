import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      disabled={props.isValid ? false : true}
      type={props.type}
      className={`button ${props.isValid ? "" : "disable"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
