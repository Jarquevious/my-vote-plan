import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Steps, Step } from "react-step-builder";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import FinalStep from "./components/step3";
import { Button, Col, Row } from "antd";
import VotingLocation from "./components/VotingLocation"


const Navigation = (props) => {
  console.log({ props });
  return (
    <Row align="center">
      <Col>
        <Button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </Button>
      </Col>
      <Col>
        <Button type="primary" onClick={props.next}>
          Next
        </Button>
      </Col>
    </Row>
  );
};



function App() {

  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after" // or before
    }
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Vote Plan</h1>
         </header>
         <VotingLocation />
         <div className="Steps">
            <Steps config={config}>
              <Step component={Step1} />
              <Step component={Step2} />
              <Step component={FinalStep} />
            </Steps>
          </div>
      
      </div>
    </Router>
  );
}

export default App;
