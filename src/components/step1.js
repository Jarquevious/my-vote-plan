// Step1.js
import React from "react";
import { Input } from "antd";

function Step1(props) {
  return (
    <div className="Step1div">
      <label style={{ marginRight: 10 }}>First Name</label>
      <Input 
      
      name="name" 
      value={props.getState('name', '') } 
      onChange={props.handleChange} 
      /> 
      <br />
      <br />

      <br />
      <label style={{ marginRight: 10 }}>Last Name</label>
      <Input 
      
      name="surname" 
      value={props.getState('surname', '')} 
      onChange={props.handleChange} />
      <br />
      <br />
      
      
      </div>

  );
   
}

export default Step1;