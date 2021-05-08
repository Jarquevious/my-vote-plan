// Step1.js
import React from "react";
import Buttons from '../components/buttons'

function Step1(props) {
  return (
    <div className="Step1div">
    <label>First Name</label>
      <input name="name" value={props.getState('name', '') } onChange={props.handleChange} /> 
      <br />
      <input name="surname" value={props.getState('surname', '')} onChange={props.handleChange} />
      <br />
      <Buttons />
      
      </div>

  );
   
}

export default Step1;