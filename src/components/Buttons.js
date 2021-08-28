import React from "react";

export default function Buttons(props) {
  const clearText = () => {
    props.setText("");
    props.showAlert("success", "Text cleared");
  };
  const toUpperCase = () => {
    props.setText(props.text.toUpperCase());
    props.showAlert("success", "Text converted to upper case");
  };
  const toLowerCase = () => {
    props.setText(props.text.toLowerCase());
    props.showAlert("success", "Text converted to lower case");
  };
  const copyText = () => {
    navigator.clipboard.writeText(props.text);
    props.showAlert("success", "Text copied to clipboard");
  };
  const removeExtraSpaces = () => {
    props.setText(props.text.split(/[ ]+/).join(" "));
    props.showAlert("success", "Extra spaces removed");
  };
  return (
    <div>
      <button
        disabled={props.text.length === 0}
        className="btn btn-primary m-1 btn-sm"
        onClick={clearText}
      >
        Clear
      </button>
      <button
        disabled={props.text.length === 0}
        className="btn btn-primary m-1 btn-sm"
        onClick={toUpperCase}
      >
        Upper Case
      </button>
      <button
        disabled={props.text.length === 0}
        className="btn btn-primary m-1 btn-sm"
        onClick={toLowerCase}
      >
        Lower Case
      </button>
      <button
        disabled={props.text.length === 0}
        className="btn btn-primary m-1 btn-sm"
        onClick={copyText}
      >
        Copy Text
      </button>
      <button
        disabled={props.text.length === 0}
        className="btn btn-primary m-1 btn-sm"
        onClick={removeExtraSpaces}
      >
        Remove Extra Spaces
      </button>
    </div>
  );
}
