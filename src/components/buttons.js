 
        // Step1.js
import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <br />
      <button onClick={props.prev}>Previous</button>
      <br />
      <button onClick={props.next}>Next</button>
    </div>
  );
   
}

export default Buttons;