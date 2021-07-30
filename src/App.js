import './App.css';
import React from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import FinalStep from './components/Step3';
import ButtonAppBar from './components/AppBar';
import Navigation from './components/Navigation';
import { Steps, Step } from 'react-step-builder';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

 function App() {

  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after" // or before
    }
  };
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
        <ButtonAppBar />
        <div className="Steps">
            <Steps config={config}>
              <Step component={Step1} />
              <Step component={Step2} />
              <Step component={FinalStep} />
            </Steps>
          </div>
      </div>
    </Provider>
  );
}

export default App;
