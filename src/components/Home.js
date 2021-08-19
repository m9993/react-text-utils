import React from "react";

export default function Home() {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Enter your text:
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
      ></textarea>
    </div>
  );
}
