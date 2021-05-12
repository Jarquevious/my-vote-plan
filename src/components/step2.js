// Step2.js
import React from "react";

function Step2(props) {
  return (
    <div>
        <label style={{ marginRight: 10 }}>Email</label>
        <input 
        name="email" 
        value={props.getState('email', '')} 
        onChange={props.handleChange}
        />
        <br />
            
        <label style={{ marginRight: 10 }}>Phone</label>
        <input 
        name="phone" 
        value={props.getState('phone', '')} 
        onChange={props.handleChange}
        />
        <br />
      
    </div>
    
  );
}

export default Step2;