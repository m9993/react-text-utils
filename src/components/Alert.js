import React from "react";

export default function Alert(props) {
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      {props.alert && (
        <div
          className={`m-1 alert alert-${props.alert.type} small`}
          role="alert"
        >
          <strong>
            {props.alert.type.charAt(0).toUpperCase() +
              props.alert.type.slice(1).toLowerCase()}
          </strong>
          : {props.alert.msg}
        </div>
      )}
    </div>
  );
}
