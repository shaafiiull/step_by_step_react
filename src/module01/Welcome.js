import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>This is welcome from class component</h1>
        <p>
          I am {this.props.name} and My age is {this.props.age}
        </p>
        <button>{this.props.children}</button>
      </div>
    );
  }
}

export default Welcome;
