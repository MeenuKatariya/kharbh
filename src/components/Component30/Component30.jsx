/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component30 = ({
  property1,
  className,
  imageWithoutTileClassName,
  vector = "https://c.animaapp.com/Pc6Y5XOd/img/vector-4.svg",
}) => {
  return (
    <div className={`component-30 ${className}`}>
      <div className={`image-without-tile ${imageWithoutTileClassName}`}>
        <img
          className="vector-2"
          alt="Vector"
          src={property1 === "variant-2" ? "https://c.animaapp.com/Pc6Y5XOd/img/vector-3.svg" : vector}
        />
        <div className="text-wrapper-34">Poli Sharma</div>
      </div>
    </div>
  );
};

Component30.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  vector: PropTypes.string,
};
