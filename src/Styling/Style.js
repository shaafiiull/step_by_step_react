import React from "react";
import "./StyleSheet.css";

const Style = (props) => {
  const className = props.shouldGreet ? "hello" : "bye";
  return (
    <div>
      <h1 className={className}>{props.greeting}</h1>
    </div>
  );
};

export default Style;
