import React, { useState } from "react";

function FocusBlur() {

  const [message, setMessage] = useState("");

  function handleFocus() {
    setMessage("Input field is focused");
  }

  function handleBlur() {
    setMessage("Input field lost focus");
  }

  return (
    <div>

      <h2>Focus and Blur Events</h2>

      Enter your name:

      <br /><br />

      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <p>{message}</p>

    </div>
  );
}

export default FocusBlur;