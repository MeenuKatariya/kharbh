/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import "./style.css";

export const NamecandidateNameDrDhruvangMehtaScore10001 = ({
  property1,
  className,
  concreteComponentNodePropertyDefaultClassName,
  line = "https://c.animaapp.com/Pc6Y5XOd/img/line-17-2.svg",
  concreteComponentNodeDrDhruvangMehtaDrDhruvangMehtaMdClassName,
  concreteComponentNodeDrDhruvangMehtaDrDhruvangMehtaClassName,
  concreteComponentNodeDrDhruvangMehtaText,
  concreteComponentNodeDrDhruvangMehtaText1,
  lineClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`namecandidate-name-dr-dhruvang-mehta-score-1000-1 ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <ConcreteComponentNode
        className={concreteComponentNodePropertyDefaultClassName}
        drDhruvangMehtaDrDhruvangMehtaClassName={concreteComponentNodeDrDhruvangMehtaDrDhruvangMehtaClassName}
        drDhruvangMehtaDrDhruvangMehtaMdClassName={concreteComponentNodeDrDhruvangMehtaDrDhruvangMehtaMdClassName}
        drDhruvangMehtaText={concreteComponentNodeDrDhruvangMehtaText1}
        drDhruvangMehtaText1={concreteComponentNodeDrDhruvangMehtaText}
        property1="default"
      />
      <img
        className={`line-2 ${lineClassName}`}
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

NamecandidateNameDrDhruvangMehtaScore10001.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  line: PropTypes.string,
  concreteComponentNodeDrDhruvangMehtaText: PropTypes.string,
  concreteComponentNodeDrDhruvangMehtaText1: PropTypes.string,
};
