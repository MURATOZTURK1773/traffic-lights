import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [currentColor, setCurrentColor] = useState("red");
  const colors = ["red", "green", "yellow"];

  const nextColorIndex = (colors.indexOf(currentColor) + 1) % colors.length;
  const nextColor = colors[nextColorIndex];

  const handleNextState = () => {
    setCurrentColor(nextColor);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className="circle red"
          style={{ backgroundColor: currentColor === "red" ? "red" : "black" }}
        ></div>
        <div
          className="circle yellow"
          style={{
            backgroundColor: currentColor === "yellow" ? "yellow" : "black",
          }}
        ></div>
        <div
          className="circle green"
          style={{
            backgroundColor: currentColor === "green" ? "green" : "black",
          }}
        ></div>
      </div>
      <button className="next-state-button" onClick={handleNextState}>
        Next State
      </button>
    </div>
  );
};
