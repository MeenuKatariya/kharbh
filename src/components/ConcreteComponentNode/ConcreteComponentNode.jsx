/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DrDhruvangMehta } from "../DrDhruvangMehta";
import "./style.css";

export const ConcreteComponentNode = ({
  property1,
  className,
  drDhruvangMehtaDrDhruvangMehtaClassName,
  drDhruvangMehtaDrDhruvangMehtaMdClassName,
  drDhruvangMehtaText,
  drDhruvangMehtaText1,
}) => {
  return (
    <div className={`concrete-component-node ${className}`}>
      <DrDhruvangMehta
        className={drDhruvangMehtaDrDhruvangMehtaClassName}
        drDhruvangMehtaMdClassName={drDhruvangMehtaDrDhruvangMehtaMdClassName}
        text={drDhruvangMehtaText1}
        text1={drDhruvangMehtaText}
      />
    </div>
  );
};

ConcreteComponentNode.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  drDhruvangMehtaText: PropTypes.string,
  drDhruvangMehtaText1: PropTypes.string,
};
