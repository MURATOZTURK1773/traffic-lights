import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [currentColor, setCurrentColor] = useState("red");
  const colors = ["red", "green", "yellow"];

  const nextColorIndex = (colors.indexOf(currentColor) + 1) % colors.length;
  const nextColor = colors[nextColorIndex];

  const handleNextState = () => {
    setCurrentColor(nextColor);
  };
  //I intentionally did not format the return part with prettier, i think it makes it more complicated fyi.
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle red ${currentColor === 'red' ? 'active' : 'black'}`} style={{ backgroundColor: currentColor === 'red' ? 'red' : 'black' }}></div>
        <div className={`circle yellow ${currentColor === 'yellow' ? 'active' : 'black'}`} style={{ backgroundColor: currentColor === 'yellow' ? 'yellow' : 'black' }}></div>
        <div className={`circle green ${currentColor === 'green' ? 'active' : 'black'}`} style={{ backgroundColor: currentColor === 'green' ? 'green' : 'black' }}></div>
      </div>
      <button className="next-state-button" onClick={handleNextState}>Next State</button>
    </div>
  );


};





