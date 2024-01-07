/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const DrChetanPrajapati = ({
  property1,
  className,
  drChetanPrajapatiClassName,
  line = "https://c.animaapp.com/Pc6Y5XOd/img/line-17-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`dr-chetan-prajapati ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <p className={`p ${drChetanPrajapatiClassName}`}>
        <span className="text-wrapper-19">Dr. Chetan Prajapati</span>
        <span className="text-wrapper-20"> </span>
        <span className="text-wrapper-21">(MBBS) Medical Officer</span>
      </p>
      <img
        className="line-5"
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

DrChetanPrajapati.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  line: PropTypes.string,
};
