/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CtaSendButton } from "../CtaSendButton";
import "./style.css";

export const Cta = ({ property1, className, visible = true }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "send-button",
  });

  return (
    <button
      className={`CTA ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {visible && (
        <CtaSendButton
          className={`${state.property1 === "variant-2" ? "class" : "class-2"}`}
          divClassName="CTA-send-button-instance"
        />
      )}
    </button>
  );
};

function reducer(state, action) {
  if (state.property1 === "send-button") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "send-button",
        };
    }
  }

  return state;
}

Cta.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "send-button"]),
  visible: PropTypes.bool,
};
