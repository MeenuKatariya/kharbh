/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ name, size, type, icon, className, backToHomeClassName, text = "Sign in" }) => {
  return (
    <button className={`button ${size} ${type} ${className}`}>
      {icon === "off" && <div className={`back-to-home ${backToHomeClassName}`}>{text}</div>}

      {icon === "on" && (
        <>
          <div className="archive" />
          <div className="div">{text}</div>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.oneOf(["button"]),
  size: PropTypes.oneOf(["full", "half"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
};
