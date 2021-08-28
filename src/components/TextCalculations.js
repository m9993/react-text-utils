import React from "react";

export default function TextCalculations(props) {
  return (
    <div className="container my-4 small  border-start border-4 rounded-3 border-warning">
      <p className="my-0">
        {
          props.text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length
        }
        &nbsp;words and {props.text.length}&nbsp;characters
      </p>
      <p className="my-0">
        {0.005 *
          props.text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length}
        &nbsp; minutes read
      </p>
    </div>
  );
}
