import React, { useState } from "react";

function ReverseNumber() {

  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  function reverseNumber() {
    let reversed = num.toString().split("").reverse().join("");
    setResult(reversed);
  }

  return (
    <div>
      <h2>Reverse Number</h2>

      Enter Number:
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={reverseNumber}>Reverse</button>

      <br /><br />

      Reversed Number:
      <input type="text" value={result} readOnly />
    </div>
  );
}

export default ReverseNumber;