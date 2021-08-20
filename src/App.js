import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
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
  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <Home mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
