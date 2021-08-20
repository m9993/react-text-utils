import React from "react";

export default function Home(props) {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Enter your text:
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        style={
          props.mode === "dark"
            ? { backgroundColor: "#0d6efd0a", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      ></textarea>
    </div>
  );
}
