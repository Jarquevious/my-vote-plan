// FinalStep.js
import React from "react";
import Buttons from '../components/buttons';


function FinalStep(props) {
  return (
    <div>
      <p>Name: {props.state.name}</p>
      <p>Surname: {props.state.surname}</p>
      <p>Email: {props.state.email}</p>
      <p>Phone: {props.state.phone}</p>
      <Buttons />

    </div>
  );
}

export default FinalStep;
