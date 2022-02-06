import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

export function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [enable, setEnable] = useState(true);

  const changeColor = () =>
    color === "MediumVioletRed"
      ? setColor("MidnightBlue")
      : setColor("MidnightBlue");
  return (
    <div className="App">
      <button
        style={{ backgroundColor: `${enable ? color : "grey"}` }}
        onClick={() => changeColor()}
        disabled={!enable}
      >
        Change to{" "}
        {color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        aria-checked={!enable}
        onClick={() => setEnable(!enable)}
      />
    </div>
  );
}

export default App;
