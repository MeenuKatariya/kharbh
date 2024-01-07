/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CtaSwipeLeft2 } from "../../icons/CtaSwipeLeft2";
import { CtaSwipeLeft3 } from "../../icons/CtaSwipeLeft3";
import "./style.css";

export const PropertySwipeWrapper = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "swipe-left",
  });

  return (
    <div
      className={`property-swipe-wrapper ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "swipe-left" && <CtaSwipeLeft3 className="CTA-swipe-left" />}

      {state.property1 === "variant-2" && <CtaSwipeLeft2 className="CTA-swipe-left" />}
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
        property1: "swipe-left",
      };
  }

  return state;
}

PropertySwipeWrapper.propTypes = {
  property1: PropTypes.oneOf(["swipe-left", "variant-2"]),
};
