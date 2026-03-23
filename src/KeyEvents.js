import React from "react";

function KeyEvents() {

  function handleKeyUp() {
    alert("Key Up Event Triggered");
  }

  function handleKeyDown() {
    alert("Key Down Event Triggered");
  }

  function handleKeyPress() {
    alert("Key Press Event Triggered");
  }

  return (
    <div>
      <h2>Keyboard Events</h2>

      Type something:

      <input
        type="text"
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
      />

    </div>
  );
}

export default KeyEvents;