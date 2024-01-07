/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NamecandidateNameComponentScore10001 } from "../NamecandidateNameComponentScore10001";
import "./style.css";

export const ComponentWrapper = ({
  className,
  namecandidateNameComponentScore10001Component30Vector = "https://c.animaapp.com/Pc6Y5XOd/img/vector.svg",
  imageWithoutTile = "https://c.animaapp.com/Pc6Y5XOd/img/image-without-tile.svg",
}) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <NamecandidateNameComponentScore10001
        className="component-2"
        component30Vector={namecandidateNameComponentScore10001Component30Vector}
        property1="default"
      />
      <div className="image-without-tile-wrapper">
        <div className="image-without-tile-2">
          <div className="text-wrapper-39">Agarwal . T</div>
        </div>
      </div>
      <div className="component-3">
        <div className="image-without-tile-3">
          <div className="text-wrapper-40">Shiv Sagar</div>
        </div>
      </div>
      <div className="component-4">
        <div className="image-without-tile-3">
          <div className="text-wrapper-41">Tania Nehwal</div>
        </div>
      </div>
      <div className="img-wrapper">
        <img className="image-without-tile-4" alt="Image without tile" src={imageWithoutTile} />
      </div>
    </div>
  );
};

ComponentWrapper.propTypes = {
  namecandidateNameComponentScore10001Component30Vector: PropTypes.string,
  imageWithoutTile: PropTypes.string,
};
