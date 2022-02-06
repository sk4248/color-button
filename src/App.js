import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [enable, setEnable] = useState(true);

  const changeColor = () =>
    color === "red" ? setColor("blue") : setColor("blue");
  return (
    <div className="App">
      <button
        style={{ backgroundColor: `${color}` }}
        onClick={() => changeColor()}
        disabled={!enable}
      >
        Change to {color === "red" ? "blue" : "red"}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        id="disable-button-checkbox"
        role="checkbox"
        aria-checked={!enable}
        onClick={() => setEnable(!enable)}
      />
    </div>
  );
}

export default App;
