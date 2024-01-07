/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const CtaCardDefault = ({ className, ellipseClassName, divClassName }) => {
  return (
    <div className={`CTA-card-default ${className}`}>
      <div className={`ellipse-3 ${ellipseClassName}`} />
      <p className={`text-wrapper-48 ${divClassName}`}>Neonatal Intensive Care Unit (NICU)</p>
    </div>
  );
};
