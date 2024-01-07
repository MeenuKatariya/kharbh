/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DivWrapper } from "../DivWrapper";
import "./style.css";

export const CtaButtonAlert = ({ property1, className, divWrapperDivClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`CTA-button-alert ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <DivWrapper
        className={`${state.property1 === "variant-2" ? "class-17" : "class-18"}`}
        divClassName={divWrapperDivClassName}
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_enter":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

CtaButtonAlert.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
