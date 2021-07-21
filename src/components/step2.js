// Step2.js
import React from "react";
import "./Step2.css";
import CurrentElections from "./CurrentElections";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { CardHeader } from "@material-ui/core";



function Step2(props) {
  return (
    <Card bordered={false} className="CardCurrentElections">
      <CardHeader className="CurrentElectionCardTitle" title="Current Elections" />
      <Divider variant="middle" />
    <div>
      <CurrentElections />
    </div>
    </Card>
  );
}

export default Step2;
