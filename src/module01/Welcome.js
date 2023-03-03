import React, { Component } from "react";

// in class components destructuring is done inside of render method
class Welcome extends Component {
  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        <h1>This is welcome from class component</h1>
        <p>
          I am {name} and My age is {age}
        </p>
        <button>{children}</button>
      </div>
    );
  }
}
/* class Welcome extends Component {
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
} */

export default Welcome;
