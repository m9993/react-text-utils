import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import TextCalculations from "./components/TextCalculations";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");
  const [text, setText] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      document.querySelector("body").classList.add("bg-dark");
      document.querySelector("body").classList.add("text-light");
      setMode("dark");
      showAlert("success", "Dark mode enabled");
    } else {
      document.querySelector("body").classList.remove("bg-dark");
      document.querySelector("body").classList.remove("text-light");
      setMode("light");
      showAlert("success", "Dark mode disabled");
    }
  };

  const active = (link) => {
    if (link === "home") {
      document.querySelector("#home").classList.add("text-dark");
      document.querySelector("#about").classList.remove("text-dark");
    }
    if (link === "about") {
      document.querySelector("#about").classList.add("text-dark");
      document.querySelector("#home").classList.remove("text-dark");
    }
  };

  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} active={active} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Home mode={mode} text={text} setText={setText} />
              <Buttons text={text} setText={setText} showAlert={showAlert} />
              <TextCalculations text={text} />
              <div className="small px-3 border-start border-4 rounded-3 border-warning">
                <h5>Preview</h5>
                <p className="my-0">
                  {text === "" ? "Nothing to preview" : text}
                </p>
              </div>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
