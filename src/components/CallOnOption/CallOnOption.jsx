/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PhoneFill4 } from "../../icons/PhoneFill4";
import { PhoneFill5 } from "../../icons/PhoneFill5";
import { Group } from "../Group";
import "./style.css";

export const CallOnOption = ({ className, icon = <PhoneFill5 className="phone-fill-5" /> }) => {
  return (
    <div className={`call-on-option ${className}`}>
      <div className="overlap-4">
        <Group
          className="group-14"
          divClassName="group-14-instance"
          divClassNameOverride="group-2"
          overlapGroupClassName="group-instance"
        />
        {icon}
        <PhoneFill4 className="phone-fill-4" />
      </div>
    </div>
  );
};
