// Step1.js
import React from "react";
import { Input } from "antd";
import "./Step1.css";
import { Card } from "antd";
import Divider from "@material-ui/core/Divider";

function Step1(props) {
  return (
    <div className="Step1div">
      <Card title="Contact" bordered={false} className="Title">
        <Divider variant="inset" />
        <br />
        <form>
          <label style={{ marginRight: 420 }}>First Name</label>
          <br />
          <Input
            className="TextBox"
            placeholder="David"
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
    </div>
  );
}

export default Step1;
