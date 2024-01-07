/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const DrPriyankaGorasiya = ({
  property1,
  className,
  drPriyankaGorasiyaClassName,
  line = "https://c.animaapp.com/Pc6Y5XOd/img/line-17-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`dr-priyanka-gorasiya ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <p className={`div-2 ${drPriyankaGorasiyaClassName}`}>
        <span className="text-wrapper-22">Dr. Priyanka Gorasiya</span>
        <span className="text-wrapper-23"> </span>
        <span className="text-wrapper-24">(BHMS) Medical Officer</span>
      </p>
      <img
        className="line-6"
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

DrPriyankaGorasiya.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  line: PropTypes.string,
};
