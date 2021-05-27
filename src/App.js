import "./App.css";
import React from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import FinalStep from "./components/Step3";
import ButtonAppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import { Steps, Step } from "react-step-builder";
import { BrowserRouter as Router } from "react-router-dom";

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
        {/* <header className="App-header">
          <h1>My Vote Plan</h1>
         </header> */}
         <ButtonAppBar />
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
