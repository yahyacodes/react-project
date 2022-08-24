import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className="button"
      onClick={props.onClick}
    >
      Add Name
    </button>
  );
};

export default Button;
