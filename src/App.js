import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

export function App() {
  const [color, setColor] = useState("red");
  const [enable, setEnable] = useState(true);

  const changeColor = () =>
    color === "red" ? setColor("blue") : setColor("blue");
  return (
    <div className="App">
      <button
        style={{ backgroundColor: `${enable ? color : "grey"}` }}
        onClick={() => changeColor()}
        disabled={!enable}
      >
        Change to {color === "red" ? "blue" : "red"}
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
