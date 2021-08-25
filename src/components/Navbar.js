import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <Link
          onClick={() => {
            props.active("home");
          }}
          className="navbar-brand"
          to="/"
        >
          Text-Utils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                id="home"
                onClick={() => {
                  props.active("home");
                }}
                className="nav-link text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => {
                  props.active("about");
                }}
                id="about"
                className="nav-link"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="mode"
              onChange={() => {
                props.toggleMode();
              }}
            />
            <label className="form-check-label text-dark" htmlFor="mode">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
