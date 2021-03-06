import * as React from "react";

function Figure(props) {
  return (
    <svg viewBox="0 0 1440 256" style={{ height: "250px" }} {...props}>
      <path
        fill="#09f"
        d="M0 288l14.1-26.7C28.2 235 56 181 85 160c27.9-21 56-11 84 5.3 28.6 15.7 57 37.7 85 48 28.4 10.7 57 10.7 85 16 28.1 5.7 56 15.7 85 5.4 27.8-10.7 56-42.7 84-53.4 28.5-10.3 57-.3 85-5.3 28.2-5 56-27 85-48 27.9-21 56-43 84-32 28.6 11 57 53 85 74.7 28.3 21.3 57 21.3 85 0 28-21.7 56-63.7 84-58.7 28.7 5 57 59 85 53.3 28.4-5.3 57-69.3 85-74.6 28.1-5.7 56 48.3 85 64 27.8 16.3 56-5.7 84-37.4 28.5-32.3 57-74.3 71-96L1440 0H0z"
      />
    </svg>
  );
}

export default Figure;
