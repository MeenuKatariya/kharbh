/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Component30 } from "../Component30";
import "./style.css";

export const NamecandidateNameComponentScore10001 = ({
  property1,
  className,
  component30Vector = "https://c.animaapp.com/Pc6Y5XOd/img/vector-5.svg",
}) => {
  return (
    <div className={`namecandidate-name-component-score-1000-1 property-1-6-${property1} ${className}`}>
      {property1 === "default" && (
        <Component30
          className="component-instance"
          imageWithoutTileClassName="component-30-instance"
          property1="default"
          vector={component30Vector}
        />
      )}

      {property1 === "variant-3" && (
        <p className="lorem-ipsum-dolor">
          <span className="text-wrapper-35">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus diam, cursus vitae commodo sed,
            pharetra sit amet neque.
          </span>
          <span className="text-wrapper-36"> </span>
          <span className="text-wrapper-37"> Poli Sharma&nbsp;&nbsp;| </span>
          <span className="text-wrapper-38"> Business Man</span>
        </p>
      )}
    </div>
  );
};

NamecandidateNameComponentScore10001.propTypes = {
  property1: PropTypes.oneOf(["variant-3", "default"]),
  component30Vector: PropTypes.string,
};
