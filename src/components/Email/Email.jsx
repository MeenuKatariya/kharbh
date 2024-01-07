/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Email = ({ className, text = "+9124567890" }) => {
  return (
    <div className={`email ${className}`}>
      <div className="overlap-group-6">
        <div className="group-3">
          <div className="text-wrapper-55">Email on:</div>
          <div className="element">{text}</div>
        </div>
        <div className="message-open-fill">
          <img className="subtract" alt="Subtract" src="https://c.animaapp.com/Pc6Y5XOd/img/subtract-2.svg" />
        </div>
      </div>
    </div>
  );
};

Email.propTypes = {
  text: PropTypes.string,
};
