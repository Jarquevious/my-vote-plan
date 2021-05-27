// Step1.js
import React from "react";
import Input from '@material-ui/core/Input';
import "./Step1.css";
import Card from '@material-ui/core/Card';
import Divider from "@material-ui/core/Divider";
import { CardHeader } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';






function Step1(props) {
  return (
   
      <Card bordered={false} className="Contact">
        <CardHeader className="ContactInformation" title="Contact Information"/> 
      
        <Divider variant="middle" />
        <br />
        <form>
          <InputLabel style={{ marginRight: 420 }}>First Name</InputLabel>
        
          <TextField
          margin="dense"
            size="small"
            style ={{width: '87%'}}
            label="David"
            variant="outlined"
            color="secondary"
            name="name"
            value={props.getState("name", "")}
            onChange={props.handleChange}
          />
          <br />
          <br />

          <label style={{ marginRight: 420 }}>Last Name</label>
          <br />
          <Input
            className="TextBox"
            placeholder="Chiu"
            name="surname"
            value={props.getState("surname", "")}
            onChange={props.handleChange}
          />
          <br />
          <br />

          <label style={{ marginRight: 400 }}>Email Address</label>
          <input
            className="TextBox"
            placeholder="david@email.com"
            name="email"
            value={props.getState("email", "")}
            onChange={props.handleChange}
          />
          <br />
          <br />

          <label style={{ marginRight: 420 }}>Cell Phone</label>
          <input
            className="TextBox"
            placeholder="415)879-3200"
            name="phone"
            value={props.getState("phone", "")}
            onChange={props.handleChange}
          />
          <br />
        </form>
      </Card>
    
  );
}

export default Step1;
