/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ExpandDown2 } from "../../icons/ExpandDown2";
import "./style.css";

export const DepartmentOpt = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`department-opt ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div
        className="overlap-group-11"
        onClick={() => {
          dispatch("click_924");
        }}
      >
        {state.property1 === "default" && (
          <>
            <div className="text-wrapper-2">Department</div>
            <ExpandDown2 className="expand-down" />
          </>
        )}

        {state.property1 === "variant-3" && (
          <div className="overlap-group">
            <div className="overlap">
              <div className="text-wrapper-2">Department</div>
              <img className="vector" alt="Vector" src="https://c.animaapp.com/Pc6Y5XOd/img/vector-9.svg" />
            </div>
            <div className="frame">
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">Cardiac Science</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">Gynaecology</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">Gastroenterology</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">Nephrology</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">Neurology</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">Anesthesia</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">ENT</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">Endocrinology</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">Emergency and Trauma</div>
              </div>
            </div>
            <img className="line" alt="Line" src="https://c.animaapp.com/Pc6Y5XOd/img/line-23.svg" />
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-3",
      };

    case "click_924":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

DepartmentOpt.propTypes = {
  property1: PropTypes.oneOf(["variant-3", "default"]),
};
