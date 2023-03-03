import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      {/*   <button onClick={props.changeParentComponent}>
        Change the value of Parent component's value
      </button> */}
      <button onClick={() => props.addNumber(5)}>Add Number</button>
    </div>
  );
};

export default ChildComponent;
