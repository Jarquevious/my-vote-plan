// FinalStep.js
import React, { useState } from "react";
import { useSelector } from "react-redux";

function FinalStep(props) {
  const savedElections = useSelector((state) => {
    return state.elections
   })
  return (
    <div>
      { savedElections.map((election) => <p>{election}</p> )}
    </div>
  );
}

export default FinalStep;
