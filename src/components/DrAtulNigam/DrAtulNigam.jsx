/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const DrAtulNigam = ({ className, drAtulNigamMsClassName }) => {
  return (
    <div className={`dr-atul-nigam ${className}`}>
      <p className={`dr-atul-nigam-MS ${drAtulNigamMsClassName}`}>
        <span className="span">Dr. Atul Nigam</span>
        <span className="text-wrapper-6">&nbsp;</span>
        <span className="text-wrapper-7"> </span>
        <span className="text-wrapper-8">(MS) Consultant Orthopedic Surgeon </span>
      </p>
    </div>
  );
};
