/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CtaSwipeLeft = ({ className }) => {
  return (
    <svg
      className={`cta-swipe-left ${className}`}
      fill="none"
      height="52"
      viewBox="0 0 52 52"
      width="52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="26" cy="26" r="25.5" stroke="black" />
      <path className="path" d="M21 14L31 26L21 38" stroke="black" strokeWidth="4" />
    </svg>
  );
};
