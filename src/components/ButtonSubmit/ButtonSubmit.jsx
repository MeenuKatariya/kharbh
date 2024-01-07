/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Button } from "../Button";
import "./style.css";

export const ButtonSubmit = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`button-submit ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <Button
        backToHomeClassName={`${state.property1 === "variant-2" ? "class-3" : "class-4"}`}
        className={`${state.property1 === "variant-2" ? "class-5" : "class-6"}`}
        icon="off"
        name="button"
        size="half"
        text="Submit"
        type="primary"
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

    case "click":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

ButtonSubmit.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
