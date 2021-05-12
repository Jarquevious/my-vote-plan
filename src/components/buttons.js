 
        // Step1.js
import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <br />
      <button type="primary" onClick={props.prev}>Previous</button>
      <br />
      <button type="primary" onClick={props.next}>Next</button>
    </div>
  );
   
}

export default Buttons;