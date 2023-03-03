import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>Hello everyone from react functional component</h1>
      <p>
        I am {props.name} and My age is {props.age}
      </p>
      <button>{props.children}</button>
    </div>
  );
};

/* function Hello() {
  return (
    <div>
      <h1>Hello everyone from react functional component</h1>
    </div>
  );
} */

//functional component can be written as both arrow function and regular function.

export default Hello;
