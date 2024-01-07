/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CtaSwipeLeft } from "../../icons/CtaSwipeLeft";
import { CtaSwipeLeft6 } from "../../icons/CtaSwipeLeft6";
import "./style.css";

export const NamecandidateNameCtaScore10001 = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "swipe-left",
  });

  return (
    <div
      className={`namecandidate-name-CTA-score-1000-1 ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "swipe-left" && <CtaSwipeLeft6 className="CTA-swipe-left-2" />}

      {state.property1 === "variant-2" && <CtaSwipeLeft className="CTA-swipe-left-2" />}
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

NamecandidateNameCtaScore10001.propTypes = {
  property1: PropTypes.oneOf(["swipe-left", "variant-2"]),
};
