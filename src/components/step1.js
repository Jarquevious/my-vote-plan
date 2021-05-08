// Step1.js
import React from "react";

function Step1(props) {
  return (
    <div className="Step1div">
    <label>First Name</label>
      <input name="name" value={props.getState('name', '') } onChange={props.handleChange} /> 
      <br />
      <input name="surname" value={props.getState('surname', '')} onChange={props.handleChange} />
    </div>
  );
}

export default Step1;