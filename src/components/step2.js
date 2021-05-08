// Step2.js
import React from "react";

function Step2(props) {
  return (
    <div>
      <input name="email" value={props.getState('email', '')} onChange={props.handleChange}/><br />
      <input name="phone" value={props.getState('phone', '')} onChange={props.handleChange}/><br />
    </div>
  );
}

export default Step2;