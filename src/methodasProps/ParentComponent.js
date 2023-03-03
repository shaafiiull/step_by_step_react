import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.changeParentComponent = this.changeParentComponent.bind(this);
    this.addNumber = this.addNumber.bind(this);
  }
  /*   changeParentComponent() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  } */

  addNumber(num) {
    this.setState((state) => ({
      count: state.count + num,
    }));
  }

  render() {
    return (
      <div>
        <h1>Parent component's value: {this.state.count}</h1>
        {/*        <ChildComponent
          changeParentComponent={this.changeParentComponent}
        ></ChildComponent> */}
        <ChildComponent addNumber={this.addNumber}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
