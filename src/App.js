import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("success");
  const [btn, setbtn] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const darkMode = () => {
    if (mode === "success") {
      setmode("dark");
      setbtn("Enable light Mode");
      document.body.style.backgroundColor = "#5E5E5E";
      showAlert("Enable dark mode", "success");
    } else {
      setmode("success");
      setbtn("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Enable light mode", "success");
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} togleMode={darkMode} btn={btn} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Text mode={mode} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
