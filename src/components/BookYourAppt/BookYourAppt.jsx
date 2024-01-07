/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ButtonSubmit } from "../ButtonSubmit";
import { CtaBookButton } from "../CtaBookButton";
import { DepartmentOpt } from "../DepartmentOpt";
import "./style.css";

export const BookYourAppt = ({ className }) => {
  return (
    <div className={`book-your-appt ${className}`}>
      <div className="overlap-2">
        <div className="book-your">
          <div className="name-box">
            <div className="overlap-group-2">
              <div className="text-wrapper-4">Name</div>
            </div>
          </div>
          <div className="phone-number-box">
            <div className="overlap-3">
              <div className="text-wrapper-5">Phone Number</div>
            </div>
          </div>
          <CtaBookButton className="CTA-book-button-instance" divClassName="design-component-instance-node" />
          <ButtonSubmit className="button-submit-instance" property1="default" />
        </div>
        <DepartmentOpt className="department-opt-instance" property1="default" />
      </div>
    </div>
  );
};
