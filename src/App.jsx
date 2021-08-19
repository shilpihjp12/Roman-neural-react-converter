import React, { useState } from "react";
import "./styles.css";

import {
  romanNumerals,
  calculateRomanVal,
  calculateIntValue
} from "./Util/converter";

export default function App() {
  const [isValidNumeral, SetisValidNumeral] = useState(true);
  const [input, Setinput] = useState("");
  const [result, SetResult] = useState(null);

  /**
   * Takes a string and returns true if each character is
   * a valid roman numeral
   * @returns {Boolean}
   */
  const checkValidNumeral = () => {
    debugger;
    var i = 0;
    let roman = false;
    if (!isNaN(input)) {
      if (input > 9999999) {
        SetisValidNumeral(false);
        return;
      } else {
        SetResult(calculateRomanVal(input));
      }
    } else {
      for (i; i < input.length; i += 1) {
        if (romanNumerals[input.charAt(i)] === undefined) {
          SetisValidNumeral(false);
          return;
        } else {
          roman = true;
        }
      }
      if (roman) {
        SetResult(calculateIntValue(input));
      }
    }
    SetisValidNumeral(true);
  };

  return (
    <div className="App">
      <div className="Component">
        <label className="LabelText">
          Enter a valid Roman Numeral or integer above
        </label>
        {!isValidNumeral ? (
          <div style={{ color: "red" }} class="TextStyle">
            Invalid Roman Numeral or integer
          </div>
        ) : null}
        <input
          class="Input"
          onChange={(e) => {
            Setinput(e.target.value);
            SetResult(null);
            SetisValidNumeral(true);
          }}
          type="text"
        />

        {result ? (
          isNaN(result) ? (
            <div style={{ color: "green" }} class="TextStyle">
              Roman Value: {result}
            </div>
          ) : (
            <div style={{ color: "green" }} class="TextStyle">
              Number Value: {result}
            </div>
          )
        ) : null}
        <button
          style={{
            backgroundColor: "#004a96",
            border: "none",
            height: "24px",
            fontWeight: "bold",
            fontSize: "12px",
            color: "white"
          }}
          onClick={checkValidNumeral}
        >
          convert Value
        </button>
      </div>
    </div>
  );
}
