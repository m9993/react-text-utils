import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className={`m-1 alert alert-${props.alert.type}`} role="alert">
        <strong>{props.alert.type.toUpperCase()}</strong>: {props.alert.msg}
      </div>
    )
  );
}
