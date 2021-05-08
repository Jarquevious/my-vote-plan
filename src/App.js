import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Steps, Step } from "react-step-builder";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import FinalStep from "./components/step3";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Vote Plan</h1>
         </header>
         <div className="Steps">
            <Steps>
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
