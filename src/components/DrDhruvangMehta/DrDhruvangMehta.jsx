/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DrDhruvangMehta = ({
  className,
  drDhruvangMehtaMdClassName,
  text = "Dr. Dhruvang Mehta",
  text1 = "(MD) Consultant Physician ",
}) => {
  return (
    <div className={`dr-dhruvang-mehta ${className}`}>
      <p className={`dr-dhruvang-mehta-MD ${drDhruvangMehtaMdClassName}`}>
        <span className="text-wrapper-9">{text}</span>
        <span className="text-wrapper-10"> </span>
        <span className="text-wrapper-11">{text1}</span>
      </p>
    </div>
  );
};

DrDhruvangMehta.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
