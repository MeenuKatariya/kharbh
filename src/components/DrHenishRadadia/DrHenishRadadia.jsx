/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const DrHenishRadadia = ({
  property1,
  className,
  drHenishRadadiaMdClassName,
  line = "https://c.animaapp.com/Pc6Y5XOd/img/line-17-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`dr-henish-radadia ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <p className={`dr-henish-radadia-MD ${drHenishRadadiaMdClassName}`}>
        <span className="text-wrapper-16">Dr. Henish Radadia</span>
        <span className="text-wrapper-17"> </span>
        <span className="text-wrapper-18">(MD) Consultant Gynaecologist</span>
      </p>
      <img
        className="line-4"
        alt="Line"
        src={state.property1 === "variant-2" ? "https://c.animaapp.com/Pc6Y5XOd/img/line-17-1.svg" : line}
      />
    </div>
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

DrHenishRadadia.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  line: PropTypes.string,
};
