/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DrChetanPrajapati } from "../DrChetanPrajapati";
import { DrHenishRadadia } from "../DrHenishRadadia";
import { DrPriyankaGorasiya } from "../DrPriyankaGorasiya";
import { DrTruptiPatel } from "../DrTruptiPatel";
import { NamecandidateNameDrDhruvangMehtaScore10001 } from "../NamecandidateNameDrDhruvangMehtaScore10001";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper";
import "./style.css";

export const Component50 = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`component-50 property-1-1-${state.property1} ${className}`}
      // onClick={() => {
      //   dispatch("click");
      // }}
    >
      <div className="overlap-group-3">
        {["variant-2", "variant-3"].includes(state.property1) && (
          <>
            <div className="rectangle" />
            <div className="frame-2">
              <div className="text-wrapper-25">Admin</div>
              <div className="text-wrapper-26">Doctors</div>
              <div className="text-wrapper-27">Superintendent</div>
            </div>
            <div className="ellipse" />
          </>
        )}

        {state.property1 === "default" && (
          <>
            <div className="dr-atul-nigam-MS-wrapper">
              <p className="dr-atul-nigam-MS-2">
                <span className="text-wrapper-28">Dr. MP Chandran</span>
                <span className="text-wrapper-29"> </span>
                <span className="text-wrapper-30">Chairman</span>
              </p>
            </div>
            <img className="line-7" alt="Line" src="https://c.animaapp.com/Pc6Y5XOd/img/line-12-5.svg" />
          </>
        )}
      </div>
      {state.property1 === "variant-2" && (
        <>
          <PropertyDefaultWrapper
            className="instance-node"
            drAtulNigamDrAtulNigamClassName="dr-atul-nigam-2"
            href=""
            line="https://c.animaapp.com/Pc6Y5XOd/img/line-12-4.svg"
            property1="default"
          />
          <NamecandidateNameDrDhruvangMehtaScore10001
            className="dr-dhruvang-mehta-instance"
            concreteComponentNodeDrDhruvangMehtaDrDhruvangMehtaClassName="dr-dhruvang-mehta-3"
            concreteComponentNodeDrDhruvangMehtaDrDhruvangMehtaMdClassName="dr-dhruvang-mehta-2"
            concreteComponentNodeDrDhruvangMehtaText="Dr. Dhruvang Mehta"
            concreteComponentNodeDrDhruvangMehtaText1="(MD) Consultant Physician "
            concreteComponentNodePropertyDefaultClassName="dr-dhruvang-mehta-4"
            line="https://c.animaapp.com/Pc6Y5XOd/img/line-14-4.svg"
            property1="default"
          />
          <DrTruptiPatel
            className="dr-trupti-patel-instance"
            drTruptiPatelMdClassName="instance-node-2"
            line="https://c.animaapp.com/Pc6Y5XOd/img/line-12-4.svg"
            property1="default"
          />
          <DrHenishRadadia
            className="dr-henish-radadia-instance"
            drHenishRadadiaMdClassName="instance-node-2"
            line="https://c.animaapp.com/Pc6Y5XOd/img/line-14-4.svg"
            property1="default"
          />
          <DrChetanPrajapati
            className="dr-chetan-prajapati-instance"
            drChetanPrajapatiClassName="instance-node-2"
            line="https://c.animaapp.com/Pc6Y5XOd/img/line-12-4.svg"
            property1="default"
          />
          <DrPriyankaGorasiya
            className="dr-priyanka-gorasiya-instance"
            drPriyankaGorasiyaClassName="instance-node-2"
            line="https://c.animaapp.com/Pc6Y5XOd/img/line-14-4.svg"
            property1="default"
          />
        </>
      )}

      {state.property1 === "variant-3" && (
        <div className="dr-atul-nigam-3">
          <div className="dr-atul-nigam-4">
            <p className="dr-atul-nigam-MS-3">
              <span className="text-wrapper-28">Sr. Rosily Paul </span>
              <span className="text-wrapper-29"> </span>
              <span className="text-wrapper-30">Resident Medical Superintendent</span>
            </p>
          </div>
          <img className="line-8" alt="Line" src="https://c.animaapp.com/Pc6Y5XOd/img/line-12-3.svg" />
        </div>
      )}

      {["default", "variant-3"].includes(state.property1) && (
        <NamecandidateNameDrDhruvangMehtaScore10001
          className={`${state.property1 === "variant-3" ? "class-15" : "class-16"}`}
          concreteComponentNodeDrDhruvangMehtaDrDhruvangMehtaClassName={`${
            state.property1 === "variant-3" ? "class-7" : "class-8"
          }`}
          concreteComponentNodeDrDhruvangMehtaDrDhruvangMehtaMdClassName={`${
            state.property1 === "variant-3" ? "class-9" : "class-10"
          }`}
          concreteComponentNodeDrDhruvangMehtaText={
            state.property1 === "variant-3" ? "Sr. Nilima Anil " : "Blessy Thomas"
          }
          concreteComponentNodeDrDhruvangMehtaText1={
            state.property1 === "variant-3" ? "Nursing Superintendent" : "Chief Executive Officer"
          }
          concreteComponentNodePropertyDefaultClassName={`${state.property1 === "variant-3" ? "class-11" : "class-12"}`}
          line={
            state.property1 === "variant-3"
              ? "https://c.animaapp.com/Pc6Y5XOd/img/line-14-3.svg"
              : "https://c.animaapp.com/Pc6Y5XOd/img/line-14-5.svg"
          }
          lineClassName={`${state.property1 === "variant-3" ? "class-13" : "class-14"}`}
          property1="default"
        />
      )}

      {state.property1 === "default" && (
        <div className="overlap-group-4">
          <div className="rectangle" />
          <div className="frame-2">
            <div className="text-wrapper-31">Admin</div>
            <div className="text-wrapper-32">Doctors</div>
            <div className="text-wrapper-33">Superintendent</div>
          </div>
          <div className="ellipse-2" />
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
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
          property1: "variant-3",
        };
    }
  }

  return state;
}

Component50.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
