/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CtaCardDefaultWrapper = ({
  className,
  ellipseClassName,
  divClassName,
  text = "Neonatal Intensive Care Unit (NICU)",
}) => {
  return (
    <div className={`CTA-card-default-wrapper ${className}`}>
      <div className={`ellipse-6 ${ellipseClassName}`} />
      <p className={`neonatal-intensive ${divClassName}`}>{text}</p>
    </div>
  );
};

CtaCardDefaultWrapper.propTypes = {
  text: PropTypes.string,
};
