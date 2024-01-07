/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DrAtulNigam } from "../DrAtulNigam";
import "./style.css";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  drAtulNigamDrAtulNigamClassName,
  line = "https://c.animaapp.com/Pc6Y5XOd/img/line-17-2.svg",
  href,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <a
      className={`property-default-wrapper ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <DrAtulNigam className={drAtulNigamDrAtulNigamClassName} drAtulNigamMsClassName="dr-atul-nigam-instance" />
      <img
        className="img"
        alt="Line"
        src={state.property1 === "variant-2" ? "https://c.animaapp.com/Pc6Y5XOd/img/line-17-1.svg" : line}
      />
    </a>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  line: PropTypes.string,
  href: PropTypes.string,
};
