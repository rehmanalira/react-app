
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {


  const [mode, setMode] = useState('light');
  const [greenmode, setgreenmode] = useState('green')

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {

    setalert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleGreenMode = () => {
    if (greenmode === 'green') {
      setgreenmode('yellow');
      document.body.style.backgroundColor = 'yellow';

    } else {
      setgreenmode('green');
      document.body.style.backgroundColor = 'green';

    }
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0f2740';
      showAlert('Dark Mode is Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled ", "success");


    }
  }
  return (
    <>
      {/* <Navbar title="Shadow" about="AboutProp" /> */}
      <Router>
        <Navbar title="Shadow" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm heading="Enter Your Text Here " showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
