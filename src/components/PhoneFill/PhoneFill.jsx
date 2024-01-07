/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PhoneFill = ({ className, phoneFill = "https://c.animaapp.com/Pc6Y5XOd/img/phone-fill-2.png" }) => {
  return <img className={`phone-fill ${className}`} alt="Phone fill" src={phoneFill} />;
};

PhoneFill.propTypes = {
  phoneFill: PropTypes.string,
};
