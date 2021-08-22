import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      document.querySelector("body").classList.add("bg-dark");
      document.querySelector("body").classList.add("text-light");
      setMode("dark");
    } else {
      setMode("light");
      document.querySelector("body").classList.remove("bg-dark");
      document.querySelector("body").classList.remove("text-light");
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
    console.log(document.querySelector("#home"));
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
        <Navbar
          toggleMode={toggleMode}
          mode={mode}
          active={active}
          alert={alert}
          showAlert={showAlert}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Home mode={mode} showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
