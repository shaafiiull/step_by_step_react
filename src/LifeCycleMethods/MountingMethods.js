import React, { Component } from "react";
import MountingMethodsChild from "./MountingMethodsChild.js";

class MountingMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shams",
    };
    console.log(
      "First: constructor is the First lifecycle method when component is being mounted"
    );
  }
  static getDerivedStateFromProps(props, state) {
    console.log(
      "Second: getDerivedStateFromProps is the Second lifecycle method when component is being mounted"
    );
    return null;
  }
  componentDidMount() {
    console.log(
      "Fourth: componentDidMount is the Fourth lifecycle method when component is being mounted"
    );
  }
  render() {
    console.log(
      "Third: render method is the Third lifecycle method when component is being mounted"
    );
    return (
      <div>
        <h1>Hello from mounting </h1>
        <MountingMethodsChild></MountingMethodsChild>
      </div>
    );
  }
}

export default MountingMethods;
