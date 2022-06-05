import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import AboutPage from './components/AboutPage';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const makeAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      makeAlert("dark mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <div className='container my-3'>
          <Navbar title="Navbar" mode={mode} toggleMode={toggleMode} />
          <Alerts alert={alert} />
          <Routes>
            <Route exact path="/about" element={<AboutPage mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm title="Enter your text bellow:" mode={mode} makeAlert={makeAlert} />}>
            </Route>
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;