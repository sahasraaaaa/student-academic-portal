import React, { useState } from "react";

function MouseEvents() {

  const [message, setMessage] = useState("");

  function handleClick() {
    setMessage("Mouse Click Event Triggered");
  }

  function handleDoubleClick() {
    setMessage("Mouse Double Click Event Triggered");
  }

  function handleMouseOver() {
    setMessage("Mouse Over Event Triggered");
  }

  function handleMouseOut() {
    setMessage("Mouse Out Event Triggered");
  }

  return (
    <div>

      <h2>Mouse Events Demonstration</h2>

      <button
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Perform Mouse Events
      </button>

      <p>{message}</p>

    </div>
  );
}

export default MouseEvents;