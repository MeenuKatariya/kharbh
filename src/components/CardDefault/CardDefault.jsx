/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CtaCardDefaultWrapper } from "../CtaCardDefaultWrapper";
import "./style.css";

export const CardDefault = ({
  className,
  CTACardDefaultWrapperEllipseClassName,
  CTACardDefaultWrapperCtaCardDefaultClassName,
  CTACardDefaultWrapperDivClassName,
}) => {
  return (
    <div className={`card-default ${className}`}>
      <CtaCardDefaultWrapper
        className={CTACardDefaultWrapperCtaCardDefaultClassName}
        divClassName={CTACardDefaultWrapperDivClassName}
        ellipseClassName={CTACardDefaultWrapperEllipseClassName}
        text="Ample Parking Area"
      />
    </div>
  );
};
