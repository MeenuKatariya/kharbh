/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArchiveRegular1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`archive-regular-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V8.25C2.25 8.66421 2.58579 9 3 9H21C21.4142 9 21.75 8.66421 21.75 8.25V6C21.75 5.58579 21.4142 5.25 21 5.25Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        className="path"
        d="M20.25 9V18C20.25 18.1989 20.171 18.3897 20.0303 18.5303C19.8897 18.671 19.6989 18.75 19.5 18.75H4.5C4.30109 18.75 4.11032 18.671 3.96967 18.5303C3.82902 18.3897 3.75 18.1989 3.75 18V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        className="path"
        d="M9.75 12.75H14.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
};

ArchiveRegular1.propTypes = {
  color: PropTypes.string,
};
