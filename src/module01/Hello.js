import React from "react";

// using destructuring props
const Hello = ({ name, age, children }) => {
  // const { name, age, children } = props;
  // destructuring can be done in function parameter or in function body
  return (
    <div>
      <h1>Hello everyone from react functional component</h1>
      <p>
        I am {name} and My age is {age}
      </p>
      <button>{children}</button>
    </div>
  );
};
// without destructuring
/* const Hello = (props) => {
  return (
    <div>
      <h1>Hello everyone from react functional component</h1>
      <p>
        I am {props.name} and My age is {props.age}
      </p>
      <button>{props.children}</button>
    </div>
  );
}; */

/* function Hello() {
  return (
    <div>
      <h1>Hello everyone from react functional component</h1>
    </div>
  );
} */

//functional component can be written as both arrow function and regular function.

export default Hello;
