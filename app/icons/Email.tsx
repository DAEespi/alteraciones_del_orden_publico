import Svg, { Path, Polyline } from "react-native-svg";
import React from "react";

const Email = ({ size = 32, color = "black" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M25 27H7c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v14c0 2.2-1.8 4-4 4z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Polyline
        points="3,10 16,18 29,10"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Email;
