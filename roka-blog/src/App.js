import "./App.css";
import Navbar from "./components/Navbar.js";
import TextArea from "./components/TextArea.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#383c40";
      showAlert("Enabled Dark mode", "success");
      document.title = "TextUtil Dark";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light mode", "success");
      document.title = "TextUtil Light";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} showAlert={showAlert} title="TextUtil"/>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/About" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextArea
                title="Enter some text to analyse"
                sideTitle="Please enter here"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
//at the end we always exports our components. This is to allow our components to be used by other js files
//Like here we export App component, which can now be imported to index.js
